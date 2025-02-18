import { MdPerson } from 'react-icons/md';
import { defineType, defineField } from 'sanity';

export default defineType({
  title: 'Author',
  name: 'author',
  type: 'document',
  icon: MdPerson,
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      title: 'Profile Image',
      name: 'profileImage',
      type: 'customImage', // Ensure 'customImage' exists in schemaTypes
    }),
    defineField({
      title: 'Bio',
      name: 'bio',
      type: 'normalText',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'profileImage',
      slug: 'slug',
    },
    prepare({ title, media, slug }) {
      return {
        title,
        media,
        subtitle: slug?.current || '',
      };
    },
  },
});
