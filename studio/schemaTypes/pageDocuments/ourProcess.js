import { defineType, defineField } from 'sanity';

export default defineType({
  title: 'Our Process',
  name: 'ourProcess',
  type: 'document',
  fields: [
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'customSEO',
    }),
    defineField({
      title: 'Hero',
      name: 'hero',
      type: 'textBlock',
      description: 'First section on page with heading & paragraph text',
    }),
    defineField({
      title: 'Our Process',
      name: 'steps',
      type: 'process',
    }),
  ],
});
