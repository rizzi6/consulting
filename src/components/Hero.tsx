import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-yellow-400 font-semibold uppercase tracking-widest mb-4">Your Trusted Consultants</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Start Your Journey <br />
          <span className="text-yellow-400">Study Abroad</span>
        </h1>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          We guide students from application to visa, making your dream of studying abroad a reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/courses" className="bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition">Explore Courses</Link>
          <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}
