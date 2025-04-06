import Image from "next/image";
import Link from "next/link";
import { FiEye, FiHeart, FiShoppingBag } from "react-icons/fi";
import { IoFlashSharp, IoRibbon, IoStar, IoStarHalf } from "react-icons/io5";

const products = [
  {
    id: 1,
    name: "PAESE Warm Crush Eyeshadow Palette",
    price: "140.00 AED",
    originalPrice: "175.00 AED",
    images: [
      "https://www.302signature.com/cdn/shop/files/5902627624483_EYESHADOWPALETTEWARMCRUSH_4.jpg?v=1743468784&width=533",
      "https://www.302signature.com/cdn/shop/files/5902627624483_EYESHADOWPALETTEWARMCRUSH_2.jpg?v=1743468784&width=533",
    ],
    href: "/products/paese-warm-crush-eyeshadow-palette",
    isNew: true,
    isSale: true,
  },
  {
    id: 2,
    name: "PAESE Selfglow Bronzer - 01 Cold",
    price: "95.00 AED",
    images: [
      "https://www.302signature.com/cdn/shop/files/590262_1.jpg?v=1743472084&width=533",
      "https://www.302signature.com/cdn/shop/files/1000_72bronzer_packshot_zamkniety_bez_cienia.jpg?v=1743472084&width=533",
    ],
    href: "/products/paese-selfglow-bronzer-01-cold",
    isBestSeller: true,
  },
  {
    id: 3,
    name: "PAESE Warm Crush Eyeshadow Palette",
    price: "140.00 AED",
    originalPrice: "175.00 AED",
    images: [
      "/product1.PNG",
      "https://www.302signature.com/cdn/shop/files/5902627624483_EYESHADOWPALETTEWARMCRUSH_2.jpg?v=1743468784&width=533",
    ],
    href: "/products/paese-warm-crush-eyeshadow-palette",
    isNew: true,
    isSale: true,
  },
  {
    id: 4,
    name: "PAESE Warm Crush Eyeshadow Palette",
    price: "140.00 AED",
    originalPrice: "175.00 AED",
    images: [
      "/product2.PNG",
      "https://www.302signature.com/cdn/shop/files/5902627624483_EYESHADOWPALETTEWARMCRUSH_2.jpg?v=1743468784&width=533",
    ],
    href: "/products/paese-warm-crush-eyeshadow-palette",
    isNew: true,
    isSale: true,
  },
  {
    id: 5,
    name: "PAESE Warm Crush Eyeshadow Palette",
    price: "140.00 AED",
    originalPrice: "175.00 AED",
    images: [
      "/product3.PNG",
      "https://www.302signature.com/cdn/shop/files/5902627624483_EYESHADOWPALETTEWARMCRUSH_2.jpg?v=1743468784&width=533",
    ],
    href: "/products/paese-warm-crush-eyeshadow-palette",
    isNew: true,
    isSale: true,
  },
];

export default function ProductGrid() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <span className="text-rose-600 font-semibold tracking-wider">
              BEAUTY SELECTION
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Featured Products
            </h2>
            <p className="text-gray-600 mt-2 max-w-lg">
              Discover our carefully curated collection of premium beauty
              essentials
            </p>
          </div>
          <Link
            href="/collections/all"
            className="px-8 py-3 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors font-medium shadow-lg hover:shadow-rose-200/50 flex items-center gap-2"
          >
            Shop All Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-4 sm:px-6">
          {products.map((product) => (
            <Link href={product.href} key={product.id}>
              <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 border border-gray-200 hover:border-rose-100">
                {/* Product Image */}
                <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    priority={product.isBestSeller}
                  />
                  <Image
                    src={product.images[1]}
                    alt={product.name}
                    fill
                    className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col space-y-2 z-10">
                    {product.isNew && (
                      <span className="bg-green-500 text-white text-xs px-2.5 py-1 rounded-full font-bold shadow-md flex items-center gap-1 animate-pulse">
                        <IoFlashSharp className="w-3 h-3" /> NEW
                      </span>
                    )}
                    {product.isSale && (
                      <span className="bg-gradient-to-r from-rose-600 to-pink-500 text-white text-xs px-2.5 py-1 rounded-full font-bold shadow-md flex items-center gap-1">
                        <IoRibbon className="w-3 h-3" />
                        {Math.round(
                          (1 -
                            parseFloat(product.price) /
                              parseFloat(product.originalPrice)) *
                            100
                        )}
                        % OFF
                      </span>
                    )}
                    {product.isBestSeller && (
                      <span className="bg-gradient-to-r from-amber-500 to-orange-400 text-white text-xs px-2.5 py-1 rounded-full font-bold shadow-md flex items-center gap-1">
                        <IoStar className="w-3 h-3" /> BEST
                      </span>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-2 pb-4">
                    <button
                      className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 transform translate-y-4 group-hover:translate-y-0"
                      aria-label="Add to wishlist"
                    >
                      <FiHeart className="w-4 h-4 text-gray-700 hover:text-rose-600" />
                    </button>
                    <button
                      className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 delay-75 transform translate-y-4 group-hover:translate-y-0"
                      aria-label="Quick view"
                    >
                      <FiEye className="w-4 h-4 text-gray-700 hover:text-blue-600" />
                    </button>
                    <button
                      className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 delay-100 transform translate-y-4 group-hover:translate-y-0"
                      aria-label="Add to cart"
                    >
                      <FiShoppingBag className="w-4 h-4 text-gray-700 hover:text-green-600" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-3 md:p-4">
                  <div className="flex items-center mb-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-amber-400">
                          {star <= 4 ? (
                            <IoStar className="w-3.5 h-3.5 fill-current" />
                          ) : (
                            <IoStarHalf className="w-3.5 h-3.5 fill-current" />
                          )}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">(24)</span>
                  </div>

                  <h3 className="text-gray-900 font-medium mb-1.5 text-sm md:text-base line-clamp-2 h-[2.8em] leading-tight">
                    {product.name}
                  </h3>

                  <div className="flex items-center mt-2">
                    <p className="text-gray-900 font-bold text-base md:text-lg">
                      ${product.price}
                    </p>
                    {product.originalPrice && (
                      <p className="ml-2 text-gray-400 text-sm line-through">
                        ${product.originalPrice}
                      </p>
                    )}
                  </div>

                  <button className="mt-3 w-full py-2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-rose-600 hover:to-rose-500 text-white rounded-lg transition-all duration-300 font-medium text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                    <FiShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
