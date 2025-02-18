import React from "react";
import HeroSection from "../components/childCare/HeroSection";
import { SEO } from "../components/SEO";
import CriteriaLists from "../components/childCare/CriteriaLists";
import PhilosophySection from "../components/childCare/PhilosophySection";

const ChildCarePage = () => (
  <>
    <SEO title="Child Care | ETA FUNDING" />

    <HeroSection />
    <PhilosophySection />
    <CriteriaLists />
  </>
);

export default ChildCarePage;

export const Head = () => <SEO title="Child Care | ETA FUNDING" />;
