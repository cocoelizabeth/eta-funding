import React from 'react';

import {BlogListStyles} from '../styles/blog/BlogListStyles';
import BlogListItem from "../components/blog/BlogListItem";
import { graphql } from 'gatsby';
import ParagraphText from '../components/typography/ParagraphText';
import { FeaturedBlogsStyles } from '../styles/homePage/FeaturedBlogsStyles';
import BlogList from '../components/blog/BlogList';
import MyPortableText from '../components/MyPortableText';
import { Link } from 'gatsby';
// export const blogsByCategoryQuery = graphql `
// query BlogsByCategory($id: String!) {

//   allSanityBlog(
//     filter: { categories: { elemMatch: { id: { eq: $id } } } }
//   ) {
//     edges {
//       node {
//         id
//         title
//         publishedAt
//         _rawBody
//         coverImage {
//           alt
//           asset {
//             gatsbyImageData
//           }
//         }
//         categories {
//           _id
//           title
//           slug {
//             current
//           }
//         }
//           author {
//             name
//             slug {
//                 current
//             }
//           }
//         slug {
//           current
//         }
//       }
//     }
//   }
// }

// `

export const blogsByCategoryQuery = graphql `
query BlogsByCategory($id: String!) {

  allSanityCategory(filter: {id: {eq: $id }}) {
    nodes {
      title
      _rawDescription
      slug {
        current
      }
    }
  }

  allSanityBlog(
    filter: { categories: { elemMatch: { id: { eq: $id } } } }
    sort: { publishedAt: DESC }
  ) {

      nodes {
        id
        title
        publishedAt
        _rawBody
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
        categories {
          _id
          title
          slug {
            current
          }
        }
          author {
            name
            slug {
                current
            }
          }
        slug {
          current
        }
      }
    }
  
}

`

function BlogCategory({data}) {

    const blogs = data.allSanityBlog.nodes;
    const categoryTitle = data.allSanityCategory.nodes[0].title;
    const categoryDescription = data.allSanityCategory.nodes[0]._rawDescription;
    // const categoryTitle = _ref.pageContext.title;

  return (

    <FeaturedBlogsStyles>
            <section>
                        <div className="h6 breadcrumbs">
                          <Link to="/blog">BLOG</Link>
                          <div className="separator">•</div>
                          CATEGORIES
                          <div className="separator">•</div>
                          {categoryTitle}
                        </div>
                {/* <h5 className="h5">CATEGORY:</h5> */}

              <h1>{categoryTitle}</h1>
        <div className="featuredBlogs__text">
            <MyPortableText value={categoryDescription} />
          </div>
      <ParagraphText className="featuredBlogs__text">
  
      {/* <MyPortableText value={categoryDescription} /> */}
      </ParagraphText>
      <BlogList blogs={blogs} />
      </section>
    </FeaturedBlogsStyles>


  );
}

export default BlogCategory;