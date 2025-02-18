import React from "react";
import HeroSection from "../components/contact/HeroSection";
import { SEO } from "../components/SEO";

const ContactPage = () => (
  <>
    <HeroSection />
  </>
);

export default ContactPage;

export const Head = () => <SEO title="Contact | ETA FUNDING" />;
