"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBrush, FaLeaf, FaRegGem } from "react-icons/fa";
import { FiArrowRight, FiGift, FiShoppingBag, FiStar } from "react-icons/fi";

const banners = [
  {
    id: 1,
    src: "https://www.302signature.com/cdn/shop/files/4.jpg?v=1743552388&width=3840",
    alt: "Florasis collection",
    title: "Florasis Luxury Collection",
    subtitle: "Ancient Chinese beauty meets modern elegance",
    cta: "Explore Now",
    link: "/collections/florasis",
    features: [
      { icon: <FaRegGem className="text-rose-500" />, text: "Premium" },
      { icon: <FaLeaf className="text-green-500" />, text: "Cruelty Free" },
      { icon: <FiStar className="text-yellow-500" />, text: "Luxury" },
    ],
  },
  {
    id: 2,
    src: "https://www.302signature.com/cdn/shop/files/4_2.jpg?v=1743552330&width=3840",
    alt: "Zeesea collection",
    title: "Zeesea Cosmetics",
    subtitle: "Innovative formulas with artistic designs",
    cta: "Discover",
    link: "/collections/zeesea",
    features: [
      { icon: <FaBrush className="text-blue-500" />, text: "Artistic" },
      { icon: <FiGift className="text-purple-500" />, text: "Great Gift" },
      { icon: <FiStar className="text-yellow-500" />, text: "Trending" },
    ],
  },
  {
    id: 3,
    src: "https://www.302signature.com/cdn/shop/files/5902627626296_CREAMYBLUSH_BLUSHKISSED03__1.jpg?v=1743472708&width=1100",
    alt: "Paese collection",
    title: "Paese Cosmetics",
    subtitle: "European quality with a delicate touch",
    cta: "Shop Now",
    link: "/collections/paese",
    features: [
      { icon: <FaLeaf className="text-green-500" />, text: "Vegan" },
      { icon: <FiShoppingBag className="text-amber-500" />, text: "Limited" },
      { icon: <FiStar className="text-yellow-500" />, text: "Popular" },
    ],
  },
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[65vh] sm:h-[80vh] md:h-[85vh] max-h-[800px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={banner.src}
              alt={banner.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10 flex items-center justify-center lg:justify-start px-4">
              <div className="w-full max-w-4xl mx-auto lg:mx-0 lg:ml-12 xl:ml-20 2xl:ml-32">
                <div className="w-full max-w-md sm:max-w-lg bg-white/90 p-4 sm:p-6 md:p-8 rounded-lg backdrop-blur-sm shadow-xl mx-auto lg:mx-0">
                  <span className="inline-block px-2 py-1 mb-2 sm:mb-3 text-xs font-semibold tracking-wider text-rose-600 uppercase bg-rose-100 rounded-full">
                    New Collection
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                    {banner.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6">
                    {banner.subtitle}
                  </p>

                  <div className="mb-4 sm:mb-6">
                    <ul className="grid grid-cols-3 gap-1 sm:gap-2">
                      {banner.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-1 text-xs sm:text-sm"
                        >
                          <span>{feature.icon}</span>
                          <span>{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={banner.link}
                    className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-rose-600 to-rose-400 text-white rounded-lg hover:from-rose-700 hover:to-rose-500 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto"
                  >
                    {banner.cta}
                    <FiArrowRight className="ml-2 sm:ml-3 animate-pulse" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center space-x-2 sm:space-x-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-rose-600 sm:w-5"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
