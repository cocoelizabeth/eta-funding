import { defineType, defineField } from 'sanity';

export default defineType({
  title: 'Managed Fund',
  name: 'whyUs',
  type: 'document',
  fields: [
    defineField({
      title: 'Hero Section',
      name: 'hero',
      type: 'textBlock',
      description: 'First section on page with heading & paragraph text',
    }),
    defineField({
      title: 'Content Section',
      name: 'contentSection',
      type: 'reasons',
      description: 'Second section on page with list of reasons (headlines with supporting paragraphs)',
    }),
  ],
});
