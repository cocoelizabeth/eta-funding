import { MdChildCare } from 'react-icons/md';
import { defineType, defineField } from 'sanity';

export default defineType({
  title: 'Child Care',
  name: 'childCare',
  type: 'document',
  icon: MdChildCare,
  fields: [
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'customSEO',
      description: 'IGNORE THIS',
    }),
    defineField({
      title: 'Hero Section',
      name: 'hero',
      type: 'textBlock',
      description: 'First section on page with heading & paragraph text',
    }),
    defineField({
      title: 'Philosophy Section',
      name: 'philosophy',
      type: 'textBlock',
      description: 'Second section on page with heading & paragraph text',
    }),
    defineField({
      title: 'Criteria Content',
      name: 'criteriaListsContent',
      type: 'criteriaListsWithTitle',
      description: 'Third section on page with criteria lists',
    }),
  ],
});
