import Image from 'next/image'
import Link from 'next/link'
import { getAllBlogs, getBlogBySlug, urlFor } from '@/lib/sanity'

// This tells Next.js which blog pages to build at deploy time
export async function generateStaticParams() {
  const blogs = await getAllBlogs()
  if (!blogs || blogs.length === 0) return []
  return blogs
    .filter((b: any) => b.slug?.current)
    .map((b: any) => ({ slug: b.slug.current }))
}

function renderBody(body: any[]) {
  if (!body || body.length === 0) return <p className="text-gray-500">No content yet.</p>
  return body.map((block: any, i: number) => {
    if (block._type !== 'block') return null
    const text = block.children?.map((c: any) => c.text).join('') || ''
    if (!text) return null
    switch (block.style) {
      case 'h1': return <h1 key={i} className="text-3xl font-bold text-gray-800 mt-8 mb-4">{text}</h1>
      case 'h2': return <h2 key={i} className="text-2xl font-bold text-gray-800 mt-6 mb-3">{text}</h2>
      case 'h3': return <h3 key={i} className="text-xl font-bold text-gray-800 mt-5 mb-2">{text}</h3>
      default:   return <p key={i} className="text-gray-600 leading-relaxed mb-4">{text}</p>
    }
  })
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug)

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">Blog post not found</h1>
          <Link href="/blog" className="text-blue-700 hover:underline">← Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {blog.category && (
            <span className="text-xs bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-semibold mb-4 inline-block">
              {blog.category}
            </span>
          )}
          <h1 className="text-4xl font-bold mt-3 mb-4">{blog.title}</h1>
          <div className="flex gap-6 text-blue-200 text-sm">
            {blog.author && <span>✍️ {blog.author}</span>}
            {blog.publishedAt && <span>📅 {new Date(blog.publishedAt).toLocaleDateString()}</span>}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {blog.image && (
          <div className="relative h-72 w-full rounded-2xl overflow-hidden mb-10">
            <Image src={urlFor(blog.image).width(900).url()} alt={blog.title} fill className="object-cover" />
          </div>
        )}
        <article>{renderBody(blog.body)}</article>
        <div className="mt-12 pt-6 border-t border-gray-200">
          <Link href="/blog" className="text-blue-700 hover:underline font-medium">← Back to All Blogs</Link>
        </div>
      </div>
    </div>
  )
}
