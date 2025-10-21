// import { defineType, defineField } from 'sanity';
// import { IoIosSettings } from "react-icons/io";

// export default defineType({
//   name: 'customSEO',
//   title: 'SEO',
//   type: 'object',
//   icon: IoIosSettings,
//   fields: [
//     defineField({
//       name: 'title',
//       title: 'Meta Title',
//       type: 'string',
//       description: 'Shown in search results. Aim for 50–60 characters.',
//     }),
//     defineField({
//       name: 'description',
//       title: 'Meta Description',
//       type: 'text',
//       rows: 3,
//       description: '155-160 characters recommended.',
//     }),
//     defineField({
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'title',
//         maxLength: 96,
//       },
//     }),
//     defineField({
//       name: 'advancedSeoSettings',
//       title: 'Advanced SEO Settings',
//       type: 'object',
//       options: {
//         collapsible: 'true',
//         collapsed: true,
//       },
//       fields: [
//         defineField({
//           name: 'ogTitle',
//           title: 'Open Graph Title',
//           type: 'string',
//           description: 'Defaults to Meta Title if not set.',
//         }),
//         defineField({
//           name: 'ogDescription',
//           title: 'Open Graph Description',
//           type: 'string',
//           description: 'Defaults to the Meta Description if not set.',
//         }),
//         defineField({
//           name: 'ogImage',
//           title: 'Open Graph Image',
//           type: 'customImage',
//           description: '1200×630px recommended. Used for link previews.'
//         }),
//         defineField({
//           name: 'canonicalUrl',
//           title: 'Canonical Url',
//           type: 'string',
//           description: 'Leave blank to auto-generate. Only set if this page duplicates another.'
//         }),
//         defineField({
//           name: 'schemaType',
//           title: 'Schema Type',
//           type: 'string',
//           options: {
//             list: [
//               { title: 'Web Page', value: 'WebPage' },
//               { title: 'Article', value: 'Article' },
//               { title: 'Organization', value: 'Organization' },
//             ],
//           },
//           initialValue: 'WebPage',
//           description: 'Controls JSON-LD schema markup.',
//         }),
//         defineField({
//           name: 'jsonLd',
//           title: 'Custom JSON-LD',
//           type: 'text',
//           description: 'Paste raw JSON-LD schema here (advanced use).',
//         }),
//         defineField({
//           name: 'noindex',
//           title: 'No index?',
//           type: 'boolean',
//           description: 'Only turn on if you do not want search engines to index this page.',
//           initialValue: false,
//         }),
//       ]
//     }),
//   ],
//   options: {
//     collapsible: true,
//     collapsed: true,
//   },
// });