import { defineType, defineField } from 'sanity';
import documents from './documents/index.js';
import objects from './objects/index.js';
import pageDocuments from './pageDocuments/index.js';


export default [
  ...objects,
  ...pageDocuments,
  ...documents,
];
