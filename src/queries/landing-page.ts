import { gql } from 'graphql-request';

const { VITE_CONTENTFUL_LANDING_PAGE_ID, VITE_PREVIEW } = import.meta.env;

const genLandingPageQuery = (preview: boolean) => gql`
  {
    landingPage(id: "${VITE_CONTENTFUL_LANDING_PAGE_ID}", preview: ${preview}) {
      title
      introduction
      testimonialsCollection(preview: ${preview}) {
        items {
          ... on Testimonial {
            author
            location
            testimonial
          }
        }
      }
      serviceCardsCollection(preview: ${preview}) {
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

export const landingPageQuery = genLandingPageQuery(VITE_PREVIEW);
export const landingPagePreviewQuery = genLandingPageQuery(true);
