export default {
  type: 'object',
  name: 'textBlock',
  title: 'Text Block',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      title: 'Header Text',
      name: 'headerText',
      type: 'string',
    },
    {
      title: 'Sub Text',
      name: 'subText',
      type: 'normalText',
    },
  ],
};
