import { FaPhone } from "react-icons/fa";
import { defineField, defineType } from "sanity";

export default defineType({
    title: 'Contact',
    name: 'contact',
    type: 'document',
    icon: FaPhone,
    fields: [
        defineField({
            title: 'SEO',
            name: 'seo',
            type: 'customSEO',
        }),
        defineField({
            title: 'Content Section',
            name: 'contact',
            type: 'textBlock',
        }),
    ],
})