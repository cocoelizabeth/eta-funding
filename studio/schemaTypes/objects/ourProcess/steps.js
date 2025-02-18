import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'process',
  title: 'Process',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fieldsets: [{ name: 'steps', title: 'Steps' }],
  fields: [
    defineField({
      name: 'step1',
      title: 'Step 1',
      type: 'textBlock',
      fieldset: 'steps',
    }),
    defineField({
      name: 'step2',
      title: 'Step 2',
      type: 'textBlock',
      fieldset: 'steps',
    }),
    defineField({
      name: 'step3',
      title: 'Step 3',
      type: 'textBlock',
      fieldset: 'steps',
    }),
    defineField({
      name: 'step4',
      title: 'Step 4',
      type: 'textBlock',
      fieldset: 'steps',
    }),
    defineField({
      name: 'step5',
      title: 'Step 5',
      type: 'textBlock',
      fieldset: 'steps',
    }),
  ],
});
