import { gql } from 'graphql-request';

const { VITE_CONTENTFUL_LANDING_PAGE_ID } = import.meta.env;

export const landingPageQuery = gql`
  {
    landingPage(id: "${VITE_CONTENTFUL_LANDING_PAGE_ID}", preview: true) {
      title
      introduction
      testimonialsCollection(preview: true) {
        items {
          ... on Testimonial {
            author
            location
            testimonial
          }
        }
      }
      serviceCardsCollection(preview: true) {
        items {
          ... on ServiceCard {
            cardTitle
            cardDescription
            cardPhoto {
              url
            }
          }
        }
      }
    }
  }
`;
