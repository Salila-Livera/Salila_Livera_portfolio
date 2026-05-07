import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Quote } from 'lucide-react';

const Journal = () => {
  return (
    <section id="journal" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass border-white/10 text-primary text-sm font-bold uppercase tracking-widest mb-6"
          >
            Reflections
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl mb-6"
          >
            Reflective <span className="text-gradient">Journal</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            A personal reflection on my learning journey and professional growth during the PPW module.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-6 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] relative overflow-hidden border-white/5"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <BookOpen size={200} />
            </div>

            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                <Quote size={24} />
              </div>
              <div>
                <h3 className="text-2xl text-white font-bold mb-2">Reflective Journal Description (PPW)</h3>
                <p className="text-primary text-sm font-mono tracking-widest">Professional and Personal Writing</p>
              </div>
            </div>

            <div className="space-y-6 text-slate-400 leading-relaxed text-lg text-justify">
              <p>
                The reflective journal is a personal record of my learning experience in the <strong>Professional and Personal Writing (PPW)</strong> module. It explains the knowledge and skills I have gained throughout the course and how they have improved my communication abilities.
              </p>
              <p>
                In this module, I learned how to use <strong>formal and professional writing styles</strong> in different situations such as emails, memos, reports, and letters. I also developed skills in <strong>presentation, interview techniques, and telephone etiquette</strong>, which are important for workplace communication.
              </p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <p className="mb-4 text-white font-bold">The journal reflects my understanding of key concepts like:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Writing clearly and concisely',
                    'Using appropriate tone and language',
                    'Structuring professional documents correctly',
                    'Communicating effectively with different audiences'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p>
                Additionally, this reflective journal highlights how these skills will help me in my <strong>academic work and future career</strong>, making me more confident and professional in communication.
              </p>
              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-[9px] sm:text-[10px] uppercase font-bold text-slate-500 tracking-widest">Writing</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-[9px] sm:text-[10px] uppercase font-bold text-slate-500 tracking-widest">Communication</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-[9px] sm:text-[10px] uppercase font-bold text-slate-500 tracking-widest">Professionalism</span>
                </div>
                <span className="text-[10px] sm:text-xs text-slate-500 font-mono italic">Last updated: May 2026</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Journal;
