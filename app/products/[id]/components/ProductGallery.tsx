"use client";

import Image from "next/image";
import { useState } from "react";
import { FiZoomIn } from "react-icons/fi";

export default function ProductGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden group">
        <Image
          src={images[selectedImage]}
          alt="Product"
          fill
          className="object-contain"
          priority
        />
        <button 
          onClick={() => setIsZoomed(!isZoomed)}
          className="absolute bottom-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Zoom image"
        >
          <FiZoomIn className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Image Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square rounded-md overflow-hidden border-2 transition-all duration-200 ${selectedImage === index ? 'border-rose-500' : 'border-transparent hover:border-gray-300'}`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Zoom Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative w-full max-w-4xl h-full max-h-[90vh]">
            <Image
              src={images[selectedImage]}
              alt="Zoomed product"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}