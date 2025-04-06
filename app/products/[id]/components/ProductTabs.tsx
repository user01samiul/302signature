"use client";

import { useState } from "react";
import { IoStar } from "react-icons/io5";

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "features", label: "Features" },
    { id: "ingredients", label: "Ingredients" },
    { id: "how-to-use", label: "How to Use" },
    { id: "reviews", label: `Reviews (${product.reviews})` },
  ];

  return (
    <div className="mt-16">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? "border-rose-500 text-rose-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="py-6">
        {activeTab === "description" && (
          <div>
            <p className="text-gray-700">{product.description}</p>
          </div>
        )}

        {activeTab === "features" && (
          <div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {product.features.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "ingredients" && (
          <div>
            <p className="text-gray-700">{product.ingredients}</p>
          </div>
        )}

        {activeTab === "how-to-use" && (
          <div>
            <p className="text-gray-700">{product.howToUse}</p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-8">
            {/* Review Summary */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center">
                <div className="mr-6">
                  <div className="text-4xl font-bold">{product.rating}</div>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <IoStar
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "text-amber-400 fill-current"
                            : product.rating % 1 > 0 && i === Math.floor(product.rating)
                            ? "text-amber-400 fill-current"
                            : "text-gray-300 fill-current"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Based on {product.reviews} reviews
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center">
                      <div className="w-10 text-sm font-medium text-gray-900">
                        {star} star
                      </div>
                      <div className="flex-1 mx-2 h-2.5 bg-gray-200 rounded-full">
                        <div
                          className="h-2.5 bg-amber-400 rounded-full"
                          style={{
                            width: `${(star / 5) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <span className="w-10 text-sm text-gray-500 text-right">
                        {Math.round((star / 5) * product.reviews)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Review Form */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Write a review
              </h3>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Rating
                  </label>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="text-gray-300 hover:text-amber-400 focus:outline-none"
                      >
                        <IoStar className="w-6 h-6 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="review-title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="review-title"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="review-body"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Review
                  </label>
                  <textarea
                    id="review-body"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                >
                  Submit Review
                </button>
              </form>
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">
                Customer Reviews
              </h3>
              {[...Array(3)].map((_, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, j) => (
                        <IoStar
                          key={j}
                          className={`w-5 h-5 ${
                            j < 4 ? "text-amber-400 fill-current" : "text-gray-300 fill-current"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">
                      {new Date().toLocaleDateString()}
                    </span>
                  </div>
                  <h4 className="font-medium text-gray-900">
                    Amazing product!
                  </h4>
                  <p className="mt-1 text-gray-600">
                    This eyeshadow palette has become my daily go-to. The colors
                    are so pigmented and blend beautifully. The warm tones
                    complement my skin perfectly.
                  </p>
                  <div className="mt-3 flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
                        JD
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        Jane D.
                      </p>
                      <p className="text-sm text-gray-500">Verified Buyer</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}