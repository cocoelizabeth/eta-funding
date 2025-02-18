import React from "react";
import HeroSection from "../components/ourProcess/HeroSection";
import { SEO } from "../components/SEO";
import ContentSection from "../components/ourProcess/ContentSection";

const OurProcess = () => (
  <>
    <SEO title="Our Process | ETA FUNDING" />
    <HeroSection />
    <ContentSection />
  </>
);

export default OurProcess;

export const Head = () => <SEO title="Our Process | ETA FUNDING" />;
