import React from "react";
import HeroSection from "../components/whyUs/HeroSection";
import { SEO } from "../components/SEO";
import ContentSection from "../components/whyUs/ContentSection";
import ComparisonTable from "../components/whyUs/ComparisonTable";
const WhyUsPage = () => (
  <>
    <SEO title="Managed Fund | ETA FUNDING" />
    <HeroSection />
    <ContentSection />
    {/* <ComparisonTable /> */}
    {/* <CriteriaLists /> */}
    {/* <ContactSection /> */}
  </>
);

export default WhyUsPage;

export const Head = () => <SEO title="Managed Fund | ETA FUNDING" />;
