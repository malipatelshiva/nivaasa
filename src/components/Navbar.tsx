import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/nivaasa.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Our Work', path: '/work' },
    { label: 'Packages', path: '/packages' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* 🔥 NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e1b4b]/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEIGHT FIX */}
          <div className="flex justify-between items-center h-14 sm:h-20">

            {/* LOGO */}
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="logo" className="h-9 sm:h-12" />
              <span className="text-white font-semibold text-sm sm:text-lg hidden sm:block">
                Nivaasa Living Spaces
              </span>
            </Link>

            {/* DESKTOP MENU (NO CHANGE) */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition font-medium ${
                    location.pathname === item.path
                      ? 'text-yellow-400'
                      : 'text-white hover:text-yellow-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/enquiry"
                className="bg-white text-[#1e1b4b] px-5 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
              >
                Enquiry Now
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>

          </div>
        </div>
      </nav>

      {/* 🔥 OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* 🔥 MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-[#1e1b4b] z-50 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <span className="text-white font-semibold text-base">Menu</span>

          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X className="text-white" size={24} />
          </button>
        </div>

        {/* MENU ITEMS */}
        <div className="flex flex-col px-5 py-6 space-y-5">

          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-base font-medium ${
                location.pathname === item.path
                  ? 'text-yellow-400'
                  : 'text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* CTA BUTTON */}
          <Link
            to="/enquiry"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-6 bg-white text-[#1e1b4b] text-center py-3 rounded-lg font-semibold"
          >
            Enquiry Now
          </Link>

        </div>
      </div>
    </>
  );
};

export default Navbar;