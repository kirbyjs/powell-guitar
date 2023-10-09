import { gql } from 'graphql-request';

const { VITE_CONTENTFUL_EVENTS_PAGE_ID } = import.meta.env;

export const eventsQuery = gql`
  {
    events(id: "${VITE_CONTENTFUL_EVENTS_PAGE_ID}", preview: false) {
      title
      generalInformation {
        json
      }
      songsCollection {
        items {
          ... on Music {
            title
            artist
            description
            song {
              url
            }
          }
        }
      }
      backgroundImage {
        url
      }
      guitarAndFluteTitle
      generalGuitarAndFluteInformation {
        json
      }
    }
  }
`;
