import React from 'react'
import { Link } from 'gatsby'
import { BlogListItemStyles } from '../../styles/blog/BlogListItemStyles'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Title } from '../typography/Title'
import ParagraphText from '../typography/ParagraphText'
import { format } from 'date-fns'
function BlogListItem({ title, path, image, publishedAt, categories}) {

  return (
    <BlogListItemStyles>
      <div className="blogData">
        <div className="dateContainer">
          {publishedAt && (
            <ParagraphText className="publishedAt">
              {format(new Date(publishedAt), "LL.dd.yy")}
            </ParagraphText>
          )}
        </div>
        <ParagraphText className="categoriesText">
        {`CATEGORIES:    `}
          {categories.map((item, index) => (
            <span key={item.slug.current}>
              <Link to={`/blog/categories/${item.slug.current}`}>{item.title}</Link>
              {index < categories.length - 1 ? ", " : ""}
            </span>
          ))}
        </ParagraphText>
      </div>
      <Link to={`/blog/${path}`}>
        <h2 className="title">{title}</h2>
      </Link>
    </BlogListItemStyles>
  );
}

export default BlogListItem;
