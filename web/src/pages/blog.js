import React from "react";
import FeaturedBlogs from '../components/homepage/FeaturedBlogs';
import TopCategories from '../components/homepage/TopCategories';
import { SEO } from "../components/SEO";

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

export const Head = () => <SEO title="Blog | ETA FUNDING" />;