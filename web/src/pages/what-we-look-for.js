import React from "react";
import HeroSection from "../components/whatWeLookFor/HeroSection";
import { SEO } from "../components/SEO";
import CriteriaLists from "../components/whatWeLookFor/CriteriaLists";

const WhatWeLookForPage = () => (
  <>
    <SEO title="What We Look For | ETA FUNDING" />
    <HeroSection />
    <CriteriaLists />
  </>
);

export default WhatWeLookForPage;

export const Head = () => <SEO title="What We Look For | ETA FUNDING" />;
