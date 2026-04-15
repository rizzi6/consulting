import Image from 'next/image'
import Link from 'next/link'
import { getAllBlogs, urlFor } from '@/lib/sanity'

export default async function BlogPage() {
  const blogs = await getAllBlogs()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-3">Our Blog</h1>
        <p className="text-blue-200 max-w-xl mx-auto">Stay updated with the latest news and tips for studying abroad.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {!blogs || blogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No blog posts yet.</p>
            <p className="text-gray-400 text-sm mt-2">Add blogs from your dashboard at <strong>/studio</strong></p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog: any) => (
              <Link key={blog._id} href={`/blog/${blog.slug.current}`} className="group">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition h-full">
                  {blog.image && (
                    <div className="relative h-48 w-full">
                      <Image src={urlFor(blog.image).width(600).url()} alt={blog.title} fill className="object-cover group-hover:scale-105 transition duration-300" />
                    </div>
                  )}
                  <div className="p-6">
                    {blog.category && (
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium">{blog.category}</span>
                    )}
                    <h3 className="text-lg font-bold text-gray-800 mt-3 mb-2 line-clamp-2">{blog.title}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">{blog.excerpt}</p>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>{blog.author}</span>
                      <span>{blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString() : ''}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
