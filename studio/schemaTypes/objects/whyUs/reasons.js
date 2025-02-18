import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'reasons',
  title: 'Reasons List',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fieldsets: [{ name: 'reasons', title: 'Reasons' }],
  fields: [
    defineField({
      name: 'reason1',
      title: 'Reason 1',
      type: 'textBlock',
      fieldset: 'reasons',
    }),
    defineField({
      name: 'reason2',
      title: 'Reason 2',
      type: 'textBlock',
      fieldset: 'reasons',
    }),
    defineField({
      name: 'reason3',
      title: 'Reason 3',
      type: 'textBlock',
      fieldset: 'reasons',
    }),
    defineField({
      name: 'reason4',
      title: 'Reason 4',
      type: 'textBlock',
      fieldset: 'reasons',
    }),
  ],
});
