import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import PageTransition from './components/PageTransition';
import Journal from './components/Journal';
import CareerPlan from './components/CareerPlan';
import Certificates from './components/Certificates';

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-[#020617] flex flex-col items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements for Loader */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="relative">
            <div className="w-32 h-32 border-2 border-primary/20 rounded-full animate-[spin_3s_linear_infinite]"></div>
            <div className="absolute inset-0 w-32 h-32 border-t-2 border-primary rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-primary font-black text-3xl tracking-tighter">Livera</span>
            </div>
          </div>
          
          <motion.div 
            className="mt-12 overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-slate-400 font-display tracking-[0.4em] uppercase text-[10px] font-bold"
          >
            Decrypting Portfolio
          </motion.p>
        </motion.div>

        {/* Transition Panels (Reveal later) */}
        <motion.div 
          className="fixed inset-0 z-[100] bg-primary flex pointer-events-none"
          initial={{ scaleY: 0 }}
          animate={loading ? { scaleY: 0 } : { scaleY: 1 }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white cursor-none relative">
      <PageTransition />
      <CustomCursor />
      <ParticleBackground />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />

        <Skills />
        <Experience />
        <Projects />
        <Journal />
        <CareerPlan />
        <Certificates />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App;
