import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'

export default function CoursesSection({ courses }: { courses: any[] }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold mb-2">Top Courses</p>
          <h2 className="text-3xl font-bold text-gray-800">Our Featured Courses</h2>
        </div>

        {!courses || courses.length === 0 ? (
          <p className="text-center text-gray-400">No featured courses yet. Add courses from your Sanity dashboard and mark them as featured.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course: any) => (
              <div key={course._id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
                {course.image && (
                  <div className="relative h-48 w-full">
                    <Image src={urlFor(course.image).width(600).url()} alt={course.title} fill className="object-cover" />
                  </div>
                )}
                <div className="p-6">
                  {course.category && (
                    <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">{course.category}</span>
                  )}
                  <h3 className="text-xl font-bold text-gray-800 mt-3 mb-2">{course.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    {course.duration && <span className="text-sm text-gray-400">⏱ {course.duration}</span>}
                    {course.price && <span className="text-blue-700 font-bold">PKR {course.price.toLocaleString()}</span>}
                  </div>
                  <Link href={`/courses/${course.slug.current}`} className="block text-center bg-blue-700 text-white py-2 rounded-full hover:bg-blue-800 transition">
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link href="/courses" className="border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-full hover:bg-blue-700 hover:text-white transition">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  )
}
