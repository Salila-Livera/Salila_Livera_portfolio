import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Hide cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsVisible(false);
      return;
    }

    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleHover = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a');
      
      setIsHovered(isClickable);
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Crosshair */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div 
          animate={{ scale: isHovered ? 1.5 : 1, rotate: isHovered ? 45 : 0 }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <div className="absolute w-full h-[2px] bg-primary rounded-full" />
          <div className="absolute h-full w-[2px] bg-primary rounded-full" />
          <div className="w-1 h-1 bg-white rounded-full z-10 shadow-[0_0_10px_#10b981]" />
        </motion.div>
      </motion.div>
      
      {/* Rotating Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-primary/30 border-dashed rounded-full pointer-events-none z-[9998]"
        animate={{
          scale: isClicked ? 0.8 : isHovered ? 1.8 : 1,
          rotate: 360,
          borderColor: isHovered ? 'rgba(16, 185, 129, 0.8)' : 'rgba(16, 185, 129, 0.3)',
        }}
        transition={{
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
          scale: { duration: 0.2 },
          borderColor: { duration: 0.2 }
        }}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {/* Glow behind the ring */}
        <div className="absolute inset-0 bg-primary/5 rounded-full blur-md" />
      </motion.div>

      {/* Floating Sparkle on Click */}
      {isClicked && (
        <motion.div
          className="fixed top-0 left-0 w-16 h-16 bg-primary/20 rounded-full blur-2xl pointer-events-none z-[9997]"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;
