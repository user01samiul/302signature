// import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import ProductTabs from "./components/ProductTabs";
import RelatedProducts from "./components/RelatedProducts";

// Define the type for your product
interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  currency: string;
  images: string[];
  description: string;
  features: string[];
  ingredients: string;
  howToUse: string;
  rating: number;
  reviews: number;
  variants: Array<{
    id: string;
    name: string;
    color: string;
    disabled?: boolean;
  }>;
  stock: number;
  isNew: boolean;
  isSale: boolean;
  sku: string;
  category: string;
  tags: string[];
}


// Mock data - in a real app this would come from an API or database
const products: Product[] = [
  {
    id: "paese-warm-crush-eyeshadow-palette",
    name: "PAESE Warm Crush Eyeshadow Palette",
    price: 140.0,
    originalPrice: 175.0,
    currency: "AED",
    images: [
      "https://www.302signature.com/cdn/shop/files/5902627624483_EYESHADOWPALETTEWARMCRUSH_4.jpg?v=1743468784&width=533",
      "https://www.302signature.com/cdn/shop/files/5902627624483_EYESHADOWPALETTEWARMCRUSH_2.jpg?v=1743468784&width=533",
      "https://www.302signature.com/cdn/shop/files/5902627624483_EYESHADOWPALETTEWARMCRUSH_3.jpg?v=1743468784&width=533",
      "https://www.302signature.com/cdn/shop/files/5902627624483_EYESHADOWPALETTEWARMCRUSH_1.jpg?v=1743468784&width=533",
    ],
    description:
      "The Warm Crush Eyeshadow Palette by PAESE features 12 highly pigmented shades in warm tones perfect for creating stunning eye looks. The velvety texture blends effortlessly and lasts all day.",
    features: [
      "12 warm-toned shades",
      "Matte and shimmer finishes",
      "Long-lasting formula (up to 12 hours)",
      "Highly pigmented",
      "Cruelty-free",
    ],
    ingredients:
      "Mica, Talc, Magnesium Stearate, Dimethicone, Octyldodecyl Stearoyl Stearate, Polybutene, Phenoxyethanol, Caprylyl Glycol.",
    howToUse:
      "Apply shades with a brush or fingertips. Use lighter shades as a base and darker shades to define the crease. Finish with shimmer shades on the lid.",
    rating: 4.5,
    reviews: 24,
    variants: [
      { id: "warm-crush", name: "Warm Crush", color: "#E2715D" },
      {
        id: "cool-crush",
        name: "Cool Crush",
        color: "#5D7CE2",
        disabled: true,
      },
    ],
    stock: 15,
    isNew: true,
    isSale: true,
    sku: "PAESE-WC-12",
    category: "Eyeshadow Palettes",
    tags: ["eyes", "palette", "warm tones", "makeup"],
  },
  // ... other products
];


export default async function ProductPage({
  params,
}) {
  const { id: paramsId } = params;
  const product = products.find((p) => p.id === paramsId);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumbs */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="text-gray-700 hover:text-rose-600 text-sm font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <a
                  href="/collections/makeup"
                  className="ml-1 text-gray-700 hover:text-rose-600 text-sm font-medium md:ml-2"
                >
                  Makeup
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <a
                  href="/collections/eyes"
                  className="ml-1 text-gray-700 hover:text-rose-600 text-sm font-medium md:ml-2"
                >
                  Eyes
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-1 text-gray-500 text-sm font-medium md:ml-2">
                  {product.name}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Product Gallery */}
          <ProductGallery images={product.images} />

          {/* Product Info */}
          <ProductInfo product={product} />
        </div>

        {/* Product Tabs (Description, Ingredients, etc.) */}
        <ProductTabs product={product} />

        {/* Related Products */}
        <RelatedProducts currentProductId={product.id} />
      </div>
    </div>
  );
}
