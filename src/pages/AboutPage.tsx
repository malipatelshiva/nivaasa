import { CheckCircle } from 'lucide-react';

// ✅ IMPORT YOUR LOCAL IMAGES
import img1 from "../assets/bedroom13.jpeg";
import img2 from "../assets/bedroom15.jpeg";

const AboutPage: React.FC = () => {

  const highlights = [
    '50+ Successful Projects Delivered',
    'Trusted Residential Interior Experts',
    'Modern & Luxury Interior Designs',
    'End-to-End Interior Solutions'
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">

      {/* 🔥 HERO */}
      <div className="bg-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          About Nivaasa Living Spaces
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          We create elegant, modern, and functional interiors that transform houses into dream homes.
        </p>

        {/* RED LINE DESIGN */}
        <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* 🔥 SECTION 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* IMAGE */}
          <div>
            <img
              src={img1}
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Who We Are
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              <strong>Nivaasa Living Spaces</strong> is a trusted name in residential interior design. 
              We specialize in creating modern, luxurious, and functional living spaces tailored to your lifestyle.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              With experience in delivering high-quality interiors, we focus on design excellence, 
              premium materials, and customer satisfaction.
            </p>

            {/* HIGHLIGHTS */}
            <div className="space-y-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-red-500" size={22} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 🔥 SECTION 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* TEXT */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Our Vision & Mission
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our vision is to design spaces that blend aesthetics, comfort, and functionality, 
              making every home a reflection of its owner’s personality.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our mission is to deliver high-quality interiors with transparency, 
              innovation, and attention to detail.
            </p>

            {/* WHY CHOOSE US */}
            <div className="bg-red-50 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-gray-900 mb-3">
                Why Choose Us?
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li>✔ Expert interior designers</li>
                <li>✔ Premium quality materials</li>
                <li>✔ On-time project delivery</li>
                <li>✔ Customer-first approach</li>
              </ul>
            </div>
          </div>

          {/* IMAGE */}
          <div className="order-1 md:order-2">
            <img
              src={img2}
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

        </div>

        {/* 🔥 PROCESS SECTION */}
        <div>

          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              { title: 'Planning', desc: 'Understanding client needs and space' },
              { title: 'Design', desc: 'Creating modern and elegant layouts' },
              { title: 'Execution', desc: 'High-quality implementation' },
              { title: 'Delivery', desc: 'On-time completion with perfection' }
            ].map((step, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow hover:shadow-lg transition">

                <h3 className="font-bold text-red-500 mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {step.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutPage;