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
      title: 'Header Text',
      name: 'headerText',
      type: 'string',
    }),
    defineField({
      title: 'Sub Text',
      name: 'subText',
      type: 'richText',
    }),
  ],
});
