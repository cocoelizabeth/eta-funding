import { defineType, defineField } from 'sanity';

export default defineType({
  type: 'object',
  name: 'textBlock',
  title: 'Text Block',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    defineField({
      title: 'Headline Text',
      name: 'headlineTextCustom',
      type: 'richText',
    }),
    defineField({
      title: 'Sub Text',
      name: 'subText',
      type: 'richText',
    }),
  ],
});
