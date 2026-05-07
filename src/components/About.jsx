import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Users, CheckCircle2 } from 'lucide-react';

const stats = [
  { icon: Briefcase, label: 'Years Experience', value: '2+' },
  { icon: Award, label: 'Projects Completed', value: '4+' },
  { icon: Users, label: 'Happy Clients', value: '2+' },
];

const highlights = [
  'Enterprise Java & Spring Boot architecture',
  'Microservices & RESTful API design',
  'Full-stack development with React & Node.js',
  'Scalable database design & Dockerization',
];

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden lg:block w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl group">
              <img 
                src="avatar.png" 
                alt="Profile" 
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl z-0"></div>
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <p className="text-white font-bold">5+ Projects</p>
                  <p className="text-slate-400 text-sm">Active this month</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
            <p>
              I started writing code because I wanted to understand how things worked under the hood. What started as curiosity turned into a fascination with backend systems: the logic, the data flow, the architectural decisions that determine whether software scales or breaks under pressure.
            </p>
            <p>
              Right now I'm in my final year at SLIIT University, pursuing a BSc in Information Technology, while working as a Software Engineer Intern at ZeroCode Software. My day-to-day is mostly Java and Spring Boot, building REST APIs, working with relational databases, and learning what production-grade backend code actually looks like outside of academic projects.
            </p>
            <p>
              I'm drawn to problems that require careful thinking: clean architecture, well-designed APIs, systems that handle edge cases gracefully. Looking ahead, I want to work with teams that take craft seriously and build software that lasts. Open to full-time roles, freelance work, or anything interesting in between.
            </p>
            <p> 
            </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 shrink-0" size={18} />
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="glass p-4 rounded-2xl text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="text-secondary" size={24} />
                  </div>
                  <h4 className="text-2xl text-white mb-1">{stat.value}</h4>
                  <p className="text-slate-500 text-xs uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
