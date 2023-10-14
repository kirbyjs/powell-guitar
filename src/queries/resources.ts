import { gql } from 'graphql-request';

const { VITE_CONTENTFUL_RESOURCES_PAGE_ID } = import.meta.env;

export const resourcesQuery = gql`
  {
    resources(id: "${VITE_CONTENTFUL_RESOURCES_PAGE_ID}", preview: false) {
      title
      lessonResources {
        json
        links {
          assets {
            hyperlink {
              sys {
                id
              }
              url
            }
          }
        }
      }
      faqCollection {
        items {
          ... on FaqItem {
            answer
            question
          }
        }
      }
    }
  }
`;
