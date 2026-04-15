import { getFeaturedCourses, getRecentBlogs, getAllServices } from '@/lib/sanity'
import Hero from '@/components/Hero'
import CoursesSection from '@/components/CoursesSection'
import BlogsSection from '@/components/BlogsSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'

export default async function Home() {
  const courses = await getFeaturedCourses()
  const blogs = await getRecentBlogs()
  const services = await getAllServices()

  return (
    <>
      <Hero />
      <CoursesSection courses={courses} />
      <ServicesSection services={services} />
      <AboutSection />
      <BlogsSection blogs={blogs} />
    </>
  )
}
