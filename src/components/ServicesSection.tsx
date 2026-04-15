const defaultServices = [
  { _id: '1', title: 'Counselling', description: 'Expert guidance on university selection, applications, visas, and scholarships for your study abroad journey.' },
  { _id: '2', title: 'Admission Guidance', description: 'We highlight key areas to enhance your profile, ensuring a strong impression on universities.' },
  { _id: '3', title: 'University Selection', description: 'Careful evaluation of your career goals and budget to ensure the best possible university match.' },
  { _id: '4', title: 'Visa Application', description: 'We guide you through the entire visa process including applications, documents, and mock interviews.' },
  { _id: '5', title: 'Pre-Departure Orientation', description: 'Essential guidance on accommodation, culture, lifestyle, banking, and local regulations.' },
  { _id: '6', title: 'Travel Assistance', description: 'We book flights in advance, ensuring ideal departure dates, best routes, and affordable fares.' },
]

export default function ServicesSection({ services }: { services: any[] }) {
  const list = services && services.length > 0 ? services : defaultServices

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold mb-2">Our Services</p>
          <h2 className="text-3xl font-bold text-gray-800">We Strive to Provide the Finest Service</h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">We provide A to Z services for student visa in major universities and colleges around the globe.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((service: any, index: number) => (
            <div key={service._id} className="flex gap-4 p-6 border border-gray-100 rounded-2xl hover:shadow-md transition">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold">{index + 1}</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
