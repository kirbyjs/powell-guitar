import { GraphQLClient } from 'graphql-request';

const {
  VITE_CONTENTFUL_GRAPHQL,
  VITE_CONTENTFUL_SPACE_ID,
  VITE_PREVIEW_TOKEN,
  VITE_DELIVERY_TOKEN,
  VITE_PREVIEW,
} = import.meta.env;
const endpoint = `${VITE_CONTENTFUL_GRAPHQL}${VITE_CONTENTFUL_SPACE_ID}`;

export const gqlClientPreview = new GraphQLClient(endpoint, {
  fetch,
  headers: {
    authorization: `Bearer ${VITE_PREVIEW_TOKEN}`,
  },
});

const token =
  VITE_PREVIEW === 'true' ? VITE_PREVIEW_TOKEN : VITE_DELIVERY_TOKEN;
export const gqlClient = new GraphQLClient(endpoint, {
  fetch,
  headers: {
    authorization: `Bearer ${token}`,
  },
});
