import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'content',
  title: 'Content Section',
  type: 'object',
  description: 'Second section on homepage with intro paragraph and blocks of text that link to other pages on website',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fieldsets: [{ name: 'excerpts', title: 'Page Excerpts' }],
  fields: [
    defineField({
      name: 'introText',
      title: 'Intro Text',
      type: 'normalText',
    }),
    defineField({
      name: 'excerpt1',
      title: 'Page Excerpt 1',
      type: 'textBlockCTA',
      fieldset: 'excerpts',
    }),
    defineField({
      name: 'excerpt2',
      title: 'Page Excerpt 2',
      type: 'textBlockCTA',
      fieldset: 'excerpts',
    }),
    defineField({
      name: 'excerpt3',
      title: 'Page Excerpt 3',
      type: 'textBlockCTA',
      fieldset: 'excerpts',
    }),
    defineField({
      name: 'excerpt4',
      title: 'Page Excerpt 4',
      type: 'textBlockCTA',
      fieldset: 'excerpts',
    }),
  ],
});
