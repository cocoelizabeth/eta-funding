import { defineType, defineField } from 'sanity';
import { FaSearch } from "react-icons/fa";

export default defineType({
  title: 'What We Look For',
  name: 'whatWeLookFor',
  type: 'document',
  icon: FaSearch,
  fields: [
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'customSEO',
    }),
    defineField({
      title: 'Hero Section',
      name: 'hero',
      type: 'textBlock',
      description: 'First section on page with heading & paragraph text',
    }),
    defineField({
      title: 'Content Section',
      name: 'contentSection',
      type: 'criteriaLists',
      description: 'Second section on page with criteria lists',
    }),
  ],
});
