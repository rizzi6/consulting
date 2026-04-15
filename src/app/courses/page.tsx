import Image from 'next/image'
import Link from 'next/link'
import { getAllCourses, urlFor } from '@/lib/sanity'

export default async function CoursesPage() {
  const courses = await getAllCourses()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-3">Our Courses</h1>
        <p className="text-blue-200 max-w-xl mx-auto">Explore our courses designed to help you achieve your academic goals.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {!courses || courses.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No courses yet.</p>
            <p className="text-gray-400 text-sm mt-2">Add courses from your dashboard at <strong>/studio</strong></p>
          </div>
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
      </div>
    </div>
  )
}
