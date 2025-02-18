import { defineType, defineField } from 'sanity';
import { IoIosSettings } from "react-icons/io";

export default defineType({
  name: 'customSEO',
  title: 'SEO',
  type: 'object',
  icon: IoIosSettings,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
});