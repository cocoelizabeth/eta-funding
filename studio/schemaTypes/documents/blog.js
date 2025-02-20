import format from 'date-fns/format';
import { defineType, defineField } from 'sanity';
import { FaPenToSquare } from 'react-icons/fa6';

export default defineType({
  title: 'Blog Post',
  name: 'blog',
  type: 'document',
  icon: FaPenToSquare,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      title: 'Published At',
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
    defineField({
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [
        defineField({
          type: 'reference',
          to: [{ type: 'category' }],
        }),
      ],
    }),
    defineField({
      title: 'Cover Image',
      name: 'coverImage',
      type: 'customImage', // Ensure 'customImage' is properly defined in your schema
    }),
    defineField({
      title: 'Excerpt',
      name: 'excerpt',
      type: 'normalText', // Ensure 'normalText' exists
      description: 'A short description about the blog post',
    }),
    defineField({
      title: 'Blog Body',
      name: 'body',
      type: 'richText', // Ensure 'richText' exists
    }),
  ],
  preview: {
    select: {
      image: 'coverImage',
      title: 'title',
      publishedAt: 'publishedAt',
    },
    prepare({ image, title, publishedAt }) {
      return {
        title,
        media: image,
        subtitle: publishedAt
          ? format(new Date(publishedAt), 'p, MM/dd/yy')
          : '',
      };
    },
  },
});
