import React from "react";
import { graphql } from "gatsby";
import HeroSection from "../components/whoWeAre/HeroSection";
import { SEO } from "../components/SEO";
import ContentSection from "../components/whoWeAre/ContentSection";



const WhoWeArePage = () => (
  <>
    <HeroSection />
    <ContentSection />
  </>
);

export default WhoWeArePage;

export const query = graphql`
  query WhoWeArePageQuery {
    sanityWhoWeAre { seo { ...SeoFields } }
  }
`;

export const Head = ({ data, location }) => (
  <SEO seo={data?.sanityWhoWeAre?.seo} pathname={location.pathname} />
);
