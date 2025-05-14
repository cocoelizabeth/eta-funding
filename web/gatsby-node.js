exports.createPages = async ({ graphql, actions }) => {
  // template paths
  const singleBlogTemplate = require.resolve('./src/templates/single-blog.js');
  const blogCategoryTemplate = require.resolve('./src/templates/blog-category.js');
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityBlog {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityCategory {
        nodes {
          id
          title
          slug {
            current
          }
      }
    }
    }
  `);

  if (result.errors) throw result.errors;

  const blogs = result.data.allSanityBlog.nodes;
  const categories = result.data.allSanityCategory.nodes

  // single blogs pages
  blogs.forEach((blog) => {
    createPage({
      path: `/blog/${blog.slug.current}`,
      component: singleBlogTemplate,
      context: { id: blog.id },
    });
  });

  categories.forEach((category) => {
    createPage({
      path: `/blog/categories/${category.slug.current}`,
      component: blogCategoryTemplate,
      context: { id: category.id, title: category.title },
    });
  });
};
