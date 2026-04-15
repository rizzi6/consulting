export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold mb-2">About Us</p>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Study Abroad Consultants</h2>
            <p className="text-gray-500 mb-4">At our consultancy, we specialize in providing expert services that support students through every stage of their academic journey, from university selection to visa processing and beyond.</p>
            <p className="text-gray-500 mb-8">We genuinely care for the well-being and success of our students, going above and beyond to provide exceptional services that meet their individual needs and aspirations.</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '500+', label: 'Students Helped' },
                { number: '50+', label: 'Partner Universities' },
                { number: '20+', label: 'Countries Covered' },
              ].map((stat) => (
                <div key={stat.label} className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-blue-700">{stat.number}</p>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl h-96 flex items-center justify-center">
            <div className="text-center text-blue-400">
              <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p className="font-medium">Replace with your image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
