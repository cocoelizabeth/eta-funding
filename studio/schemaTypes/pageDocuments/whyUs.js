import { defineType, defineField } from 'sanity';
import { FaListOl } from "react-icons/fa6";

export default defineType({
  title: 'Why Us',
  name: 'whyUs',
  type: 'document',
  icon: FaListOl,
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
