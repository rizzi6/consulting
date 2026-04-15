import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'

export default function BlogsSection({ blogs }: { blogs: any[] }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold mb-2">Top Blogs</p>
          <h2 className="text-3xl font-bold text-gray-800">Our Recent Blogs</h2>
        </div>

        {!blogs || blogs.length === 0 ? (
          <p className="text-center text-gray-400">No blog posts yet. Add blogs from your Sanity dashboard.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog: any) => (
              <Link key={blog._id} href={`/blog/${blog.slug.current}`} className="group">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
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
                    <p className="text-gray-500 text-sm line-clamp-2">{blog.excerpt}</p>
                    <div className="mt-4 flex justify-between text-xs text-gray-400">
                      <span>{blog.author}</span>
                      <span>{blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString() : ''}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link href="/blog" className="border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-full hover:bg-blue-700 hover:text-white transition">
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  )
}
