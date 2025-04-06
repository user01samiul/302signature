import { FiFilter, FiSearch, FiGrid, FiList, FiStar, FiShoppingBag } from 'react-icons/fi';
import { IoFlashOutline, IoRibbonOutline } from 'react-icons/io5';
import Link from 'next/link';
import Image from 'next/image';

// Mock data - in a real app this would come from an API or database
const products = [
  {
    id: "paese-warm-crush-eyeshadow-palette",
    name: "PAESE Warm Crush Eyeshadow Palette",
    price: 140.00,
    originalPrice: 175.00,
    currency: "AED",
    image: "https://www.302signature.com/cdn/shop/files/5902627624483_EYESHADOWPALETTEWARMCRUSH_4.jpg?v=1743468784&width=533",
    rating: 4.5,
    reviews: 24,
    isNew: true,
    isSale: true,
    category: "Eyeshadow Palettes"
  },
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
    category: "Eyeshadow Palettes"
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
    category: "Bronzers"
  },
  {
    id: "paese-lip-gloss-rosewood",
    name: "PAESE Lip Gloss - Rosewood",
    price: 65.00,
    currency: "AED",
    image: "https://www.302signature.com/cdn/shop/files/1000_72bronzer_packshot_zamkniety_bez_cienia.jpg?v=1743472084&width=533",
    rating: 4.5,
    reviews: 24,
    category: "Lip Gloss"
  },
  {
    id: "paese-mascara-volume",
    name: "PAESE Volume Mascara",
    price: 85.00,
    currency: "AED",
    image: "https://www.302signature.com/cdn/shop/files/5902627624483_EYESHADOWPALETTEWARMCRUSH_1.jpg?v=1743468784&width=533",
    rating: 4.8,
    reviews: 41,
    category: "Mascara"
  },
  {
    id: "paese-liquid-foundation",
    name: "PAESE Liquid Foundation",
    price: 120.00,
    originalPrice: 150.00,
    currency: "AED",
    image: "https://www.302signature.com/cdn/shop/files/5902627624483_EYESHADOWPALETTEWARMCRUSH_3.jpg?v=1743468784&width=533",
    rating: 4.6,
    reviews: 56,
    isSale: true,
    category: "Foundation"
  }
];

const categories = [
  { id: "all", name: "All Products", count: products.length },
  { id: "eyeshadow-palettes", name: "Eyeshadow Palettes", count: products.filter(p => p.category === "Eyeshadow Palettes").length },
  { id: "bronzers", name: "Bronzers", count: products.filter(p => p.category === "Bronzers").length },
  { id: "lip-gloss", name: "Lip Gloss", count: products.filter(p => p.category === "Lip Gloss").length },
  { id: "mascara", name: "Mascara", count: products.filter(p => p.category === "Mascara").length },
  { id: "foundation", name: "Foundation", count: products.filter(p => p.category === "Foundation").length }
];

export default function ProductsPage({
  searchParams,
}) {
  const selectedCategory = searchParams?.category || 'all';
  const viewMode = searchParams?.view || 'grid';
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => 
        p.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
      );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Makeup Collection</h1>
          <p className="mt-3 max-w-2xl mx-auto text-gray-600 sm:mt-4">
            Discover high-quality cosmetics that enhance your natural beauty
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4 space-y-6">
            {/* Categories */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-medium text-gray-900 mb-4 flex items-center">
                <FiFilter className="mr-2" /> Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link
                      href={`/products?category=${category.id}`}
                      className={`flex items-center justify-between py-2 px-2 rounded-md hover:bg-gray-50 ${
                        selectedCategory === category.id ? 'bg-rose-50 text-rose-700' : 'text-gray-700'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-medium text-gray-900 mb-4">Price Range</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Min</span>
                  <span className="text-sm text-gray-500">Max</span>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500"
                  />
                  <span className="text-gray-400">-</span>
                  <input
                    type="number"
                    placeholder="500"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>
                <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200">
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="relative w-full sm:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                />
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  {filteredProducts.length} products
                </span>
                <div className="flex bg-gray-100 rounded-md p-1">
                  <Link
                    href="/products?view=grid"
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    title="Grid view"
                  >
                    <FiGrid className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/products?view=list"
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    title="List view"
                  >
                    <FiList className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Products */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        <div className="absolute top-2 left-2 flex gap-1">
                          {product.isNew && (
                            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold flex items-center">
                              <IoFlashOutline className="mr-1" /> NEW
                            </span>
                          )}
                          {product.isSale && (
                            <span className="bg-rose-500 text-white text-xs px-2 py-1 rounded-full font-bold flex items-center">
                              <IoRibbonOutline className="mr-1" /> SALE
                            </span>
                          )}
                          {product.isBestSeller && (
                            <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-bold">
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
                              <FiStar
                                key={star}
                                className={`w-3.5 h-3.5 ${
                                  star <= Math.floor(product.rating)
                                    ? 'fill-amber-400 text-amber-400'
                                    : product.rating % 1 > 0 && star === Math.ceil(product.rating)
                                    ? 'fill-amber-400 text-amber-400'
                                    : 'fill-gray-300 text-gray-300'
                                }`}
                              />
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
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                    <Link href={`/products/${product.id}`} className="block sm:w-1/4">
                      <div className="relative aspect-square bg-gray-50 rounded-md overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                    <div className="sm:w-3/4">
                      <div className="flex justify-between">
                        <div>
                          <Link href={`/products/${product.id}`}>
                            <h3 className="text-lg font-medium text-gray-900 hover:text-rose-600">
                              {product.name}
                            </h3>
                          </Link>
                          <div className="flex items-center mt-1">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <FiStar
                                  key={star}
                                  className={`w-4 h-4 ${
                                    star <= Math.floor(product.rating)
                                      ? 'fill-amber-400 text-amber-400'
                                      : product.rating % 1 > 0 && star === Math.ceil(product.rating)
                                      ? 'fill-amber-400 text-amber-400'
                                      : 'fill-gray-300 text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500 ml-1">
                              ({product.reviews} reviews)
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold text-gray-900">
                            {product.price} {product.currency}
                          </span>
                          {product.originalPrice && (
                            <div className="text-sm text-gray-500 line-through">
                              {product.originalPrice} {product.currency}
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                        {product.category} - Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <div className="mt-4 flex gap-2">
                        <button className="flex-1 bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                          <FiShoppingBag /> Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center gap-1">
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-1 rounded border border-rose-500 bg-rose-50 text-rose-600 font-medium">
                  1
                </button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">
                  3
                </button>
                <span className="px-2 text-gray-500">...</span>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">
                  8
                </button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}