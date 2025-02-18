import { MdCategory } from 'react-icons/md';
import { defineType, defineField } from 'sanity';

export default defineType({
  title: 'Category',
  name: 'category',
  type: 'document',
  icon: MdCategory,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'customImage', // custom type in schema
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'normalText', // custom type in schema
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      slug: 'slug',
    },
    prepare({ title, media, slug }) {
      return {
        title,
        media,
        subtitle: slug?.current || '', // Ensures no runtime errors if slug is missing
      };
    },
  },
});
