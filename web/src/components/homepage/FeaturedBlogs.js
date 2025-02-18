import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import { SectionTitle } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';
import BlogGrid from '../blog/BlogGrid';
import BlogList from '../blog/BlogList';
function FeaturedBlogs() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          blogs {
            title
            id
            publishedAt
            categories {
              title
              slug {
                current
              }
            }
            coverImage {
              alt
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const featuredBlogs = data.allSanityFeatured.nodes[0].blogs;

  return (
    <FeaturedBlogsStyles>
      <h1>Featured Blogs</h1>
      <ParagraphText className="featuredBlogs__text"></ParagraphText>
      <BlogList blogs={featuredBlogs} />
      {/* <BlogGrid blogs={featuredBlogs} /> */}
    </FeaturedBlogsStyles>
  );
}

export default FeaturedBlogs;
