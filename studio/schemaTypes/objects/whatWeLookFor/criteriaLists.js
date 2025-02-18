import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'criteriaLists',
  title: 'Criteria Lists',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fieldsets: [{ name: 'criteriaLists', title: 'Criteria Lists' }],
  fields: [
    defineField({
      name: 'list1',
      title: 'List 1',
      type: 'textBlock',
      fieldset: 'criteriaLists',
      description: 'ex: INDUSTRY',
    }),
    defineField({
      name: 'list2',
      title: 'List 2',
      type: 'textBlock',
      fieldset: 'criteriaLists',
      description: 'ex: BUSINESS',
    }),
    defineField({
      name: 'list3',
      title: 'List 3',
      type: 'textBlock',
      fieldset: 'criteriaLists',
      description: 'ex: PEOPLE',
    }),
  ],
});
