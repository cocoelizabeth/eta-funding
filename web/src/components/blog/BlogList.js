import React from "react";
import { BlogListStyles } from "../../styles/blog/BlogListStyles";
import BlogListItem from "./BlogListItem";

function BlogList({ blogs }) {

  return (
    <BlogListStyles>
      {blogs &&
        blogs.map((blog) => (
          <BlogListItem
            key={blog.id}
            title={blog.title}
            path={blog.slug.current}
            categories={blog.categories}
            image={{
              imageData: blog.coverImage?.asset.gatsbyImageData,
              altText: blog.coverImage?.alt,
            }}
            publishedAt={blog.publishedAt}
          />
        ))}
    </BlogListStyles>
  );
}

export default BlogList;
