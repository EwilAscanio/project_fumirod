import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="text-2xl font-bold text-primary">
            Fumirod C.A.
          </a>

          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className={`hover:text-primary transition duration-300 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Home
            </a>
            <a
              href="#services"
              className={`hover:text-primary transition duration-300 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Services
            </a>
            <a
              href="#about"
              className={`hover:text-primary transition duration-300 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              About
            </a>
            <a
              href="#contact"
              className={`hover:text-primary transition duration-300 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Contact
            </a>
            <ThemeToggle />
          </div>

          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white py-4"
          >
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
