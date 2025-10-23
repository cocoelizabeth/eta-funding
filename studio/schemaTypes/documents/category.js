import { FaShapes } from "react-icons/fa6";
import { defineType, defineField } from 'sanity';

export default defineType({
  title: 'Category',
  name: 'category',
  type: 'document',
  icon: FaShapes,

    
  fieldsets: [
    { name: 'advancedSeoSettings', 
      title: 'Advanced SEO Settings', 
      description: 'For "/category/[category-title]" pages',
      options: { collapsible: true, collapsed: true } },
  ],

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'customImage', // custom type in schema
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'normalText', // custom type in schema
      validation: (Rule) => Rule.required(),
    }),

    // ADVANCED SEO SETTINGS
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Defaults to "[Category Title] Articles & Resources | ETA Funding Partners" if not set.',
      fieldset: 'advancedSeoSettings',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Defaults to Category Description if not set. 155-160 characters recommended. A good format is [What you will learn] + [specific topics covered] + [who it is for]',
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
      description: 'Controls JSON-LD schema markup. Default for Category pages is "Web Page."',
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
  
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      slug: 'slug',
    },
    prepare({ title, media, slug }) {
      return {
        title,
        media,
        subtitle: slug?.current || '', // Ensures no runtime errors if slug is missing
      };
    },
  },
});
