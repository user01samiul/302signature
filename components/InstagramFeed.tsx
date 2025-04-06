'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FiHeart, FiMessageSquare, FiInstagram } from 'react-icons/fi'

const instagramPosts = [
  {
    id: 1,
    image: "/instapost1.PNG",  // Removed /public
    likes: 4,
    comments: 1,
    alt: "Florasis makeup look by @beautywithlayla",
    url: "https://www.instagram.com/p/DG8Dcsfy7rL/"
  },
  {
    id: 2,
    image: "/instapost2.PNG",  // Removed /public
    likes: 9,
    comments: 1,
    alt: "Zeesea eyeshadow palette tutorial",
    url: "https://www.instagram.com/p/DG74jk0yspr/"
  },
  {
    id: 3,
    image: "/instapost3.PNG",  // Removed /public
    likes: 3,
    comments: 0,
    alt: "Paese skincare routine",
    url: "https://www.instagram.com/p/DGWUcMNzW5T/"
  },
]

export default function InstagramFeed() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-rose-600 via-purple-600 to-amber-500 rounded-full p-2 mb-4">
            <FiInstagram className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Follow Us @302signature</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Tag us in your photos for a chance to be featured on our page
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {instagramPosts.map((post) => (
            <div key={post.id} className="group relative aspect-square overflow-hidden">
              {/* Instagram Post Image */}
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              
              {/* Hover Overlay with Engagement Metrics */}
              <Link 
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col text-white"
              >
                <div className="flex items-center space-x-6 mb-2">
                  <div className="flex items-center space-x-2">
                    <FiHeart className="w-5 h-5" />
                    <span className="font-medium">{post.likes.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiMessageSquare className="w-5 h-5" />
                    <span className="font-medium">{post.comments}</span>
                  </div>
                </div>
                <span className="text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
                  View Post
                </span>
              </Link>
            </div>
          ))}
          
          {/* Additional Call-to-Action Tile */}
          <div className="relative aspect-square bg-gradient-to-br from-rose-50 to-amber-50 flex items-center justify-center">
            <div className="text-center p-6">
              <FiInstagram className="w-10 h-10 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">More on Instagram</h3>
              <p className="text-gray-600 mb-4">Follow us for daily beauty inspiration</p>
              <Link
                href="https://instagram.com/302signature"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors text-sm font-medium"
              >
                @302signature
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://instagram.com/302signature"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-medium shadow-sm hover:shadow-md group"
          >
            Follow Us on Instagram
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
