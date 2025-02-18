export default {
  type: 'object',
  name: 'content',
  title: 'Content Section',
  description: "Second section on homepage with intro paragraph and blocks of text that link to other pages on website",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fieldsets: [{ name: 'excerpts', title: 'Page Excerpts' }],
  fields: [
    {
      title: 'Intro Text',
      name: 'introText',
      type: 'normalText',
    },
    {
      title: 'Page Excerpt 1',
      name: 'excerpt1',
      type: 'textBlockCTA',
      fieldset: 'excerpts',
    },
    {
      title: 'Page Excerpt 2',
      name: 'excerpt2',
      type: 'textBlockCTA',
      fieldset: 'excerpts',
    },
    {
      title: 'Page Excerpt 3',
      name: 'excerpt3',
      type: 'textBlockCTA',
      fieldset: 'excerpts',
    },
    {
      title: 'Page Excerpt 4',
      name: 'excerpt4',
      type: 'textBlockCTA',
      fieldset: 'excerpts',
    },
  ],
};
