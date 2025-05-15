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
      allSanityFeatured {
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

  const featuredBlogs = data.allSanityFeatured.nodes[0].blogs || [];

  // sort blogs in DESC order
  const featuredBlogsSorted = featuredBlogs
  .slice() // avoid mutating the original array
  .sort((a, b) => {
    const dateA = a.publishedAt ? new Date(a.publishedAt) : new Date(0); // fallback to epoch
    const dateB = b.publishedAt ? new Date(b.publishedAt) : new Date(0);
    return dateB - dateA; // descending (most recent first)
    return dateB - dateA;
  });

  return (
    <FeaturedBlogsStyles>
      <h1>Featured Blogs</h1>
      <ParagraphText className="featuredBlogs__text"></ParagraphText>
      <BlogList blogs={featuredBlogsSorted} />
      {/* <BlogGrid blogs={featuredBlogsSorted} /> */}
    </FeaturedBlogsStyles>
  );
}

export default FeaturedBlogs;
