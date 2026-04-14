import { useState } from 'react';
import { Send } from 'lucide-react';

const EnquiryPage: React.FC = () => {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    property: '',
    budget: '',
    requirement: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔥 PROFESSIONAL WHATSAPP MESSAGE
    const message = `
*New Enquiry - Nivaasa Living Spaces*

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
🏠 Property: ${formData.property}
💰 Budget: ${formData.budget}
📝 Requirement: ${formData.requirement}
    `;

    // 🔥 WHATSAPP LINK
    const url = `https://wa.me/919000052351?text=${encodeURIComponent(message)}`;

    // 🚀 OPEN WHATSAPP
    window.open(url, "_blank");

    // ✅ RESET FORM
    setFormData({
      name: '',
      phone: '',
      property: '',
      budget: '',
      requirement: '',
    });

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-20 bg-white">

      {/* 🔥 HERO */}
      <div className="text-center py-12 md:py-16 bg-red-50">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900">
          Book Free Interior Consultation
        </h1>
        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          Fill your details & send directly on WhatsApp
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* SUCCESS */}
        {isSubmitted && (
          <div className="mb-6 bg-green-100 text-green-700 p-4 rounded text-center text-sm">
            ✅ Opening WhatsApp with your enquiry...
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT INFO */}
          <div className="bg-white border p-6 rounded-xl shadow">

            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
              Why Choose Nivaasa?
            </h2>

            <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
              <li>✔ 50+ Interior Projects</li>
              <li>✔ Affordable Packages</li>
              <li>✔ Modern Designs</li>
              <li>✔ On-Time Delivery</li>
              <li>✔ Trusted Experts</li>
            </ul>

            <div className="mt-6 bg-red-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-900">
                📞 +91 90000 52351
              </p>
              <p className="text-sm text-gray-600">
                Quick response on WhatsApp
              </p>
            </div>

          </div>

          {/* FORM */}
          <div className="bg-white border p-6 rounded-xl shadow">

            <h2 className="text-lg md:text-xl font-bold mb-4 text-gray-900">
              Enter Your Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full border p-3 rounded focus:outline-none focus:border-red-500 text-sm"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full border p-3 rounded focus:outline-none focus:border-red-500 text-sm"
              />

              <select
                name="property"
                value={formData.property}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded text-sm"
              >
                <option value="">Property Type</option>
                <option>1 BHK</option>
                <option>2 BHK</option>
                <option>3 BHK</option>
                <option>Villa</option>
              </select>

              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded text-sm"
              >
                <option value="">Select Budget</option>
                <option>Below ₹2 Lakhs</option>
                <option>₹2–4 Lakhs</option>
                <option>₹4–6 Lakhs</option>
                <option>Above ₹6 Lakhs</option>
              </select>

              <textarea
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                placeholder="Tell your requirement..."
                rows={3}
                required
                className="w-full border p-3 rounded text-sm"
              />

              {/* 🔥 SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-red-600 transition"
              >
                Send on WhatsApp <Send size={18} />
              </button>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
};

export default EnquiryPage;