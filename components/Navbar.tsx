import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLinkProps {
  to: string;
  children?: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="relative text-white/90 hover:text-white font-medium transition-colors group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-japanRed transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link to={to} className="text-lg text-white/80 hover:text-sakuraPink transition-colors">
      {children}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-japanDark/95 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-display font-bold flex items-center gap-2 group">
          <span className="text-japanRed group-hover:scale-110 transition-transform duration-300">
            <MapPin className="fill-japanRed text-japanRed" />
          </span>
          <span className="tracking-tighter text-white">NIHON<span className="text-sakuraPink">TRAVEL</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tours">Tours</NavLink>
          <NavLink to="/#about">About</NavLink>
          <Link
            to="/tours"
            className="px-6 py-2 bg-japanRed hover:bg-red-700 text-white font-medium rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_15px_rgba(215,0,38,0.5)]"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-japanDark border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              <MobileNavLink to="/">Home</MobileNavLink>
              <MobileNavLink to="/tours">All Tours</MobileNavLink>
              <MobileNavLink to="/#about">About Us</MobileNavLink>
              <Link
                to="/tours"
                className="w-full text-center py-3 bg-japanRed text-white font-bold rounded-lg mt-4"
              >
                Plan Your Trip
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;