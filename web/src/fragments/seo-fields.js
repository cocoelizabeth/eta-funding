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


//