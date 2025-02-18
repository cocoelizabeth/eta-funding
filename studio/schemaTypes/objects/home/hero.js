import { defineType, defineField } from 'sanity';

export default defineType({
  type: 'object',
  name: 'heroText',
  title: 'Hero Text',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fieldsets: [{ name: 'subHeadline', title: 'Sub Headline' }],
  fields: [
    defineField({
      title: 'Headline Text',
      name: 'headlineText',
      type: 'string',
    }),
    defineField({
      title: 'Sub Headline Text',
      name: 'subHeadlineText',
      type: 'normalText',
      fieldset: 'subHeadline',
    }),
    defineField({
      title: 'Call To Action',
      name: 'cta',
      type: 'string',
      fieldset: 'subHeadline',
      description: 'Text for call to action button, ex: Contact Us',
    }),
    defineField({
      title: 'Page to Link to',
      name: 'link',
      type: 'string',
      description: 'ex: contact, our-process, what-we-look-for, etc', 
      fieldset: 'subHeadline',
    }),
  ],
});


// replace cta with this code later: 
// defineField({
//   name: 'cta',
//   title: 'Call-to-Action Button',
//   type: 'object',
//   fields: [
//     defineField({
//       name: 'text',
//       title: 'Button Text',
//       type: 'string',
//     }),
//     defineField({
//       name: 'link',
//       title: 'Button Link',
//       type: 'url',
//     }),
//   ],
// }),