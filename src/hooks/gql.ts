import type { ContextId, QRL } from '@builder.io/qwik';
import { useContextProvider, useStore, useTask$ } from '@builder.io/qwik';
import { gqlClient, gqlClientPreview } from '~/services/contentful';
import { useLocation } from '@builder.io/qwik-city';

export interface gqlResponse<D> {
  data: D;
  isLoading?: boolean;
}
export function useGraphQLQuery<D extends object>(
  query: string,
  cxt: ContextId<gqlResponse<D>>,
  dataMapper?: QRL<(data: any) => Promise<any>>,
) {
  const route = useLocation();
  const store = useStore<gqlResponse<Partial<D>>>({
    data: {},
  });
  useContextProvider(cxt, store);

  useTask$(async () => {
    const preview = route.url.searchParams.get('preview') === 'true';
    const q = preview
      ? query.replace(/preview:\s*false/g, 'preview: true')
      : query;
    const client = preview ? gqlClientPreview : gqlClient;
    let data = await client.request<D>(q);

    if (dataMapper) {
      data = await dataMapper(data);
    }

    store.isLoading = true;
    store.data = data;
    store.isLoading = false;
  });

  return store;
}
