import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react';

const ContactPage: React.FC = () => {

  return (
    <div className="min-h-screen pt-20 bg-white">

      {/* 🔥 HERO */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Contact Nivaasa
          </h1>
          <p className="mt-2 text-gray-300 text-sm sm:text-base">
            Let’s design your dream home together
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* 🔥 CONTACT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          {/* CALL */}
          <a
            href="tel:+919000052351"
            className="bg-white border rounded-xl p-6 text-center shadow hover:shadow-lg transition"
          >
            <div className="bg-red-500 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-3">
              <Phone className="text-white" />
            </div>
            <h3 className="font-semibold">Call Us</h3>
            <p className="text-sm text-gray-600">+91 90000 52351</p>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/919000052351"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border rounded-xl p-6 text-center shadow hover:shadow-lg transition"
          >
            <div className="bg-green-500 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-3">
              <MessageCircle className="text-white" />
            </div>
            <h3 className="font-semibold">WhatsApp</h3>
            <p className="text-sm text-gray-600">+91 90000 52351</p>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:Nivaasa@gmail.com"
            className="bg-white border rounded-xl p-6 text-center shadow hover:shadow-lg transition"
          >
            <div className="bg-red-500 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-3">
              <Mail className="text-white" />
            </div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-sm text-gray-600">Nivaasa@gmail.com</p>
          </a>

          {/* MAP */}
          <a
            href="https://maps.google.com/?q=Kompally,Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border rounded-xl p-6 text-center shadow hover:shadow-lg transition"
          >
            <div className="bg-red-500 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-3">
              <MapPin className="text-white" />
            </div>
            <h3 className="font-semibold">Location</h3>
            <p className="text-sm text-gray-600">Kompally, Hyderabad</p>
          </a>

        </div>

        {/* 🔥 FORM + DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* FORM */}
          <div className="bg-white border p-6 rounded-xl shadow">

            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Send Your Requirement
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-3 rounded focus:outline-none focus:border-red-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border p-3 rounded focus:outline-none focus:border-red-500"
              />

              <textarea
                placeholder="Tell us about your interior requirement..."
                rows={4}
                className="w-full border p-3 rounded focus:outline-none focus:border-red-500"
              />

              {/* WHATSAPP CTA */}
              <a
                href="https://wa.me/919000052351?text=Hi%20I%20need%20interior%20service"
                target="_blank"
                className="block w-full bg-red-500 text-white py-3 rounded font-semibold text-center hover:bg-red-600 transition"
              >
                Send on WhatsApp
              </a>

            </form>
          </div>

          {/* DETAILS */}
          <div className="bg-gray-50 p-6 rounded-xl shadow">

            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Contact Details
            </h2>

            <div className="space-y-4 text-sm sm:text-base">

              <a href="tel:+919000052351" className="flex gap-3 items-center">
                <Phone className="text-red-500" />
                <span>+91 90000 52351</span>
              </a>

              <a href="mailto:Nivaasa@gmail.com" className="flex gap-3 items-center">
                <Mail className="text-red-500" />
                <span>Nivaasa@gmail.com</span>
              </a>

              <div className="flex gap-3 items-start">
                <MapPin className="text-red-500" />
                <p>
                  Flat No 102, Cheela Life Space,<br />
                  Kompally, Hyderabad
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <Clock className="text-red-500" />
                <span>10:00 AM – 9:00 PM</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;