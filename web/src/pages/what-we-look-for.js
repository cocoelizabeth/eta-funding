import React from "react";
import { graphql } from "gatsby";
import HeroSection from "../components/whatWeLookFor/HeroSection";
import { SEO } from "../components/SEO";
import CriteriaLists from "../components/whatWeLookFor/CriteriaLists";


const WhatWeLookForPage = () => (
  <>
    <HeroSection />
    <CriteriaLists />
  </>
);

export default WhatWeLookForPage;

export const query = graphql`
  query WhatWeLookForPageQuery {
    sanityWhatWeLookFor { seo { ...SeoFields } }
  }
`;

export const Head = ({ data, location }) => (
  <SEO seo={data?.sanityWhatWeLookFor?.seo} pathname={location.pathname} />
);