export default {
  type: "object",
  name: "criteriaListsWithTitle",
  title: "Criteria Lists",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fieldsets: [{ name: "criteriaLists", title: "Criteria Lists" }],
  fields: [
    {
      title: "Section Heading",
      name: "sectionHeading",
      type: "string",
    },
    {
      title: "List 1",
      name: "list1",
      type: "textBlock",
      fieldset: "criteriaLists",
      description: "ex: INDUSTRY",
    },
    {
      title: "List 2",
      name: "list2",
      type: "textBlock",
      fieldset: "criteriaLists",
      description: "ex: BUSINESS",
    },
    {
      title: "List 3",
      name: "list3",
      type: "textBlock",
      fieldset: "criteriaLists",
      description: "ex: PEOPLE",
    },
  ],
};
