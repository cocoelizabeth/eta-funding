import React from "react";
import HeroSection from "../components/managedFund/HeroSection";
import { SEO } from "../components/SEO";
import ContentSection from "../components/managedFund/ContentSection";
import ComparisonTable from "../components/managedFund/ComparisonTable";
const ManagedFundPage = () => (
  <>
    <SEO title="Managed Fund | ETA FUNDING" />
    <HeroSection />
    <ContentSection />
    {/* <ComparisonTable /> */}
    {/* <CriteriaLists /> */}
    {/* <ContactSection /> */}
  </>
);

export default ManagedFundPage;

export const Head = () => <SEO title="Managed Fund | ETA FUNDING" />;
