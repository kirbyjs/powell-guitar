import { gql } from "graphql-request";

export const footerQuery = gql`
    {
        footer(id: "${
          import.meta.env.VITE_CONTENTFUL_FOOTER_ID
        }", preview: true) {
        title
        phone
        email
        socialMediaIconsCollection(preview: true) {
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
