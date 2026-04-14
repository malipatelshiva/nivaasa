import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/nivaasa.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t">

      <div className="max-w-7xl mx-auto px-4 py-14">

        {/* 🔥 TOP SECTION */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* LOGO + BRAND */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="logo" className="h-12" />
              <div>
                <h2 className="font-bold text-lg text-gray-900">
                  Nivaasa Living Spaces
                </h2>
                <p className="text-sm text-gray-500">
                  Premium Interior Designers
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              We design elegant, modern, and functional living spaces 
              tailored to your lifestyle and comfort.
            </p>
          </div>

          {/* SITEMAP */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/" className="hover:text-red-500">Home</Link></li>
              <li><Link to="/about" className="hover:text-red-500">About</Link></li>
              <li><Link to="/services" className="hover:text-red-500">Services</Link></li>
              <li><Link to="/work" className="hover:text-red-500">Our Work</Link></li>
              <li><Link to="/contact" className="hover:text-red-500">Contact</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Contact</h3>

            {/* EMAIL */}
            <a
              href="mailto:Nivaasa@gmail.com"
              className="flex items-center gap-2 text-gray-600 hover:text-red-500 mb-2"
            >
              <Mail size={16} /> 
              Nivaasa@gmail.com
            </a>

            {/* PHONE */}
            <a
              href="tel:+919000052351"
              className="flex items-center gap-2 text-gray-600 hover:text-red-500 mb-2"
            >
              <Phone size={16} />
              +91 90000 52351
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919000052351?text=Hi%20I%20want%20interior%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600 transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* ADDRESS */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Address</h3>

            <p className="flex items-start gap-2 text-gray-600 leading-relaxed">
              <MapPin size={16} className="mt-1" />
              Flat No 102, Cheela Life Space,<br />
              Jayaberi Park Road, Kompally,<br />
              Hyderabad
            </p>
          </div>

        </div>

        {/* 🔥 CTA SECTION (UPDATED) */}
        <div className="mt-12 text-center bg-red-50 py-6 rounded-xl">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Ready to Design Your Dream Home?
          </h2>

          <div className="mt-4 flex justify-center gap-4 flex-wrap">

            {/* CALL BUTTON */}
            <a
              href="tel:+919000052351"
              className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Call Now
            </a>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/919000052351?text=Hi%20I%20want%20interior%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              WhatsApp
            </a>

          </div>
        </div>

        {/* 🔥 BOTTOM */}
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © 2026 Nivaasa Living Spaces. All Rights Reserved.
          </p>

          {/* SOCIAL */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">

            <span className="text-gray-500 text-sm">Follow us</span>

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com/nivaasa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 p-2 rounded hover:bg-pink-500 hover:text-white transition"
            >
              <Instagram size={16} />
            </a>

            {/* FACEBOOK */}
            <a
              href="https://facebook.com/nivaasa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 p-2 rounded hover:bg-blue-600 hover:text-white transition"
            >
              <Facebook size={16} />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;