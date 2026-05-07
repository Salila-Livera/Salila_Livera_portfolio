import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    role: 'Software Engineer Intern',
    company: 'ZeroCode Software',
    period: 'Dec 2025 - Present (6 months)',
    location: 'Kothalawala, Sri Lanka',
    description: 'Worked as a Software Engineer Intern building IT solutions including web applications, mobile applications, and portfolio websites. Involved in designing, developing, and deploying end-to-end systems with a strong focus on performance, scalability, and modern UI/UX.',
  },
  {
    type: 'education',
    role: 'B.Sc. (Hons) in Information Technology',
    company: 'Sri Lanka Institute of Information Technology',
    period: '2023 - present',
    location: 'Malabe, Sri Lanka',
    description: 'Currently pursuing a BSc (Hons) with a specialization in Information Technology at SLIIT, focusing on software engineering, algorithms, and artificial intelligence, with an emphasis on practical applications and innovative problem-solving.',
  },
  {
    type: 'education',
    role: 'G.C.E. Advanced Level Examination',
    company: 'Lumbini College, Colombo 05',
    period: '2021 - 2022',
    location: 'Colombo, Sri Lanka',
    description: 'Completed the G.C.E. Advanced Level at Lumbini College, Colombo 05, in the Technology Stream, achieving strong academic results.',
  },
  {
    type: 'education',
    role: 'G.C.E. Ordinary Level Examination',
    company: "St. John's College, Nugegoda",
    period: '2017 - 2018',
    location: 'Nugegoda, Sri Lanka',
    description: 'Completed the G.C.E. Ordinary Level at St. John\'s College, Nugegoda, achieving strong academic results.',
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');

  const filteredItems = experiences.filter(exp => exp.type === activeTab);

  return (
    <section id="journey" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4"
          >
            My Journey
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Experience & <span className="text-[#a855f7]">Education</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            A timeline of my professional journey and educational background.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-primary to-[#a855f7]"></div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 sm:gap-6 mb-12 sm:mb-20">
          <button
            onClick={() => setActiveTab('work')}
            className={`group relative flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold transition-all duration-500 overflow-hidden ${
              activeTab === 'work' 
                ? 'text-dark scale-105 sm:scale-110' 
                : 'text-slate-400 glass border-white/5 hover:border-white/10'
            }`}
          >
            {activeTab === 'work' && (
              <motion.div 
                layoutId="activeTabBg" 
                className="absolute inset-0 bg-primary shadow-[0_0_30px_#10b981]" 
              />
            )}
            <div className="relative z-10 flex items-center gap-3">
              <Briefcase size={18} />
              <span className="text-sm sm:text-base">Work Experience</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`group relative flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold transition-all duration-500 overflow-hidden ${
              activeTab === 'education' 
                ? 'text-dark scale-105 sm:scale-110' 
                : 'text-slate-400 glass border-white/5 hover:border-white/10'
            }`}
          >
            {activeTab === 'education' && (
              <motion.div 
                layoutId="activeTabBg" 
                className="absolute inset-0 bg-primary shadow-[0_0_30px_#10b981]" 
              />
            )}
            <div className="relative z-10 flex items-center gap-3">
              <GraduationCap size={18} />
              <span className="text-sm sm:text-base">Education</span>
            </div>
          </button>
        </div>

        {/* Timeline Content */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-[#a855f7] to-transparent -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-16"
              >
                {filteredItems.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`relative flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Point */}
                    <div className="absolute left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10 border-4 border-[#020617] hidden md:block shadow-[0_0_10px_#10b981]"></div>

                    {/* Content Card */}
                    <div className="w-full md:w-[45%]">
                      <div className="glass p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border-white/5 relative group hover:border-primary/20 transition-all duration-500 shadow-xl">
                        
                        {/* Type Tag */}
                        <div className="absolute top-0 right-0 px-4 py-1.5 bg-primary/20 rounded-bl-2xl rounded-tr-2xl">
                          <span className="text-primary text-[10px] font-black uppercase tracking-widest">
                            {exp.type}
                          </span>
                        </div>

                        <div className="flex items-start gap-6 mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            {exp.type === 'work' ? <Briefcase size={32} /> : <GraduationCap size={32} />}
                          </div>
                          <div>
                            <h3 className="text-2xl text-white font-bold mb-1 leading-tight">{exp.role}</h3>
                            <p className="text-primary font-bold">{exp.company}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 mb-6 text-slate-500 text-sm font-medium">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <p className="text-slate-400 leading-relaxed text-base mb-6">
                          {exp.description}
                        </p>



                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block w-[45%]"></div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
