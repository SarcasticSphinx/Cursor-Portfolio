import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaCode,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMobileMenuOpen &&
        !e.target.closest(".mobile-menu") &&
        !e.target.closest(".menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const navItems = [
    { path: "/", icon: <FaHome />, text: "Home" },
    { path: "/about", icon: <FaUser />, text: "About" },
    { path: "/projects", icon: <FaCode />, text: "Projects" },
    { path: "/contact", icon: <FaEnvelope />, text: "Contact" },
  ];

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 24,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 35,
      },
    },
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900/80 backdrop-blur rounded-full text-yellow-500 hover:text-yellow-400 transition-colors menu-button"
      >
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-24 bg-gray-900/80 backdrop-blur z-40 flex-col items-center justify-center">
        <div className="space-y-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative group flex flex-col items-center"
              >
                <div
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "text-yellow-500 bg-yellow-500/10"
                      : "text-gray-400 hover:text-yellow-500"
                  }`}
                >
                  <div className="text-2xl">{item.icon}</div>
                </div>
                <span className="absolute left-24 px-3 py-1 bg-gray-900 text-yellow-500 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm">
                  {item.text}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-yellow-500/10 rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="lg:hidden fixed left-0 top-0 h-screen w-64 bg-gray-900/95 backdrop-blur z-30 flex flex-col items-start justify-center px-6 mobile-menu"
          >
            <div className="w-full space-y-6">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-300 w-full ${
                      isActive
                        ? "text-yellow-500 bg-yellow-500/10"
                        : "text-gray-400 hover:text-yellow-500 hover:bg-yellow-500/5"
                    }`}
                  >
                    <div className="text-xl">{item.icon}</div>
                    <span className="text-lg">{item.text}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeMobileTab"
                        className="absolute inset-0 bg-yellow-500/10 rounded-lg"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
