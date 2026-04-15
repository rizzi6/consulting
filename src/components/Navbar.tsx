'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-700">YourBrand</Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-700 transition">Home</Link>
            <Link href="/courses" className="text-gray-700 hover:text-blue-700 transition">Courses</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-700 transition">Blog</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-700 transition">Contact</Link>
            <Link href="/contact" className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition">Apply Now</Link>
          </div>

          <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Home</Link>
            <Link href="/courses" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Courses</Link>
            <Link href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Blog</Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Contact</Link>
            <Link href="/contact" className="block mx-4 text-center bg-blue-700 text-white px-5 py-2 rounded-full">Apply Now</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
