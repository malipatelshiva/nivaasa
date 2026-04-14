import { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { motion } from 'framer-motion';

// ✅ IMPORT YOUR REAL IMAGES
import img1 from "../assets/bedroom16.jpeg";
import img2 from "../assets/bedroom15.jpeg";
import img3 from "../assets/bedroom16.jpeg";
import img4 from "../assets/bedroom13.jpeg";
import img5 from "../assets/bedroom8.png";
import img6 from "../assets/bedroom10.jpeg";

const WorkPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // ✅ USE LOCAL IMAGES
  const projects = [
    { title: 'Luxury Living Room', category: 'Living Room', image: img1, before: img2 },
    { title: 'Modern Kitchen', category: 'Kitchen', image: img2, before: img3 },
    { title: 'Premium Bedroom', category: 'Bedroom', image: img3, before: img4 },
    { title: 'Dining Area', category: 'Dining', image: img4, before: img5 },
    { title: 'Wardrobe Design', category: 'Wardrobe', image: img5, before: img6 },
    { title: 'TV Unit Design', category: 'TV Unit', image: img6, before: img1 }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">

      {/* 🔥 HERO */}
      <div className="relative h-[60vh] flex items-center justify-center text-white">

        <img src={img1} className="absolute w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Our Interior Works
          </h1>
          <p className="mt-3 text-gray-300">
            Explore our premium interior transformations
          </p>
        </div>

      </div>

      {/* 🔥 GRID */}
      <div className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >

              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">

                {/* IMAGE */}
                <img
                  src={project.image}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* HOVER */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <ZoomIn className="text-white" size={32} />
                </div>

                {/* TEXT */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {project.category}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

      {/* 🔥 MODAL */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-4 text-2xl"
            >
              ×
            </button>

            {/* TITLE */}
            <h2 className="text-2xl font-bold mb-6 text-center">
              {projects[selectedImage].title}
            </h2>

            {/* BEFORE / AFTER */}
            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <p className="font-semibold mb-2 text-gray-600">Before</p>
                <img src={projects[selectedImage].before} className="rounded-lg" />
              </div>

              <div>
                <p className="font-semibold mb-2 text-gray-600">After</p>
                <img src={projects[selectedImage].image} className="rounded-lg" />
              </div>

            </div>

            <p className="text-center mt-6 text-gray-600">
              Category: <span className="font-semibold text-red-500">
                {projects[selectedImage].category}
              </span>
            </p>

          </div>
        </div>
      )}

    </div>
  );
};

export default WorkPage;