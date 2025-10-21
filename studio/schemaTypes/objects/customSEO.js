import { defineType, defineField } from 'sanity';
import { IoIosSettings } from "react-icons/io";

export default defineType({
  name: 'customSEO',
  title: 'SEO',
  type: 'object',
  icon: IoIosSettings,

  fieldsets: [
    { name: 'advancedSeoSettings', title: 'Advanced SEO Settings', options: { collapsible: true, collapsed: true } },
  ],

  fields: [
    // Basic
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Shown in search results. Aim for 50–60 characters.',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: '155-160 characters recommended.',
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
    // ADVANCED
    defineField({
      name: 'ogTitle',
      title: 'Open Graph Title',
      type: 'string',
      description: 'Defaults to Meta Title if not set.',
      fieldset: 'advancedSeoSettings'
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph Description',
      type: 'string',
      description: 'Defaults to the Meta Description if not set.',
      fieldset: 'advancedSeoSettings',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'customImage',
      description: '1200×630px recommended. Used for link previews.',
      fieldset: 'advancedSeoSettings',
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical Url',
      type: 'string',
      description: 'Leave blank to auto-generate. Only set if this page duplicates another.',
      fieldset: 'advancedSeoSettings',
    }),
    defineField({
      name: 'schemaType',
      title: 'Schema Type',
      type: 'string',
      options: {
        list: [
          { title: 'Web Page', value: 'WebPage' },
          { title: 'Article', value: 'Article' },
          { title: 'Organization', value: 'Organization' },
        ],
      },
      initialValue: 'WebPage',
      description: 'Controls JSON-LD schema markup.',
      fieldset: 'advancedSeoSettings',
    }),
    defineField({
      name: 'jsonLd',
      title: 'Custom JSON-LD',
      type: 'text',
      description: 'Paste raw JSON-LD schema here (advanced use).',
      fieldset: 'advancedSeoSettings',
    }),
    defineField({
      name: 'noindex',
      title: 'No index?',
      type: 'boolean',
      description: 'Only turn on if you do not want search engines to index this page.',
      initialValue: false,
      fieldset: 'advancedSeoSettings',
    }),


  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
});