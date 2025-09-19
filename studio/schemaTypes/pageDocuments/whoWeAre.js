import { defineType, defineField } from 'sanity';
import { FaUsers } from "react-icons/fa";


export default defineType({
  title: 'Who We Are',
  name: 'whoWeAre',
  type: 'document',
  icon: FaUsers,
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
      title: 'Headshot Image',
      name: 'headshotImage',
      type: 'customImage',
    }),
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'ex: Adam Kaplan',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'ex: Principal',
    }),
    defineField({
      title: 'LinkedIn Url',
      name: 'linkedInUrl',
      type: 'string',
    }),
    defineField({
      title: 'Email Address',
      name: 'email',
      type: 'string',
    }),
    defineField({
      type: 'textBlock',
      name: 'about',
      title: 'About',
      description: 'NOTE: Header text ignored for website. LMK if you want it back in.',
    }),
    defineField({
      type: 'textBlock',
      name: 'capitalPartners',
      title: 'Partners',
    }),
  ],
});
