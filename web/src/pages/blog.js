import React from "react";
import FeaturedBlogs from '../components/homepage/FeaturedBlogs';
import TopCategories from '../components/homepage/TopCategories';
import { SEO } from "../components/SEO";
import { graphql } from "gatsby";

const BlogPage = () => (
  <>
    {/* <HeroSection /> */}
    <section>
       <FeaturedBlogs />
      <TopCategories /> 
    </section>
  </>
);

export default BlogPage;

export const query = graphql`
  query BlogPageQuery {
    sanityFeatured { seo { ...SeoFields } }
  }
`;

export const Head = ({ data, location }) => (
  <SEO seo={data?.sanityFeatured?.seo} pathname={location.pathname} />
);