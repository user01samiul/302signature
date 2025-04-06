import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiChevronRight, FiInstagram, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Newsletter */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <FiMail className="text-rose-600 mr-2 text-xl" />
              <h3 className="text-xl font-bold text-gray-900">
                Join Our Community
              </h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Subscribe to receive updates, access to exclusive deals, and more.
              Join our family of fashion enthusiasts today!
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors duration-300 font-medium shadow-sm hover:shadow-md whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/collections/all"
                  className="text-gray-600 hover:text-rose-600 transition-colors duration-200 flex items-center group"
                >
                  <FiChevronRight className="mr-2 text-rose-500 group-hover:translate-x-1 transition-transform" />
                  Shop All
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/about"
                  className="text-gray-600 hover:text-rose-600 transition-colors duration-200 flex items-center group"
                >
                  <FiChevronRight className="mr-2 text-rose-500 group-hover:translate-x-1 transition-transform" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/contact"
                  className="text-gray-600 hover:text-rose-600 transition-colors duration-200 flex items-center group"
                >
                  <FiChevronRight className="mr-2 text-rose-500 group-hover:translate-x-1 transition-transform" />
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/faq"
                  className="text-gray-600 hover:text-rose-600 transition-colors duration-200 flex items-center group"
                >
                  <FiChevronRight className="mr-2 text-rose-500 group-hover:translate-x-1 transition-transform" />
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">
              Follow Us
            </h3>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/302signature/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-600 hover:text-rose-600 transition-colors duration-200 group"
              >
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                  <FiInstagram className="text-white text-lg" />
                </div>
                <span className="font-medium">@302signature</span>
              </a>
              <p className="text-gray-500 text-sm mt-2">
                Tag us in your photos for a chance to be featured!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} 302 Signature. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2">
              <Link href="/pages/privacy" className="text-gray-500 hover:text-rose-600 text-sm">
                Privacy Policy
              </Link>
              <Link href="/pages/terms" className="text-gray-500 hover:text-rose-600 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <Image
                src="/visa.png"
                alt="Visa"
                width={48}
                height={30}
                className="h-6 w-auto object-contain"
              />
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <Image
                src="/master-card.png"
                alt="Mastercard"
                width={48}
                height={30}
                className="h-6 w-auto object-contain"
              />
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <Image
                src="/paypal.png"
                alt="PayPal"
                width={48}
                height={30}
                className="h-6 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}