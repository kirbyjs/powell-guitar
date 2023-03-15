import { gql } from 'graphql-request';

const { VITE_CONTENTFUL_FOOTER_ID, VITE_PREVIEW } = import.meta.env;

const genFooterQuery = (preview: boolean) => gql`
  {
    footer(id: "${VITE_CONTENTFUL_FOOTER_ID}", preview: ${preview}) {
      title
      phone
      email
      socialMediaIconsCollection(preview: ${preview}) {
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

export const footerQuery = genFooterQuery(VITE_PREVIEW);
export const footerPreviewQuery = genFooterQuery(true);
