import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { EMAIL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (!isHome) {
      // If not on home, let the Link to="/" handle navigation, 
      // utilizing a hash in the URL or manual scroll logic could be added here
      // but for simplicity in this structure, we rely on user manually scrolling 
      // or hash links if we were using standard anchors. 
      // Since we are using React Router, we'll just navigate to home.
      return; 
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Resume', href: '#resume' }, // Placeholder for resume link
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tighter text-white z-50">
          Shivjeet<span className="text-indigo-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {isHome ? (
             navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href.substring(1))}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </button>
            ))
          ) : (
             <Link to="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
               Back to Home
             </Link>
          )}
          
          <a
            href={`mailto:${EMAIL}`}
            className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-400 hover:text-white z-50"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-zinc-950 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {isHome ? navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href.substring(1))}
                className="text-2xl font-medium text-zinc-300 hover:text-white"
              >
                {link.name}
              </button>
            )) : (
              <Link to="/" onClick={() => setIsOpen(false)} className="text-2xl font-medium text-zinc-300 hover:text-white">
                Home
              </Link>
            )}
            <a
              href={`mailto:${EMAIL}`}
              className="text-2xl font-bold text-indigo-500 mt-4"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;