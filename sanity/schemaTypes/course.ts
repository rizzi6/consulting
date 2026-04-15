import { defineField, defineType } from 'sanity'

export const courseSchema = defineType({
  name: 'course',
  title: 'Courses',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Course Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'duration', title: 'Duration', type: 'string' }),
    defineField({ name: 'price', title: 'Price (PKR)', type: 'number' }),
    defineField({ name: 'featured', title: 'Show on Homepage?', type: 'boolean', initialValue: false }),
  ],
})
