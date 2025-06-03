import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import useThemeStore from "../../store/themeStore.js";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useThemeStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/experience", label: "Experience" },
    { path: "/contact", label: "Contact" },
    { path: "/blog", label: "Blog" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/40 dark:bg-dark-100/80 backdrop-blur shadow-lg"
          : "bg-transparent"
      }${darkMode ? "dark bg-black text-white" : "bg-white text-gray-900"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary-500">
            RohitDudi
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${
                  location.pathname === link.path
                    ? "text-primary-500 dark:text-primary-400"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="rounded-lg p-2 hover:bg-gray-500 transition-colors duration-200"
            >
              {darkMode ? (
                <FiSun
                  className={`w-5 h-5 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                />
              ) : (
                <FiMoon
                  className={`w-5 h-5 ${
                    darkMode ? "dark text-white" : " text-gray-900"
                  }`}
                />
              )}
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className={`${
                darkMode
                  ? "dark bg-black hover:bg-gray-800"
                  : "bg-white text-gray-900 hover:bg-gray-300"
              } p-2 mr-2 rounded-lg   transition-colors duration-200`}
            >
              {darkMode ? (
                <FiSun className={`w-6 h-6 "text-gray-900"}`} />
              ) : (
                <FiMoon
                  className={`w-6 h-6 ${
                    darkMode ? "text-white" : " text-gray-900"
                  }`}
                />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                darkMode
                  ? "dark bg-black hover:bg-gray-800"
                  : "bg-white text-gray-900 hover:bg-gray-300"
              } p-2 mr-2 rounded-lg   transition-colors duration-200`}
            >
              {isOpen ? (
                <FiX
                  className={`w-6 h-6 ${
                    darkMode ? " text-white" : " text-gray-900"
                  }`}
                />
              ) : (
                <FiMenu
                  className={`w-6 h-6 ${
                    darkMode ? "text-white" : " text-gray-900"
                  }`}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-dark-100 shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? "text-primary-500 dark:text-primary-400 bg-gray-100 dark:bg-dark-200"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-200"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
