import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Link } from 'react-scroll';

const roles = [
  "Software Engineer",
  "Mobile App Developer",
  "UI/UX Developer"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5 text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></span>
              <span className="text-sm font-medium text-slate-300 uppercase tracking-widest">Available for opportunities</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1]">
              Hi, I'm <br />
              <span className="text-gradient">Salila</span> Livera
            </h1>

            <div className="h-12 mb-8 flex items-center gap-4">
              <div className="text-2xl md:text-3xl text-slate-400 font-mono overflow-hidden flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="block whitespace-nowrap"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
                <span className="ml-4 h-0.5 w-12 bg-primary/50 hidden md:block"></span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
              Crafting elegant solutions to complex problems. I build modern, scalable applications that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 sm:gap-6 mb-12">
              <Link to="projects" smooth={true} duration={500} className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-dark font-black px-8 py-4 rounded-2xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                >
                  View My Work
                </motion.button>
              </Link>
              
              <a href="/Resume.pdf" download className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  Resume
                </motion.button>
              </a>

              <Link to="contact" smooth={true} duration={500} className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 rounded-2xl border border-primary/50 text-primary font-bold hover:bg-primary/5 transition-all"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>

            <div className="flex items-center gap-6">
              {[
                { Icon: Github, href: 'https://github.com/Salila-Livera' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/salila-livera' },
                { Icon: Mail, href: "mailto:salliladimuthu2002@gmail.com" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 transition-all"
                >
                  <social.Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Circular Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -20, 0] 
            }}
            transition={{ 
              opacity: { duration: 1 },
              scale: { duration: 1 },
              y: { 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="flex w-full lg:w-2/5 justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96">
              {/* Neon Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent p-[3px] animate-[spin_10s_linear_infinite]">
                <div className="w-full h-full rounded-full bg-dark"></div>
              </div>
              
              {/* Profile Image Container */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-white/5 bg-dark-lighter">
                <img 
                  src="avatar.png" 
                  alt="Salila Livera" 
                  className="w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Decorative Glow Dot */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-10 right-10 w-6 h-6 bg-primary rounded-full blur-md"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2 cursor-pointer hidden md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
