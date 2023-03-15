import {
  ContextId,
  useContextProvider,
  useStore,
  useTask$,
} from '@builder.io/qwik';
import { gqlClient, gqlClientPreview } from '~/services/contentful';
import { useLocation } from '@builder.io/qwik-city';

export interface gqlResponse<D> {
  data: D;
  isLoading?: boolean;
}
export function useGraphQLQuery<D extends object>(
  query: string,
  cxt: ContextId<gqlResponse<D>>,
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

    store.isLoading = true;
    store.data = await client.request<D>(q);
    store.isLoading = false;
  });

  return store;
}
