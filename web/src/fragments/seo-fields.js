// Shared SEO GraphQL fragment for main pages that mirrors studio/schemaTypes/objects/customSEO.js

import { graphql } from "gatsby";

export const query = graphql`
  fragment SeoFields on SanityCustomSEO {
    metaTitle
    metaDescription
    ogTitle
    ogDescription
    ogImage {
      alt
      asset {
        url
        gatsbyImageData
      }
    }
    canonicalUrl
    noindex
    schemaType
    jsonLd
  }
`;


// TO-DO***: IMPORT slug