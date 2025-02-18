export default {
  type: "object",
  name: "textBlockCTA",
  title: "Text Block with CTA",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      title: "Header Text",
      name: "headerText",
      type: "string",
    },
    {
      title: "Sub Text",
      name: "subText",
      type: "normalText",
    },
    {
      title: "Call To Action",
      name: "cta",
      type: "string",
      description:
        "Text for call to action button, ex: Explore our Acquisition Criteria",
    },
    {
      title: "Page to Link to",
      name: "link",
      type: "string",
      description: "ex: contact, our-process, what-we-look-for, etc. Use '/' to link to homepage",
    },
  ],
};
