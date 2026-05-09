import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

const projects = [
  {
    title: 'Hospital_Management System',
    category: 'Full Stack',
    image: 'https://www.image2url.com/r2/default/images/1778096485060-ee14a15b-3dd2-4a28-8e8b-9bb6d45f81aa.png',
    tech: ['JavaScript', 'HTML', 'CSS', 'React', 'MongoDB', 'Node.js', 'Express',],
    description: 'A high-performance dashboard for managing online stores, featuring real-time analytics and inventory tracking.',
    github: 'https://github.com/Salila-Livera/Hospital_Management'
  },
  {
    title: 'Pet care Management System(Vetcare)',
    category: 'Web App',
    image: 'project2.png',
    tech: ['React JS', 'JavaScript', 'HTML', 'CSS', 'Node js', 'Express', 'MongoDB'],
    description: 'A centralized platform for pet owners to manage veterinary services, browse products, and access community care resources.',
    live: '#',
    github: '#'
  }
];

const categories = ['All', 'Full Stack', 'Web App'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl mb-4 text-center md:text-left"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            <p className="text-slate-400 max-w-xl text-center md:text-left">
              Selection of my favorite works. Each project is built with passion and attention to detail.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary text-dark shadow-lg shadow-primary/30' 
                    : 'glass text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group glass rounded-3xl overflow-hidden relative"
              >
                {/* Project Image */}
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.live} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-white text-dark rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Eye size={24} />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center border border-white/20 hover:bg-white hover:text-dark transition-colors"
                    >
                      <Github size={24} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 sm:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-primary text-xs uppercase tracking-widest font-bold mb-2 block">{project.category}</span>
                      <h3 className="text-2xl text-white group-hover:text-primary transition-colors">{project.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
