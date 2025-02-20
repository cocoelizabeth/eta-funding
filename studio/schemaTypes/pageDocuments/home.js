import { FaHome } from "react-icons/fa";
import { defineType, defineField } from 'sanity';

export default defineType({
  title: 'Home',
  name: 'home',
  type: 'document',
  icon: FaHome,
  fields: [
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'customSEO',
    }),
    defineField({
      title: 'Hero Section',
      name: 'hero',
      type: 'heroText',
      description: 'First section on page with heading, paragraph text, and call to action button',
    }),
    defineField({
      title: 'Content Section',
      name: 'contentSection',
      type: 'content',
    }),
    defineField({
      title: 'Contact Us',
      name: 'contact',
      type: 'textBlockCTA',
    }),
  ],
});
