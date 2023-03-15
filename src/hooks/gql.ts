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
  const preview = route.url.searchParams.get('preview') === 'true';
  const store = useStore<gqlResponse<Partial<D>>>({
    data: {},
  });
  useContextProvider(cxt, store);

  useTask$(async () => {
    const client = preview ? gqlClientPreview : gqlClient;

    store.isLoading = true;
    store.data = await client.request<D>(query);
    store.isLoading = false;
  });

  return store;
}
