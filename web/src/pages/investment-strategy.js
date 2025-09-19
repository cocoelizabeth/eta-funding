import React from "react";
import HeroSection from "../components/investmentStrategy/HeroSection";
import { SEO } from "../components/SEO";
import ContentSection from "../components/investmentStrategy/ContentSection";
import ComparisonTable from "../components/investmentStrategy/ComparisonTable";

const investmentStrategyPage = () => (
  <>
    <SEO title="Investment Strategy | ETA FUNDING" />
    <HeroSection />
    <ContentSection />
    {/* <ComparisonTable /> */}
    {/* <CriteriaLists /> */}
    {/* <ContactSection /> */}
  </>
);

export default investmentStrategyPage;

export const Head = () => <SEO title="Investment Strategy | ETA FUNDING" />;
