import { GraphQLClient } from 'graphql-request';

const {
  VITE_CONTENTFUL_GRAPHQL,
  VITE_CONTENTFUL_SPACE_ID,
  VITE_CONTENTFUL_BEARER_TOKEN,
} = import.meta.env;
const endpoint = `${VITE_CONTENTFUL_GRAPHQL}${VITE_CONTENTFUL_SPACE_ID}`;

export const gqlClient = new GraphQLClient(endpoint, {
  fetch,
  headers: {
    authorization: `Bearer ${VITE_CONTENTFUL_BEARER_TOKEN}`,
  },
});
