import React from "react";
import { graphql } from "gatsby";
import HeroSection from "../components/investmentStrategy/HeroSection";
import { SEO } from "../components/SEO";
import ContentSection from "../components/investmentStrategy/ContentSection";
import ComparisonTable from "../components/investmentStrategy/ComparisonTable";

const investmentStrategyPage = () => (
  <>
    <HeroSection />
    <ContentSection />
    {/* <ComparisonTable /> */}
    {/* <CriteriaLists /> */}
    {/* <ContactSection /> */}
  </>
);

export default investmentStrategyPage;

export const query = graphql`
  query InvestmentStrategyPageQuery {
    sanityInvestmentStrategy { seo { ...SeoFields } }
  }
`;

export const Head = ({ data, location }) => (
  <SEO seo={data?.sanityInvestmentStrategy?.seo} pathname={location.pathname} />
);
