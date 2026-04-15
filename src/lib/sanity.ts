import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'replace-with-your-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)

// ── COURSES ──────────────────────────────────────────────

export async function getFeaturedCourses() {
  try {
    return await client.fetch(
      `*[_type == "course" && featured == true] | order(_createdAt desc) {
        _id, title, slug, category, description, image, duration, price
      }`
    )
  } catch { return [] }
}

export async function getAllCourses() {
  try {
    return await client.fetch(
      `*[_type == "course"] | order(_createdAt desc) {
        _id, title, slug, category, description, image, duration, price
      }`
    )
  } catch { return [] }
}

export async function getCourseBySlug(slug: string) {
  try {
    const results = await client.fetch(
      `*[_type == "course" && slug.current == "${slug}"] {
        _id, title, slug, category, description, image, duration, price
      }`
    )
    return results[0] || null
  } catch { return null }
}

// ── BLOGS ──────────────────────────────────────────────

export async function getRecentBlogs() {
  try {
    return await client.fetch(
      `*[_type == "blog"] | order(publishedAt desc) [0...4] {
        _id, title, slug, author, publishedAt, category, image, excerpt
      }`
    )
  } catch { return [] }
}

export async function getAllBlogs() {
  try {
    return await client.fetch(
      `*[_type == "blog"] | order(publishedAt desc) {
        _id, title, slug, author, publishedAt, category, image, excerpt
      }`
    )
  } catch { return [] }
}

export async function getBlogBySlug(slug: string) {
  try {
    const results = await client.fetch(
      `*[_type == "blog" && slug.current == "${slug}"] {
        _id, title, slug, author, publishedAt, category, image, excerpt, body
      }`
    )
    return results[0] || null
  } catch { return null }
}

// ── SERVICES ──────────────────────────────────────────────

export async function getAllServices() {
  try {
    return await client.fetch(
      `*[_type == "service"] | order(order asc) {
        _id, title, description
      }`
    )
  } catch { return [] }
}
