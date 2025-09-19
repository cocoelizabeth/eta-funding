import { defineType, defineField } from 'sanity';
import { MdAddLink } from 'react-icons/md';

export default defineType({
  title: 'Rich Text',
  name: 'richText',
  type: 'array',
  of: [
    defineField({
      type: 'block',
      title: 'Block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2'},
        { title: 'H3', value: 'h3'},
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered List', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: "Underline", value: "underline" }, 
        ],
        annotations: [
          defineField({
            title: 'URL',
            name: 'link',
            type: 'object',
            icon: MdAddLink,
            fields: [
              defineField({
                title: 'URL',
                name: 'href',
                type: 'url',
              }),
            ],
          }),
        ],
      },
    }),
    defineField({
      type: 'customImage',
    }),
  ],
});
