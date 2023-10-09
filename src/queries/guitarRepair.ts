import { gql } from 'graphql-request';

const { VITE_CONTENTFUL_GUITAR_REPAIR_PAGE_ID } = import.meta.env;

export const guitarRepairQuery = gql`
  {
    repair(id: "${VITE_CONTENTFUL_GUITAR_REPAIR_PAGE_ID}", preview: false) {
      title
      callToAction
      generalInformation {
        json
      }
      services {
        json
      }
    }
  }
`;
