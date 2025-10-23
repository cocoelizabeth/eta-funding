import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { BiCategory } from 'react-icons/bi';
import { SingleBlogStyles } from '../styles/blog/SingleBlogStyles';
import { SEO } from '../components/SEO';
import MyPortableText from '../components/MyPortableText';
import ParagraphText from '../components/typography/ParagraphText';

export const postQuery = graphql`
  query SingleBlogQuery($id: String!) {
    sanityBlog(id: { eq: $id }) {
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
      _rawExcerpt
      metaTitle
      metaDescription
      canonicalUrl
      schemaType
      jsonLd
      noindex
    }
  }
`;

function SingleBlog({ data }) {
  const blog = data.sanityBlog;
  return (
    <SingleBlogStyles>
      <section>
        <div className="h6 breadcrumbs">
          <Link to="/blog">BLOG</Link>
          <div className="separator">•</div>
          {blog.title}
        </div>
        <div className="blog-header">
          <div className="left">
            <h1 className="h1 title">{blog.title}</h1>
            <hr className="hr" />
            <ParagraphText className="publishedAt h5">
              <FiCalendar />
              {format(new Date(blog.publishedAt), "MMM dd yyyy • p")}
            </ParagraphText>
            <ParagraphText className="categoriesText">
              <BiCategory />

              <span className="h5">
                {blog.categories.map((item, index) => (
                  <span key={item.slug.current}>
                    <Link to={`/blog/categories/${item.slug.current}`}>
                      {item.title}
                    </Link>
                    {index < blog.categories.length - 1 ? ", " : ""}
                  </span>
                ))}
              </span>
            </ParagraphText>
            {/* <ParagraphText className="author">
              <FiUser />
              <Link to={`/authors/${blog.author.slug.current}`}>
                {blog.author.name}
              </Link>
            </ParagraphText> */}
          </div>
          <div className="body">
            <MyPortableText value={blog._rawBody} />
          </div>
        </div>
      </section>
    </SingleBlogStyles>
  );
}

export default SingleBlog;

export const Head = ({ data, location }) => {
  const blog = data.sanityBlog;
  
  const firstParagraph = blog?._rawBody[0]?.children[0]?.text;
  const excerpt = blog?._rawExcerpt[0]?.children[0]?.text;

  const seo = {
    metaTitle: blog?.metaTitle || blog?.title,
    metaDescription: blog?.metaDescription || excerpt || firstParagraph,
    ogImage: blog?.coverImage,
    canonicalUrl: blog?.canonicalUrl,
    noindex: blog?.noindex,
    jsonLd: blog?.jsonLd,
  }

  return  <SEO seo={seo} pathname={location.pathname} />
};
