"use client";

import { useState } from "react";
import { FiHeart, FiShare2, FiShoppingBag } from "react-icons/fi";
import { IoFlashSharp, IoRibbon, IoStar, IoStarHalf } from "react-icons/io5";

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0].id);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleQuantityChange = (value: number) => {
    const newQuantity = quantity + value;
    if (newQuantity > 0 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<IoStar key={i} className="w-4 h-4 text-amber-400 fill-current" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<IoStarHalf key={i} className="w-4 h-4 text-amber-400 fill-current" />);
      } else {
        stars.push(<IoStar key={i} className="w-4 h-4 text-gray-300 fill-current" />);
      }
    }

    return stars;
  };

  return (
    <div className="space-y-6">
      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {product.isNew && (
          <span className="bg-green-500 text-white text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
            <IoFlashSharp className="w-3 h-3" /> NEW
          </span>
        )}
        {product.isSale && (
          <span className="bg-gradient-to-r from-rose-600 to-pink-500 text-white text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
            <IoRibbon className="w-3 h-3" />
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </span>
        )}
        {product.stock < 10 && (
          <span className="bg-amber-500 text-white text-xs px-2.5 py-1 rounded-full font-bold">
            Only {product.stock} left!
          </span>
        )}
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h1>

      {/* Rating */}
      <div className="flex items-center space-x-2">
        <div className="flex">
          {renderStars()}
        </div>
        <span className="text-sm text-gray-600">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Price */}
      <div className="space-y-1">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gray-900">
            {product.price} {product.currency}
          </span>
          {product.originalPrice && (
            <span className="ml-3 text-lg text-gray-500 line-through">
              {product.originalPrice} {product.currency}
            </span>
          )}
        </div>
        {product.isSale && (
          <div className="text-sm text-green-600">
            You save {product.originalPrice - product.price} {product.currency} ({Math.round((1 - product.price / product.originalPrice) * 100)}%)
          </div>
        )}
      </div>

      {/* Variants */}
      {product.variants.length > 1 && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-900">Variants</h3>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant.id)}
                disabled={variant.disabled}
                className={`px-3 py-1.5 text-sm rounded-full border ${
                  selectedVariant === variant.id
                    ? 'border-rose-500 bg-rose-50 text-rose-700'
                    : variant.disabled
                    ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'border-gray-300 hover:border-rose-300 hover:bg-rose-50'
                }`}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Description */}
      <p className="text-gray-700">{product.description}</p>

      {/* Quantity */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
        <div className="flex items-center">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md hover:bg-gray-50"
          >
            -
          </button>
          <div className="w-16 h-10 flex items-center justify-center border-t border-b border-gray-300 text-center">
            {quantity}
          </div>
          <button
            onClick={() => handleQuantityChange(1)}
            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md hover:bg-gray-50"
          >
            +
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button className="flex-1 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-rose-700 hover:to-rose-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow hover:shadow-lg">
          <FiShoppingBag className="w-5 h-5" />
          Add to Cart
        </button>
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-rose-50 hover:border-rose-300 transition-colors duration-200"
        >
          <FiHeart
            className={`w-5 h-5 ${isWishlisted ? 'fill-rose-500 text-rose-500' : 'text-gray-600'}`}
          />
        </button>
        <button className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200">
          <FiShare2 className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Meta */}
      <div className="pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">SKU:</span> {product.sku}
          </div>
          <div>
            <span className="text-gray-500">Category:</span> {product.category}
          </div>
          <div>
            <span className="text-gray-500">Availability:</span>{" "}
            {product.stock > 0 ? (
              <span className="text-green-600">In Stock</span>
            ) : (
              <span className="text-rose-600">Out of Stock</span>
            )}
          </div>
          <div>
            <span className="text-gray-500">Tags:</span>{" "}
            {product.tags.join(", ")}
          </div>
        </div>
      </div>
    </div>
  );
}