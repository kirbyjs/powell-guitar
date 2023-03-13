import { gql } from "graphql-request";

export const landingPageQuery = gql`
  {
    landingPage(id: "${
      import.meta.env.VITE_CONTENTFUL_LANDING_PAGE_ID
    }", preview: true) {
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
