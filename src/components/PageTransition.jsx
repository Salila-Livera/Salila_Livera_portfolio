import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100] flex">
      {/* Three vertical panels that slide up at different speeds */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{
            duration: 1,
            ease: [0.645, 0.045, 0.355, 1], // Cubic-bezier for smooth reveal
            delay: i * 0.1
          }}
          className="h-full flex-1 bg-primary origin-top"
        />
      ))}
    </div>
  );
};

export default PageTransition;
