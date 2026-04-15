import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { courseSchema } from './sanity/schemaTypes/course'
import { blogSchema } from './sanity/schemaTypes/blog'
import { serviceSchema } from './sanity/schemaTypes/service'

export default defineConfig({
  name: 'default',
  title: 'Consulting CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'replace-with-your-id',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: { types: [courseSchema, blogSchema, serviceSchema] },
})
