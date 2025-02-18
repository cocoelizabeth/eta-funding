import { MdImage } from 'react-icons/md';

export default {
  title: 'SEO',
  name: 'customSEO',
  icon: MdImage,
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
};
