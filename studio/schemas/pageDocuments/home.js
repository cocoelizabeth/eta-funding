import { MdPerson } from 'react-icons/md';

export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  icon: MdPerson,
  fields: [
    {
      title: 'SEO',
      name: 'seo',
      type: 'customSEO',
    },
    {
      title: 'Hero Section',
      name: 'hero',
      type: 'heroText',
      description: 'First section on page with heading, paragraph text, and call to action button'
    },
    {
      title: 'Content Section',
      name: 'contentSection',
      type: 'content',
    },

    {
      type: 'textBlockCTA',
      name: 'contact',
      title: 'Contact Us',
    },
  ],
};
