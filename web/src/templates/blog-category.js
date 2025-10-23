import React from "react";

import { BlogListStyles } from "../styles/blog/BlogListStyles";
import BlogListItem from "../components/blog/BlogListItem";
import { graphql } from "gatsby";
import { FeaturedBlogsStyles } from "../styles/homePage/FeaturedBlogsStyles";
import BlogList from "../components/blog/BlogList";
import MyPortableText from "../components/MyPortableText";
import { Link } from "gatsby";
import { SEO } from '../components/SEO';

export const blogsByCategoryQuery = graphql`
  query BlogsByCategory($id: String!) {
    allSanityCategory(filter: { id: { eq: $id } }) {
      nodes {
        title
        _rawDescription
        coverImage {
          alt
          asset {
            gatsbyImageData
            url
          }
        }
        metaTitle
        metaDescription
        canonicalUrl
        schemaType
        jsonLd
        noindex
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
            url
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
`;

function BlogCategory({ data }) {
  const category = data?.allSanityCategory?.nodes?.[0];
  const blogs = data?.allSanityBlog?.nodes ?? [];

  const categoryTitle = category?.title ?? "Articles & Resources";
  const categoryDescriptionBlocks = category?._rawDescription;


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

        {/* Render PortableText only if blocks exist */}
        {Array.isArray(categoryDescriptionBlocks) && categoryDescriptionBlocks.length > 0 && (
          <div className="featuredBlogs__text">
            <MyPortableText value={categoryDescriptionBlocks} />
          </div>
        )}

        <BlogList blogs={blogs} />
      </section>
    </FeaturedBlogsStyles>
  );
}

export const Head = ({data, location}) => {
  const category = data?.allSanityCategory?.nodes?.[0];

  const flattenRawText = (blocks) => {
    if (!Array.isArray(blocks)) return "";
    return blocks
      .map((b) =>
        Array.isArray(b?.children)
          ? b.children.map((c) => c?.text ?? "").join("")
          : ""
      )
      .join(" ")
      .trim();
  };

  const defaultCategoryPageTitle = 
     (category?.title ? `${category.title} | Articles & Resources | ETA FUNDING` : "Articles & Resources | ETA FUNDING");

  const fallbackDescription = ptToPlain(category?._rawDescription);

  const seo = {
    metaTitle: category?.metaTitle || defaultCategoryPageTitle,
    metaDescription: category?.metaDescription || fallbackDescription || "Articles and resources from ETA Funding.",
    ogImage: category?.coverImage,
    canonicalUrl: category?.canonicalUrl,
    noindex: category?.noindex,
    jsonLd: category?.jsonLd,
    schemaType: category?.schemaType,
  };

  return <SEO seo={seo} pathname={location.pathname} />;
    
}

export default BlogCategory;
