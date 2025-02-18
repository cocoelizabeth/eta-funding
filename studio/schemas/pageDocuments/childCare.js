import { MdChildCare } from 'react-icons/md';

export default {
  title: "Child Care",
  name: "childCare",
  type: "document",
  icon: MdChildCare,
  fields: [
    {
      title: "SEO",
      name: "seo",
      type: "customSEO",
      description: "IGNORE THIS",
    },
    {
      title: "Hero Section",
      name: "hero",
      type: "textBlock",
      description: "First section on page with heading & paragraph text",
    },
    {
        title: "Philosophy Section",
        name: "philosophy",
        type: "textBlock",
        description: "Second section on page with heading & paragraph text",
    },
    {
        title: "Criteria Content",
        name: "criteriaListsContent",
        type: "criteriaListsWithTitle",
        description: "Third section on page with criteria lists"
      },
  ],
};
