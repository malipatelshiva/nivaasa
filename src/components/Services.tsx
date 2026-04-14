import { Sofa, ChefHat, Bed, Home, Armchair } from 'lucide-react';
import { motion } from 'framer-motion';

// ✅ IMPORT YOUR REAL IMAGES
import img1 from "../assets/bedroom.jpg";
import img2 from "../assets/bedroom1.png";
import img3 from "../assets/bedroom2.jpeg";
import img4 from "../assets/bedroom3.png";
import img5 from "../assets/bedroom4.jpeg";

// ✅ TYPE (TYPESCRIPT)
type Service = {
  icon: any;
  title: string;
  desc: string;
  img: string;
};

const ServicesPage: React.FC = () => {

  const services: Service[] = [
    {
      icon: Sofa,
      title: 'Living Room Design',
      desc: 'Elegant and stylish designs to create a welcoming space for your family and guests.',
      img: img1
    },
    {
      icon: ChefHat,
      title: 'Modular Kitchen',
      desc: 'Smart kitchen layouts with modern storage solutions and premium finishes.',
      img: img2
    },
    {
      icon: Bed,
      title: 'Bedroom Interiors',
      desc: 'Comfortable and aesthetic bedroom designs that promote relaxation and rest.',
      img: img3
    },
    {
      icon: Home,
      title: 'Full Home Interiors',
      desc: 'Complete interior solutions from design to execution for your entire home.',
      img: img4
    },
    {
      icon: Armchair,
      title: 'Furniture & Decor',
      desc: 'Custom furniture and decor pieces for a premium and personalized look.',
      img: img5
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">

      {/* 🔥 HERO SECTION */}
      <div className="relative h-[60vh] flex items-center justify-center text-white">

        {/* BACKGROUND IMAGE */}
        <img
          src={img1}
          className="absolute w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* CONTENT */}
        <div className="relative text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
            Premium Interior Services
          </h1>

          <p className="mt-3 text-gray-300 text-sm md:text-lg max-w-xl mx-auto">
            Transform your home with modern, elegant, and functional interior designs
          </p>

          <button className="mt-5 bg-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition">
            Get Free Consultation
          </button>
        </div>

      </div>

      {/* 🔥 SERVICES GRID */}
      <div className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                <img
                  src={service.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* ICON */}
                <div className="absolute top-4 left-4 bg-red-500 p-3 rounded-xl shadow-lg">
                  <service.icon className="text-white" size={24} />
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 bg-white">

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* BUTTON */}
                <button className="mt-4 bg-red-500 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition w-full">
                  Enquire Now
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default ServicesPage;