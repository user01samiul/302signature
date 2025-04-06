import { FiTruck, FiGift, FiShield, FiRefreshCw } from 'react-icons/fi';

export default function BeautyBenefits() {
  const benefits = [
    {
      icon: <FiTruck className="w-8 h-8 text-rose-600" />,
      title: "Free Shipping",
      description: "On orders over 200 AED"
    },
    {
      icon: <FiGift className="w-8 h-8 text-rose-600" />,
      title: "Gift Packaging",
      description: "Elegant wrapping options"
    },
    {
      icon: <FiShield className="w-8 h-8 text-rose-600" />,
      title: "Authentic Products",
      description: "100% genuine brands"
    },
    {
      icon: <FiRefreshCw className="w-8 h-8 text-rose-600" />,
      title: "Easy Returns",
      description: "14-day return policy"
    }
  ];

  return (
    <section className="py-12 border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}