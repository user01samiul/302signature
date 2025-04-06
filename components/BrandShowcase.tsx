import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const brands = [
  {
    id: 1,
    name: "Florasis",
    description: "Inspired by traditional Chinese aesthetics, Florasis combines ancient beauty secrets with modern innovation.",
    image: "https://www.302signature.com/cdn/shop/collections/2.png?v=1743554145&width=1500",
    href: "/collections/florasis",
    color: "bg-rose-50"
  },
  {
    id: 2,
    name: "Zeesea",
    description: "Artistic designs meet high-performance formulas in this innovative Chinese beauty brand.",
    image: "https://www.302signature.com/cdn/shop/collections/3.png?v=1743554122&width=1500",
    href: "/collections/zeesea",
    color: "bg-amber-50"
  },
  {
    id: 3,
    name: "Paese",
    description: "Polish craftsmanship with European elegance, creating cosmetics loved worldwide.",
    image: "https://www.302signature.com/cdn/shop/collections/1.png?v=1743554100&width=1500",
    href: "/collections/paese",
    color: "bg-indigo-50"
  },
];

export default function BrandShowcase() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Modern abstract background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white/90 z-10"></div>
        
        {/* Abstract floating shapes */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-rose-100 opacity-10 mix-blend-multiply filter blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-amber-100 opacity-10 mix-blend-multiply filter blur-3xl animate-float-medium"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-indigo-100 opacity-10 mix-blend-multiply filter blur-3xl animate-float-fast"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiPjxwYXRoIGQ9Ik0zMCAzMGgtMS41djEuNWgtMS41di0xLjVoLTEuNXYtMS41aDEuNXYxLjVoMS41di0xLjVoMS41djEuNXoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Luxury Brands</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 via-amber-400 to-indigo-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover the finest cosmetic collections from around the world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <div 
              key={brand.id} 
              className={`${brand.color} rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-xl backdrop-blur-sm bg-opacity-70 border border-white/80 hover:border-white`}
            >
              <div className="relative h-64">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{brand.name}</h3>
                <p className="text-gray-600 mb-6">{brand.description}</p>
                <Link 
                  href={brand.href} 
                  className="inline-flex items-center text-rose-600 hover:text-rose-700 font-medium transition-all duration-200 group-hover:underline"
                >
                  Explore collection <FiArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/collections" 
            className="inline-flex items-center px-8 py-4 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-medium shadow-sm hover:shadow-md backdrop-blur-sm bg-opacity-80 hover:scale-105"
          >
            View All Brands
            <FiArrowRight className="ml-3 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}