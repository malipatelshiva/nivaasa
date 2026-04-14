import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* 🔥 BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Interior Design"
      />

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* 🔥 GRADIENT OVERLAY (PREMIUM) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">

        {/* BRAND TAG */}
        <div className="flex justify-center items-center mb-3">
          <Sparkles className="text-red-500 mr-2" size={18} />
          <span className="text-red-500 text-xs sm:text-sm md:text-base font-semibold tracking-wide">
            Nivaasa Premium Interiors
          </span>
        </div>

        {/* MAIN HEADING */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Transform Your Home into a <br />
          <span className="text-red-500">
            Luxury Living Space
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-6 max-w-xl mx-auto">
          We design modern, elegant, and functional interiors tailored 
          to your lifestyle and budget.
        </p>

        {/* 🔥 CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">

          {/* CALL */}
          <a
            href="tel:+919000052351"
            className="w-full sm:w-auto bg-red-500 px-6 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-red-600 transition"
          >
            Call Now
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/919000052351?text=Hi%20I%20want%20interior%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-green-500 px-6 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-green-600 transition"
          >
            WhatsApp
          </a>

          {/* ENQUIRY */}
          <Link
            to="/enquiry"
            className="w-full sm:w-auto border border-white px-6 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-white hover:text-black transition"
          >
            Get Quote
          </Link>

        </div>

      </div>

      {/* 🔥 SCROLL INDICATOR */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-5 h-9 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white mt-2 rounded-full"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;