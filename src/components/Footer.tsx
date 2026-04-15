import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">YourBrand</h2>
            <p className="text-blue-200 text-sm mb-6 max-w-sm">Let us help you yield your true academic potential for foreign education. Get in touch to start your journey.</p>
            <div className="flex gap-4">
              {['F', 'I', 'L', 'Y'].map((s, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition text-sm font-bold">{s}</a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/courses" className="hover:text-white transition">Courses</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-blue-200 text-sm">
              <li>📞 +92 300 0000000</li>
              <li>✉️ info@yourbrand.com</li>
              <li>📍 Your Address, City, Pakistan</li>
              <li>🕐 10:30 AM to 6:30 PM (Mon-Fri)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 text-center text-blue-300 text-sm">
          <p>© {new Date().getFullYear()} YourBrand. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
