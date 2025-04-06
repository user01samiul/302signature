import Image from "next/image";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { IoStar, IoStarHalf } from "react-icons/io5";

const relatedProducts = [
  {
    id: "paese-cool-crush-eyeshadow-palette",
    name: "PAESE Cool Crush Eyeshadow Palette",
    price: 140.00,
    originalPrice: 175.00,
    currency: "AED",
    image: "https://www.302signature.com/cdn/shop/files/5902627624483_EYESHADOWPALETTEWARMCRUSH_2.jpg?v=1743468784&width=533",
    rating: 4.2,
    reviews: 18,
    isNew: true,
  },
  {
    id: "paese-selfglow-bronzer-01-cold",
    name: "PAESE Selfglow Bronzer - 01 Cold",
    price: 95.00,
    currency: "AED",
    image: "https://www.302signature.com/cdn/shop/files/590262_1.jpg?v=1743472084&width=533",
    rating: 4.7,
    reviews: 32,
    isBestSeller: true,
  },
  {
    id: "paese-lip-gloss-rosewood",
    name: "PAESE Lip Gloss - Rosewood",
    price: 65.00,
    currency: "AED",
    image: "https://www.302signature.com/cdn/shop/files/1000_72bronzer_packshot_zamkniety_bez_cienia.jpg?v=1743472084&width=533",
    rating: 4.5,
    reviews: 24,
  },
  {
    id: "paese-mascara-volume",
    name: "PAESE Volume Mascara",
    price: 85.00,
    currency: "AED",
    image: "https://www.302signature.com/cdn/shop/files/5902627624483_EYESHADOWPALETTEWARMCRUSH_1.jpg?v=1743468784&width=533",
    rating: 4.8,
    reviews: 41,
  },
];

export default function RelatedProducts({ currentProductId }) {
  const filteredProducts = relatedProducts.filter(p => p.id !== currentProductId);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">You may also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
            <Link href={`/products/${product.id}`} className="block">
              {/* Product Image */}
              <div className="relative aspect-square bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:opacity-90 transition-opacity duration-300"
                />
                {/* Badges */}
                <div className="absolute top-2 left-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      NEW
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-bold ml-1">
                      BEST
                    </span>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-gray-900 font-medium mb-1 text-sm line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-amber-400">
                        {star <= Math.floor(product.rating) ? (
                          <IoStar className="w-3.5 h-3.5 fill-current" />
                        ) : product.rating % 1 > 0 && star === Math.ceil(product.rating) ? (
                          <IoStarHalf className="w-3.5 h-3.5 fill-current" />
                        ) : (
                          <IoStar className="w-3.5 h-3.5 text-gray-300 fill-current" />
                        )}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">
                    ({product.reviews})
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-900 font-bold">
                    {product.price} {product.currency}
                  </span>
                  {product.originalPrice && (
                    <span className="ml-2 text-gray-500 text-sm line-through">
                      {product.originalPrice} {product.currency}
                    </span>
                  )}
                </div>
              </div>
            </Link>

            {/* Add to Cart Button */}
            <button className="absolute bottom-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 opacity-0 group-hover:opacity-100">
              <FiShoppingBag className="w-4 h-4 text-gray-700 hover:text-rose-600" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}