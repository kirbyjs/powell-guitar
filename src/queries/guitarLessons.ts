import { gql } from 'graphql-request';

const { VITE_CONTENTFUL_GUITAR_LESSONS_PAGE_ID } = import.meta.env;

export const guitarLessonsQuery = gql`
  {
    guitarLessons(id: "${VITE_CONTENTFUL_GUITAR_LESSONS_PAGE_ID}", preview: false) {
      title
      generalInformationTitle
      generalInformation {
        json
      }
      curriculumTitle
      curriculumDetailsCollection(preview: false) {
        items {
          ... on Curriculum {
            header
            curriculumDetails {
              json
            }
          }
        }
      }
      pricingTitle
      pricingDataCollection(preview: false) {
        items {
          ... on PricingPlan {
            header
            numberOfSessions
            perSessionPrice
          }
        }
      }
    }
  }
`;
