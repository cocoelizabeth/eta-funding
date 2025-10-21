import { FaStar } from 'react-icons/fa';
import { defineType, defineField } from 'sanity';
import customSEO from '../objects/customSEO';

export default defineType({
  name: 'featured',
  title: 'Featured Blogs',
  type: 'document',
  icon: FaStar,
  fields: [
    defineField({
      name: 'title', // Fixed casing (should be lowercase to match convention)
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'blogs',
      title: 'Featured Blogs',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'blog' }],
        },
      ],
      validation: (Rule) =>
        Rule.unique().error('Every item should be unique.')
          .required().error('At least one item is required'),
    }),
    defineField({
      name: 'categories',
      title: 'Featured Top Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
      validation: (Rule) =>
        Rule.unique().error('Every item should be unique.')
          .required().error('At least one item is required'),
    }),
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'customSEO',
    }),
  ],
});
