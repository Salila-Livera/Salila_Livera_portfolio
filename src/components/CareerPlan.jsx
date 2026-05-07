import React from 'react';
import { motion } from 'framer-motion';
import { Target, Flag, TrendingUp, Award } from 'lucide-react';

const CareerPlan = () => {
  const goals = [
    {
      type: 'Short-term',
      title: 'Full-Stack Mastery',
      timeframe: '6 - 12 Months',
      icon: Target,
      description: 'Deepen expertise in Next.js, Spring Boot and System Design to build scalable SaaS products.',
      steps: ['Finish Advanced React Patterns', 'Build a Microservices Project', 'Contribute to Open Source']
    },
    {
      type: 'Mid-term',
      title: 'Senior Engineer Role',
      timeframe: '2 - 3 Years',
      icon: TrendingUp,
      description: 'Leading technical teams and architecting high-traffic distributed systems.',
      steps: ['Mentoring Junior Developers', 'AWS Certified Solutions Architect', 'Improving System Reliability']
    },
    {
      type: 'Long-term',
      title: 'Technical Director / Founder',
      timeframe: '5+ Years',
      icon: Award,
      description: 'Driving technical strategy for a startup or leading a specialized engineering department.',
      steps: ['Strategic Business Management', 'Building Product Ecosystems', 'Thought Leadership']
    }
  ];

  return (
    <section id="career" className="section-padding relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass border-white/10 text-primary text-sm font-bold uppercase tracking-widest mb-6"
          >
            Roadmap
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl mb-6"
          >
            Career <span className="text-gradient">Plan</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            My strategic vision for professional growth and the milestones I aim to achieve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-[2rem] border-white/5 relative group hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <goal.icon size={28} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{goal.type}</span>
              </div>

              <h3 className="text-2xl text-white font-bold mb-2">{goal.title}</h3>
              <p className="text-primary text-sm font-mono mb-6">{goal.timeframe}</p>
              <p className="text-slate-400 mb-8 leading-relaxed">{goal.description}</p>

              <div className="space-y-3">
                {goal.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    <span className="text-sm text-slate-300">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerPlan;
