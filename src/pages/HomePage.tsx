import React from 'react';
import { Link } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';

// ✅ CLEAN IMAGE IMPORTS (MAKE SURE NAMES MATCH EXACTLY)
import bed1 from "../assets/bedroom2.jpeg";
import bed2 from "../assets/bedroom8.png";
import bed3 from "../assets/bedroom9.png";
import bed4 from "../assets/bedroom13.jpeg";
import bed5 from "../assets/bedroom14.jpeg";
import bed6 from "../assets/bedroom15.jpeg";
import bed7 from "../assets/bedroom16.jpeg";

const HomePage: React.FC = () => {

  const aboutImages = [bed1, bed2, bed3];
  const serviceImages = [bed4, bed5, bed6];
  const workImages = [bed1, bed3, bed5];
  const packageImages = [bed2, bed4, bed7];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* 🔥 HERO SECTION */}
      <section className="py-16 md:py-24 text-center">
        <div className="max-w-5xl mx-auto px-4">

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Transform Your Home into a
            <span className="block text-red-500 mt-2">
              Luxury Living Space
            </span>
          </h1>

          <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            Nivaasa Living Spaces delivers premium interior designs
            with elegance, comfort, and modern aesthetics.
          </p>

          <Link
            to="/enquiry"
            className="mt-6 inline-block w-full sm:w-auto bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Get Free Consultation
          </Link>

        </div>
      </section>

      {/* 🔥 TRUST SECTION */}
      <section className="bg-red-50 py-6 md:py-10 text-center">
        <h2 className="text-lg sm:text-xl md:text-3xl font-bold px-4">
          100+ Happy Clients | 50+ Projects Completed
        </h2>
      </section>

      {/* 🔥 MAIN SECTIONS */}
      <section className="space-y-6 md:space-y-10 px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        <Section
          title="About Nivaasa"
          description="Premium residential interiors with modern design and expert execution."
          images={aboutImages}
          linkTo="/about"
        />

        <Section
          title="Interior Services"
          description="Stylish and functional designs for every space."
          images={serviceImages}
          isReversed
          linkTo="/services"
        />

        <Section
          title="Our Interior Work"
          description="Luxury interior projects showcasing elegance."
          images={workImages}
          linkTo="/work"
        />

        <Section
          title="Interior Packages"
          description="Affordable and premium interior packages."
          images={packageImages}
          isReversed
          linkTo="/packages"
        />

      </section>

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

const Section: React.FC<SectionProps> = ({
  title,
  description,
  images,
  isReversed,
  linkTo
}) => {
  return (
    <div className="max-w-6xl mx-auto">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center bg-white border rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition">

        {/* 🔥 TEXT */}
        <div className={isReversed ? "md:order-2" : ""}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
            {title}
          </h2>

          <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
            {description}
          </p>

          <Link
            to={linkTo}
            className="block sm:inline-block text-center bg-red-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-600 transition"
          >
            Explore {title}
          </Link>
        </div>

        {/* 🔥 IMAGE FIX */}
        <div className={isReversed ? "md:order-1" : ""}>
          <div className="w-full h-[220px] sm:h-[260px] md:h-[320px] overflow-hidden rounded-xl">

            {/* IMPORTANT: Carousel should fill height */}
            <ImageCarousel images={images} />

          </div>
        </div>

      </div>

    </div>
  );
};

export default HomePage;