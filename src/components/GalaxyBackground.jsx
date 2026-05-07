import React, { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const GalaxyBackground = () => {
  const containerRef = useRef(null);
  
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the parallax movement
  const springConfig = { damping: 50, stiffness: 400 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Map mouse position to a range (e.g., -50 to 50)
    const x = (clientX - innerWidth / 2) / 20;
    const y = (clientY - innerHeight / 2) / 20;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Generate stars once
  const stars = useMemo(() => {
    return [...Array(150)].map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 3 + Math.random() * 7,
      delay: Math.random() * 5,
      depth: Math.random() * 1.5 + 0.5, // Parallax depth multiplier
      color: Math.random() > 0.8 ? '#10b981' : '#ffffff' // Occasional green stars
    }));
  }, []);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="fixed inset-0 pointer-events-auto z-[-1] overflow-hidden bg-dark"
    >
      {/* Background Nebulas */}
      <motion.div
        style={{
          x: useTransform(smoothX, (v) => v * -0.5),
          y: useTransform(smoothY, (v) => v * -0.5),
        }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[150px] mix-blend-screen"
      />
      <motion.div
        style={{
          x: useTransform(smoothX, (v) => v * -0.8),
          y: useTransform(smoothY, (v) => v * -0.8),
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[180px] mix-blend-screen"
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>

      {/* Galaxy Starfield */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.x}%`,
              top: `${star.y}%`,
              backgroundColor: star.color,
              x: useTransform(smoothX, (v) => v * star.depth),
              y: useTransform(smoothY, (v) => v * star.depth),
              boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay
            }}
          />
        ))}
      </div>

      {/* Subtle Mouse Following Glow */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"
        style={{
          left: -200,
          top: -200,
          x: useMotionValue(0), // This will be updated by handleMouseMove
          y: useMotionValue(0),
        }}
      />
    </div>
  );
};

export default GalaxyBackground;
