import format from 'date-fns/format';
import { defineType, defineField } from 'sanity';
import { FaPenToSquare } from 'react-icons/fa6';

export default defineType({
  title: 'Blog Post',
  name: 'blog',
  type: 'document',
  icon: FaPenToSquare,

  fieldsets: [
    { name: 'advancedSeoSettings', title: 'Advanced SEO Settings', options: { collapsible: true, collapsed: true } },
  ],

  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Shown in search results. Aim for 50–60 characters.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      title: 'Published At',
      name: 'publishedAt',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [
        defineField({
          type: 'reference',
          to: [{ type: 'category' }],
        }),
      ],
    }),
    defineField({
      title: 'Cover Image',
      name: 'coverImage',
      type: 'customImage', // Ensure 'customImage' is properly defined in your schema
    }),
    defineField({
      title: 'Excerpt',
      name: 'excerpt',
      type: 'normalText', // Ensure 'normalText' exists
      description: 'A short description about the blog post',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Blog Body',
      name: 'body',
      type: 'richText', // Ensure 'richText' exists
      validation: (Rule) => Rule.required(),
    }),

    // ADVANCED SEO SETTINGS
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Defaults to blog title if not set.',
      fieldset: 'advancedSeoSettings',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Defaults to Excerpt if not set. 155-160 characters recommended.',
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
      initialValue: 'Article',
      description: 'Controls JSON-LD schema markup. Default for Blog Post pages is "Article."',
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
      image: 'coverImage',
      title: 'title',
      publishedAt: 'publishedAt',
    },
    prepare({ image, title, publishedAt }) {
      return {
        title,
        media: image,
        subtitle: publishedAt
          ? format(new Date(publishedAt), 'p, MM/dd/yy')
          : '',
      };
    },
  },
});
