import React from 'react';
import { Link } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';

// ✅ IMAGES
import bedroom1 from "../assets/bedroom.jpg";
import bedroom2 from "../assets/bedroom1.png";
import bedroom3 from "../assets/bedroom2.jpeg";
import bedroom4 from "../assets/bedroom3.png";
import bedroom5 from "../assets/bedroom4.jpeg";
import bedroom6 from "../assets/bedroom5.jpeg";
import bedroom7 from "../assets/bedroom6.jpeg";

const HomePage: React.FC = () => {

  const aboutImages = [bedroom1, bedroom2, bedroom3];
  const serviceImages = [bedroom4, bedroom5, bedroom6];
  const workImages = [bedroom1, bedroom3, bedroom5];
  const packageImages = [bedroom2, bedroom4, bedroom7];

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* 🔥 HERO */}
      <div className="bg-white py-16 md:py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">
            Transform Your Home into a
            <span className="block text-red-500">
              Luxury Living Space
            </span>
          </h1>

          <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm sm:text-base md:text-lg">
            Nivaasa Living Spaces delivers premium residential interiors 
            with elegance and comfort.
          </p>

          <Link
            to="/enquiry"
            className="w-full sm:w-auto inline-block bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Get Free Consultation
          </Link>

        </div>
      </div>

      {/* 🔥 TRUST */}
      <div className="text-center py-6 md:py-10 bg-red-50">
        <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-gray-900 px-4">
          100+ Happy Clients | 50+ Projects Completed
        </h2>
      </div>

      {/* 🔥 SECTIONS */}
      <div className="space-y-6 md:space-y-10 px-4 sm:px-6 lg:px-8 py-6 md:py-10">

        <Section title="About Nivaasa" description="Premium residential interiors with modern design and expert execution." images={aboutImages} linkTo="/about" />

        <Section title="Interior Services" description="Stylish and functional designs for every space." images={serviceImages} isReversed linkTo="/services" />

        <Section title="Our Interior Work" description="Luxury interior projects showcasing elegance." images={workImages} linkTo="/work" />

        <Section title="Interior Packages" description="Affordable and premium interior packages." images={packageImages} isReversed linkTo="/packages" />

      </div>

    </div>
  );
};

type SectionProps = {
  title: string;
  description: string;
  images: string[];
  isReversed?: boolean;
  linkTo: string;
};

const Section: React.FC<SectionProps> = ({ title, description, images, isReversed, linkTo }) => {
  return (
    <div className="max-w-7xl mx-auto">

      {/* 🔥 FIXED GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition">

        {/* TEXT */}
        <div className={isReversed ? "md:order-2" : ""}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            {title}
          </h2>

          <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
            {description}
          </p>

          <Link
            to={linkTo}
            className="inline-block w-full sm:w-auto text-center bg-red-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-600 transition"
          >
            Explore {title}
          </Link>
        </div>

        {/* 🔥 IMAGE FIX (IMPORTANT) */}
        <div className={`${isReversed ? "md:order-1" : ""}`}>
          <div className="rounded-xl overflow-hidden shadow-md h-[200px] sm:h-[250px] md:h-[300px]">

            {/* 👉 FIX: Force height for carousel */}
            <ImageCarousel images={images} />

          </div>
        </div>

      </div>

    </div>
  );
};

export default HomePage;