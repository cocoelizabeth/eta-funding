// /* eslint-disable */
// import createSchema from 'part:@sanity/base/schema-creator';
// import schemaTypes from 'all:part:@sanity/base/schema-type';
// /* eslint-enable */

// // import custom document
// import blog from './documents/blog';
// import author from './documents/author';
// import category from './documents/category';
// import featured from './documents/featured';

// // import custom objects
// import customImage from './objects/customImage';
// import richText from './objects/richText';
// // import customCode from './objects/customCode';
// import normalText from './objects/normalText';
// import customSEO from './objects/customSEO';
// import heroText from './objects/home/hero';
// import textBlockCTA from './objects/textBlockCTA';
// import content from './objects/home/content';
// import criteriaLists from './objects/whatWeLookFor/criteriaLists';
// import textBlock from './objects/textBlock';
// import reasons from './objects/whyUs/reasons';   
// import steps from './objects/ourProcess/steps';
// import criteriaListsWithTitle from './objects/childCare/criteriaListsWithTitle';

// // import page documents
// import home from './pageDocuments/home';
// import whatWeLookFor from './pageDocuments/whatWeLookFor';
// import whyUs from './pageDocuments/whyUs';
// import whoWeAre from './pageDocuments/whoWeAre';
// import ourProcess from './pageDocuments/ourProcess';
// import childCare from './pageDocuments/childCare';

// export default createSchema({
//   name: 'default',
//   types: schemaTypes.concat([
//     // page documents,
//     home,
//     whatWeLookFor,
//     childCare,
//     whyUs,
//     whoWeAre,
//     ourProcess,
//     // blog documents
//     blog,
//     author,
//     category,
//     featured,
//     // objects
//     customImage,
//     richText,
//     // customCode,
//     normalText,
//     customSEO,
//     heroText,
//     textBlockCTA,
//     content,
//     textBlock,
//     criteriaLists,
//     reasons,
//     steps,
//     criteriaListsWithTitle,
//     // reasonsList,
//   ]),
// });


import { defineType, defineField } from 'sanity';
import documents from './documents/index.js';
import objects from './objects/index.js';
import pageDocuments from './pageDocuments/index.js';


export default [
  ...objects,
  ...pageDocuments,
  ...documents,
];
