import React from 'react';
import HeroSection from '../components/homepage/HeroSection';
import { SEO } from '../components/SEO';
import ContentSection from '../components/homepage/ContentSection';
import ContactSection from '../components/homepage/ContactSection';

const IndexPage = () => (
  <>
    <HeroSection />
    <ContentSection />
    <ContactSection />
  </>
);

export default IndexPage;

export const Head = () => <SEO title="Home | RACOMA STRATEGIES" />;
