export default {
  title: "Who We Are",
  name: "whoWeAre",
  type: "document",
  fields: [
    {
      title: "SEO",
      name: "seo",
      type: "customSEO",
    },
    {
      title: "Headshot Image",
      name: "headshotImage",
      type: "customImage",
    },
    {
      title: "Name",
      name: "name",
      type: "string",
      description: "ex: Adam Kaplan",
    },
    {
      title: "Title",
      name: "title",
      type: "string",
      description: "ex: Principal",
    },
    {
      title: "LinkedIn Url",
      name: "linkedInUrl",
      type: "string",
    },
    {
      title: "Email Address",
      name: "email",
      type: "string",
    },
    {
      type: "textBlock",
      name: "about",
      title: "About",
      description: "NOTE: Header text ignored for website. LMK if you want it back in."
    },
    {
      type: "textBlock",
      name: "capitalPartners",
      title: "Capital Partners",
    },
  ],
};
