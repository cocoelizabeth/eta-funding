import React from "react";
import HeroSection from "../components/contact/HeroSection";
import { SEO } from "../components/SEO";
import { graphql } from "gatsby";

const ContactPage = () => (
  <>
    <HeroSection />
  </>
);

export default ContactPage;

export const query = graphql`
  query ContactPageQuery {
    sanityContact { seo { ...SeoFields } }
  }
`;

export const Head = ({ data, location }) => (
  <SEO title = "Contact | ETA Funding Partners" seo={data?.sanityContact?.seo} pathname={location.pathname} />
);