import { request } from "graphql-request";

export function contentfulRequest<R>(query: string) {
  return request<R>(
    `${import.meta.env.VITE_CONTENTFUL_GRAPHQL}${
      import.meta.env.VITE_CONTENTFUL_SPACE_ID
    }`,
    query,
    undefined,
    {
      Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_BEARER_TOKEN}`,
    }
  );
}
