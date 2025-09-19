import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import schemaTypes from './schemaTypes/schema' 
// import customNavbar from './components/customNavbar' // FIXED IMPORT PATH
// import SidebarList from './components/SidebarList'
import MyEnhancedNavbar from './components/CustomNavbar'
export default defineConfig({
  name: 'default',
  title: 'eta-funding',

  projectId: 'mg87ynjf',
  dataset: 'production',

  studio: {
    components: {
      navbar: MyEnhancedNavbar,
    }
  },

  plugins: [
    structureTool(),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})

