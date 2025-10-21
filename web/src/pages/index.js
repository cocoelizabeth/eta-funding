import React from "react";
import { graphql } from "gatsby";
import HeroSection from "../components/homepage/HeroSection";
import { SEO } from "../components/SEO";
import ContentSection from "../components/homepage/ContentSection";
import ContactSection from "../components/homepage/ContactSection";



const IndexPage = () => (
  <>
    <HeroSection />
    <ContentSection />
    <ContactSection />
  </>
);

export default IndexPage;

export const query = graphql`
  query HomePageQuery {
    sanityHome {
      seo {
        metaTitle
        metaDescription
        ogTitle
        ogDescription
        canonicalUrl
        schemaType
        noindex
        jsonLd
        ogImage {
          alt
          asset {
            url
          }
        }
      }
      # anything else you want for content…
      hero {
        _rawHeadlineTextCustom
        _rawSubHeadlineText
        cta
        link
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
  }
`;

export const Head = () => <SEO title="Home | ETA FUNDING" />;
