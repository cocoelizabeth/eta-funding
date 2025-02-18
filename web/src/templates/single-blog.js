import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { BiCategory } from 'react-icons/bi';
import { SingleBlogStyles } from '../styles/blog/SingleBlogStyles';
import { Title } from '../components/typography/Title';
import { SEO } from '../components/SEO';
import PageSpace from '../components/PageSpace';
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
    }
  }
`;

function SingleBlog({ data }) {
  const blog = data.sanityBlog;

  return (
    <SingleBlogStyles>
      <SEO title={blog.title} />

      <section>
        <div className="h6 breadcrumbs">
          <Link to="/blog">BLOG</Link>
          <div className="separator">•</div>
          {blog.title}
        </div>
        <div className="blog-header">
          <div className="left">
            <div className="h1 title">{blog.title}</div>
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
                    <Link to={`/categories/${item.slug.current}`}>
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
