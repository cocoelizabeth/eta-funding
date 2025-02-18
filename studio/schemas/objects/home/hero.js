export default {
  type: 'object',
  name: 'heroText',
  title: 'Hero Text',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fieldsets: [{ name: 'subHeadline', title: 'Sub Headline' }],
  fields: [
    {
      title: 'Headline Text',
      name: 'headlineText',
      type: 'string',
    },
    {
      title: 'Sub Headline Text',
      name: 'subHeadlineText',
      type: 'normalText',
      fieldset: 'subHeadline',
    },
    {
      title: 'Call To Action',
      name: 'cta',
      type: 'string',
      fieldset: 'subHeadline',
      description: 'Text for call to action button, ex: Contact Us',
    },
    {
      title: 'Page to Link to',
      name: 'link',
      type: 'string',
      description: 'ex: contact, our-process, what-we-look-for, etc', 
      fieldset: 'subHeadline',
    },
  ],
};
