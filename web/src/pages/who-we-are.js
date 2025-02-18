import React from "react";
import HeroSection from "../components/whoWeAre/HeroSection";
import { SEO } from "../components/SEO";
import ContentSection from "../components/whoWeAre/ContentSection";

const WhoWeArePage = () => (
  <>
    <SEO title="Who We Are | RACOMA STRATEGIES" />
    <HeroSection />
    <ContentSection />
  </>
);

export default WhoWeArePage;

export const Head = () => <SEO title="Who We Are | RACOMA STRATEGIES" />;