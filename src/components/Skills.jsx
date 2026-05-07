import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Layout, Server, Wrench, Terminal, Cpu, Globe } from 'lucide-react';

const SKILLS = [
  // Backend (Java/Spring focus)
  { name: 'Spring Boot', level: 95, category: 'Backend', icon: '🍃', color: '#6db33f' },
  { name: 'Spring Framework', level: 92, category: 'Backend', icon: '🌱', color: '#6db33f' },
  { name: 'Java', level: 95, category: 'Backend', icon: '☕', color: '#007396' },
  { name: 'REST APIs', level: 98, category: 'Backend', icon: '📡', color: '#10b981' },
  { name: 'Spring MVC', level: 88, category: 'Backend', icon: '🏗️', color: '#6db33f' },
  { name: 'MySQL', level: 90, category: 'Backend', icon: '🐬', color: '#00758f' },
  { name: 'Redis', level: 82, category: 'Backend', icon: '⚡', color: '#d82c20' },
  { name: 'Flyway', level: 85, category: 'Backend', icon: '🚀', color: '#cc0202' },

  // Frontend & Full-Stack
  { name: 'React.js', level: 90, category: 'Frontend', icon: '⚛️', color: '#61dafb' },
  { name: 'Node.js', level: 85, category: 'Frontend', icon: '🟢', color: '#339933' },
  { name: 'Full-Stack Dev', level: 92, category: 'Frontend', icon: '💻', color: '#10b981' },
  { name: 'Back-End Dev', level: 95, category: 'Frontend', icon: '⚙️', color: '#06b6d4' },

  // Core & DevOps
  { name: 'Docker', level: 80, category: 'Tools', icon: '🐳', color: '#2496ed' },
  { name: 'Git', level: 95, category: 'Tools', icon: '🐙', color: '#f05032' },
  { name: 'GitHub', level: 92, category: 'Tools', icon: '🐙', color: '#ffffff' },
  { name: 'C++', level: 75, category: 'Tools', icon: '⚙️', color: '#00599c' },
  { name: 'OOP', level: 95, category: 'Tools', icon: '🧩', color: '#10b981' },
  { name: 'Exception Handling', level: 90, category: 'Tools', icon: '⚠️', color: '#f43f5e' },
  { name: 'Pagination', level: 85, category: 'Tools', icon: '📄', color: '#3b82f6' },
  { name: 'SLF4J', level: 80, category: 'Tools', icon: '📝', color: '#10b981' },
  { name: 'Version Control', level: 95, category: 'Tools', icon: '🔀', color: '#f05032' },
];

const categories = [
  { id: 'All', icon: Globe },
  { id: 'Backend', icon: Server },
  { id: 'Frontend', icon: Layout },
  { id: 'Tools', icon: Wrench },
];

const SkillNode = ({ skill, mouseX, mouseY }) => {
  const nodeRef = useRef(null);
  
  // Magnetic effect logic
  const springConfig = { damping: 20, stiffness: 200 };
  const tx = useSpring(useMotionValue(0), springConfig);
  const ty = useSpring(useMotionValue(0), springConfig);

  const handleMouseMove = (e) => {
    if (!nodeRef.current) return;
    const rect = nodeRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Magnetic pull strength
    const strength = 40; 
    tx.set(distanceX / strength);
    ty.set(distanceY / strength);
  };

  const handleMouseLeave = () => {
    tx.set(0);
    ty.set(0);
  };

  // Visuals based on skill level
  const size = 65 + (skill.level - 70) * 1.5; 
  const glowIntensity = (skill.level - 70) / 30; 

  return (
    <motion.div
      ref={nodeRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      layout
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        y: [0, -10, 0],
        rotate: [0, 2, -2, 0]
      }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{
        scale: { duration: 0.5 },
        opacity: { duration: 0.5 },
        y: {
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut"
        },
        rotate: {
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      whileHover={{ scale: 1.1, zIndex: 10 }}
      style={{ x: tx, y: ty }}
      className="relative flex items-center justify-center cursor-pointer group"
    >
      <div 
        className="absolute inset-0 rounded-full blur-xl transition-all duration-500 group-hover:blur-2xl"
        style={{ 
          backgroundColor: skill.color,
          opacity: 0.15 + glowIntensity * 0.2,
          transform: `scale(${1 + glowIntensity * 0.5})`
        }}
      />

      <div 
        className="relative glass rounded-full flex flex-col items-center justify-center border-white/10 group-hover:border-white/30 transition-colors overflow-hidden"
        style={{ width: size, height: size }}
      >
        <span className="text-2xl mb-1">{skill.icon}</span>
        <span className="text-[9px] font-black uppercase tracking-tighter text-white opacity-80 text-center px-2">{skill.name}</span>
        
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: `${skill.level}%` }}
          className="absolute bottom-0 left-0 w-full bg-white/5 pointer-events-none"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: -20 }}
        className="absolute -top-12 left-1/2 -translate-x-1/2 glass px-3 py-1 rounded-lg border-white/20 whitespace-nowrap z-20 pointer-events-none"
      >
        <span className="text-xs font-bold text-white">{skill.level}% Mastery</span>
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const containerRef = useRef(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / 25;
    const y = (clientY - innerHeight / 2) / 25;
    mouseX.set(x);
    mouseY.set(y);
  };

  const filteredSkills = useMemo(() => {
    return activeCategory === 'All' 
      ? SKILLS 
      : SKILLS.filter(s => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <section 
      id="skills" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="section-padding relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto relative z-10 px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          
          <div className="w-full md:w-1/3 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8"
            >
              <Terminal size={12} />
              Technical Core
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Skill <br />
              <span className="text-gradient">Galaxy</span>
            </h2>

            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              My technical expertise focuses on building robust enterprise applications with Java, Spring Boot, and modern web technologies.
            </p>

            <div className="flex flex-col sm:flex-row md:flex-col gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 ${
                    activeCategory === cat.id 
                      ? 'bg-primary text-dark font-bold' 
                      : 'glass border-white/5 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <cat.icon size={18} />
                    <span className="text-sm uppercase tracking-widest font-bold">{cat.id}</span>
                  </div>
                  {activeCategory === cat.id && (
                    <motion.div layoutId="active-dot" className="w-2 h-2 bg-dark rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            style={{ x: smoothX, y: smoothY }}
            className="w-full md:w-2/3 min-h-[400px] md:min-h-[600px] relative flex items-center justify-center"
          >
            <div className="absolute w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-2xl relative z-10">
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill) => (
                  <SkillNode key={skill.name} skill={skill} mouseX={mouseX} mouseY={mouseY} />
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>


    </section>
  );
};

export default Skills;
