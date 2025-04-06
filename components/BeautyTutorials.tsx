"use client";
import Image from "next/image";
import Link from "next/link";
import { FiBookmark, FiClock, FiPlay } from "react-icons/fi";

const tutorials = [
  {
    id: 1,
    title: "Florasis Makeup Look: Traditional Chinese Beauty",
    description:
      "Learn how to create an elegant makeup look inspired by ancient Chinese aesthetics",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/best-makeup-youtube-thumbnail-design-template-fbe5bafa68312dbe3f7d6c1490396ce1_screen.jpg?ts=1597756202",
    duration: "12 min",
    category: "Makeup Tutorial",
    href: "/blog/florasis-makeup-tutorial",
  },
  {
    id: 2,
    title: "Zeesea Eyeshadow Techniques for Hooded Eyes",
    description:
      "Master these professional techniques to make your eyes appear larger and more defined",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/best-makeup-youtube-thumbnail-design-template-fbe5bafa68312dbe3f7d6c1490396ce1_screen.jpg?ts=1597756202",
    duration: "8 min",
    category: "Eye Makeup",
    href: "/blog/zeesea-eyeshadow-techniques",
  },
  {
    id: 3,
    title: "Paese Skincare Routine for Glowing Skin",
    description:
      "Discover the perfect morning and evening routine for radiant, healthy-looking skin",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/best-makeup-youtube-thumbnail-design-template-fbe5bafa68312dbe3f7d6c1490396ce1_screen.jpg?ts=1597756202",
    duration: "15 min",
    category: "Skincare",
    href: "/blog/paese-skincare-routine",
  },
];

export default function BeautyTutorials() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-rose-600 font-semibold tracking-wider">
            BEAUTY EDUCATION
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Tips & Tutorials
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Learn professional techniques and discover the latest beauty trends
            from our experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={tutorial.image}
                  alt={tutorial.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="flex items-center space-x-2 text-white bg-rose-600 px-3 py-1 rounded-full text-xs font-medium absolute top-4 left-4">
                    <FiPlay className="w-3 h-3" />
                    <span>{tutorial.category}</span>
                  </div>
                  <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-rose-600 transition-colors">
                    <FiBookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <FiClock className="w-4 h-4 mr-1" />
                  <span>{tutorial.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                  <Link href={tutorial.href}>{tutorial.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4">{tutorial.description}</p>
                <Link
                  href={tutorial.href}
                  className="inline-flex items-center text-rose-600 font-medium hover:text-rose-700 transition-colors"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-3 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
          >
            View All Articles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
