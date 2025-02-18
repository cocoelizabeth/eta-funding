import { defineType, defineField } from 'sanity';
import { MdImage } from 'react-icons/md';

export default defineType({
  name: 'customImage',
  title: 'Image',
  type: 'image',
  icon: MdImage,
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule) => Rule.error('Alt text cannot be empty').required(),
      options: {
        isHighlighted: true,
      },
    }),
  ],
});
