import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import schemaTypes from './schemaTypes/schema'  // FIXED IMPORT PATH

export default defineConfig({
  name: 'default',
  title: 'eta-funding',

  projectId: 'mg87ynjf',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
