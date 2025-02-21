import { defineType, defineArrayMember, defineField } from 'sanity';

export default defineType({
  title: 'Normal Text',
  name: 'normalText',
  type: 'array',
  of: [
    defineField({
      title: 'Block',
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: "Underline", value: "underline" }, 
        ],
        annotations: [],
      },
    }),
  ],
});



// alternative using defineArrayMember() inside the of array

// export default defineType({
//   name: 'normalText',
//   title: 'Normal Text',
//   type: 'array',
//   of: [
//     defineArrayMember({
//       title: 'Block',
//       type: 'block',
//       styles: [{ title: 'Normal', value: 'normal' }],
//       lists: [],
//       marks: {
//         decorators: [
//           { title: 'Strong', value: 'strong' },
//           { title: 'Emphasis', value: 'em' },
//         ],
//         annotations: [],
//       },
//     }),
//   ],
// });



