import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Exp & Edu', to: 'journey' },
  { name: 'Journal', to: 'journal' },
  { name: 'Career', to: 'career' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-dark/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-black text-white tracking-tighter"
        >
          <Link to="home" smooth={true} className="cursor-pointer">
            <span className="text-gradient">Livera</span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 px-6 py-2 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-primary font-bold"
                className="text-slate-400 hover:text-white cursor-pointer transition-all font-medium text-xs uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <Link to="contact" smooth={true} duration={500}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-secondary text-dark px-8 py-2.5 rounded-full font-bold text-sm transition-all"
            >
              Let's Talk
            </motion.button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-screen bg-dark/98 backdrop-blur-xl z-[60] md:hidden flex flex-col"
          >
            <div className="flex justify-between items-center px-6 py-8 border-b border-white/5">
              <span className="text-2xl font-display font-black text-gradient">Livera</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white p-2 glass rounded-full"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col justify-center items-center flex-grow gap-8 p-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-slate-400 hover:text-primary transition-colors text-3xl font-black uppercase tracking-tighter"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="w-full max-w-xs mt-8"
              >
                <Link to="contact" smooth={true} onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full bg-gradient-to-r from-primary to-secondary text-dark px-12 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-primary/20">
                    Let's Talk
                  </button>
                </Link>
              </motion.div>
            </div>

            <div className="p-8 border-t border-white/5 text-center">
              <p className="text-slate-500 text-sm font-medium tracking-widest uppercase">Salila Livera Portfolio</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
