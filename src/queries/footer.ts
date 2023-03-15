import { gql } from 'graphql-request';

const { VITE_CONTENTFUL_FOOTER_ID } = import.meta.env;

export const footerQuery = gql`
  {
    footer(id: "${VITE_CONTENTFUL_FOOTER_ID}", preview: false) {
      title
      phone
      email
      socialMediaIconsCollection(preview: false) {
        items {
          ... on SocialMediaIcon {
            socialMediaLink
            socialMediaIcon {
              url
            }
          }
        }
      }
    }
  }
`;
