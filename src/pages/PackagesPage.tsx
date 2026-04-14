import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

// ✅ IMPORT REAL IMAGES
import img1 from "../assets/bedroom13.jpeg";
import img2 from "../assets/bedroom15.jpeg";
import img3 from "../assets/bedroom14.jpeg";
import img4 from "../assets/bedroom16.jpeg";

const PackagesPage: React.FC = () => {

  const packages = [
    {
      name: 'Basic Interior',
      price: '1.5',
      img: img1,
      popular: false,
      features: [
        '1 BHK Interior Design',
        'Basic Kitchen Setup',
        'Wardrobe & Storage',
        'Essential Furniture',
        'Budget Materials',
        '2–3 Weeks Delivery'
      ]
    },
    {
      name: 'Standard Interior',
      price: '3',
      img: img2,
      popular: true,
      features: [
        '2 BHK Full Interior',
        'Modular Kitchen + Chimney',
        'Wardrobes + TV Unit',
        'Premium Furniture',
        'Better Materials',
        '4–5 Weeks Delivery'
      ]
    },
    {
      name: 'Premium Interior',
      price: '5',
      img: img3,
      popular: false,
      features: [
        '3 BHK Luxury Interior',
        'Designer Kitchen',
        'Custom Furniture',
        'False Ceiling + Lighting',
        'High-End Materials',
        '6–8 Weeks Delivery'
      ]
    },
    {
      name: 'Custom Package',
      price: 'Flexible',
      img: img4,
      popular: false,
      features: [
        'Fully Customized Design',
        'Client Requirements',
        'Luxury Options',
        'Multiple Revisions',
        'Personal Designer',
        'Flexible Timeline'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">

      {/* 🔥 HERO */}
      <div className="relative h-[60vh] flex items-center justify-center text-white">

        <img src={img1} className="absolute w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Interior Packages
          </h1>
          <p className="mt-3 text-gray-300">
            Transparent pricing for your dream home
          </p>
        </div>

      </div>

      {/* 🔥 PACKAGES */}
      <div className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition ${
                pkg.popular ? 'border-2 border-red-500 scale-105' : 'border'
              }`}
            >

              {/* IMAGE */}
              <div className="h-40 overflow-hidden">
                <img src={pkg.img} className="w-full h-full object-cover" />
              </div>

              {/* CONTENT */}
              <div className="p-6 bg-white">

                {/* TITLE */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>

                {/* PRICE */}
                <div className="text-3xl font-bold text-red-500 mb-4">
                  {pkg.price === 'Flexible' ? 'Custom Pricing' : `₹${pkg.price}L`}
                </div>

                {/* FEATURES */}
                <div className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <Check className="text-red-500" size={16} />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* BUTTON */}
                <a
                  href="https://wa.me/919000052351"
                  target="_blank"
                  className="block text-center bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
                >
                  Enquire Now
                </a>

              </div>

              {/* POPULAR TAG */}
              {pkg.popular && (
                <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-xs rounded-full">
                  Popular
                </div>
              )}

            </motion.div>
          ))}

        </div>

      </div>

      {/* 🔥 WHY SECTION */}
      <div className="bg-red-50 py-16">

        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-10">
            Why Choose Nivaasa?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              'Experienced Interior Designers',
              'On-Time Project Delivery',
              'Transparent Pricing'
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <Check className="text-red-500 mx-auto mb-3" size={24} />
                <p className="font-semibold">{item}</p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default PackagesPage;