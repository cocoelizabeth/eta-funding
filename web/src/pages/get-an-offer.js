import React from "react";
import HeroSection from "../components/homepage/HeroSection";
import { SEO } from "../components/SEO";
import ContentSection from "../components/homepage/ContentSection";
import ContactSection from "../components/homepage/ContactSection";

const Quiz = () => (
  <>
    <HeroSection />
    <ContentSection />
    <ContactSection />
  </>
);

export default Quiz;

export const Head = () => <SEO title="GET AN OFFER | RACOMA STRATEGIES" />;
