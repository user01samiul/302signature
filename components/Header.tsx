import Image from "next/image";
import Link from "next/link";
import { FiShoppingBag, FiUser } from "react-icons/fi";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://www.302signature.com/cdn/shop/files/Product_Images_-_Florasis_White_2.jpg?v=1743058501&width=600"
              alt="302 Signature"
              width={120}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-800 hover:text-rose-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-800 hover:text-rose-600 transition-colors font-medium"
            >
              Shop
            </Link>
            <Link
              href="/collections"
              className="text-gray-800 hover:text-rose-600 transition-colors font-medium"
            >
              Brands
            </Link>
            <Link
              href="/pages/about"
              className="text-gray-800 hover:text-rose-600 transition-colors font-medium"
            >
              About
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <Link
              href="/account"
              className="text-gray-700 hover:text-rose-600 transition-colors"
            >
              <FiUser className="w-5 h-5" />
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-rose-600 transition-colors relative"
            >
              <FiShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
