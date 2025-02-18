export default {
  type: 'object',
  name: 'process',
  title: 'Process',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fieldsets: [{ name: 'steps', title: 'Steps' }],
  fields: [
    {
      title: 'Step 1',
      name: 'step1',
      type: 'textBlock',
      fieldset: 'steps',
    },
    {
      title: 'Step 2',
      name: 'step2',
      type: 'textBlock',
      fieldset: 'steps',
    },
    {
      title: 'Step 3',
      name: 'step3',
      type: 'textBlock',
      fieldset: 'steps',
    },
    {
      title: 'Step 4',
      name: 'step4',
      type: 'textBlock',
      fieldset: 'steps',
    },
    {
      title: 'Step 5',
      name: 'step5',
      type: 'textBlock',
      fieldset: 'steps',
    },
  ],
};
