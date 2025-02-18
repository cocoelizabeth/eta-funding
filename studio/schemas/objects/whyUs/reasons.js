export default {
  type: 'object',
  name: 'reasons',
  title: 'Reasons List',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fieldsets: [{ name: 'reasons', title: 'Reasons' }],
  fields: [
    {
      title: 'Reason 1',
      name: 'reason1',
      type: 'textBlock',
      fieldset: 'reasons',
    },
    {
      title: 'Reason 2',
      name: 'reason2',
      type: 'textBlock',
      fieldset: 'reasons',
    },
    {
      title: 'Reason 3',
      name: 'reason3',
      type: 'textBlock',
      fieldset: 'reasons',
    },
    {
      title: 'Reason 4',
      name: 'reason4',
      type: 'textBlock',
      fieldset: 'reasons',
    },
  ],
};
