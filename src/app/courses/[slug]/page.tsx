import Image from 'next/image'
import Link from 'next/link'
import { getAllCourses, getCourseBySlug, urlFor } from '@/lib/sanity'

// This tells Next.js which course pages to build at deploy time
export async function generateStaticParams() {
  const courses = await getAllCourses()
  if (!courses || courses.length === 0) return []
  return courses
    .filter((c: any) => c.slug?.current)
    .map((c: any) => ({ slug: c.slug.current }))
}

export default async function CoursePage({ params }: { params: { slug: string } }) {
  const course = await getCourseBySlug(params.slug)

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">Course not found</h1>
          <Link href="/courses" className="text-blue-700 hover:underline">← Back to Courses</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {course.category && (
            <span className="text-xs bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-semibold mb-4 inline-block">
              {course.category}
            </span>
          )}
          <h1 className="text-4xl font-bold mt-3 mb-4">{course.title}</h1>
          <div className="flex gap-6 text-blue-200 text-sm">
            {course.duration && <span>⏱ {course.duration}</span>}
            {course.price && <span>💰 PKR {course.price.toLocaleString()}</span>}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {course.image && (
              <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-8">
                <Image src={urlFor(course.image).width(800).url()} alt={course.title} fill className="object-cover" />
              </div>
            )}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Course</h2>
            <p className="text-gray-600 leading-relaxed">{course.description}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 h-fit">
            <h3 className="font-bold text-gray-800 mb-4">Course Details</h3>
            {course.duration && (
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-500">Duration</span>
                <span className="font-medium">{course.duration}</span>
              </div>
            )}
            {course.price && (
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-500">Price</span>
                <span className="font-bold text-blue-700">PKR {course.price.toLocaleString()}</span>
              </div>
            )}
            {course.category && (
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-500">Category</span>
                <span className="font-medium">{course.category}</span>
              </div>
            )}
            <Link href="/contact" className="mt-6 block text-center bg-blue-700 text-white py-3 rounded-full hover:bg-blue-800 transition font-semibold">
              Enroll Now
            </Link>
            <Link href="/courses" className="mt-3 block text-center text-blue-700 hover:underline text-sm">
              ← Back to Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
