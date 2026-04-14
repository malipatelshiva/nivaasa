import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import PremiumBackground from './components/PremiumBackground'; // 👈 ADD THIS

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import PackagesPage from './pages/PackagesPage';
import ContactPage from './pages/ContactPage';
import EnquiryPage from './pages/EnquiryPage';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  return (
    <BrowserRouter>

      {/* 🔥 GLOBAL BACKGROUND */}
      <PremiumBackground />   {/* 👈 ADD HERE */}

      <div className="min-h-screen bg-transparent"> {/* 👈 CHANGE white → transparent */}
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
        </Routes>

        <Footer />
        <FloatingButtons />
      </div>

    </BrowserRouter>
  );
}

export default App;