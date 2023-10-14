import { gql } from 'graphql-request';

const { VITE_CONTENTFUL_ABOUT_PAGE_ID } = import.meta.env;

export const aboutQuery = gql`
  {
    about(id: "${VITE_CONTENTFUL_ABOUT_PAGE_ID}", preview: false) {
      title
      subTitle
      profilePicture {
        url
      }
      aboutDescription
    }
  }
`;
