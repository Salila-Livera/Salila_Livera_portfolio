import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certificates = () => {
  const certs = [
    {
      title: 'Create and manage canvas apps with Power Apps',
      issuer: 'Microsoft',
      date: 'April 5, 2026',
      image: 'https://www.image2url.com/r2/default/images/1778073058135-bc4f50d9-9a9a-418d-b12f-d4723a4715aa.png',
      link: 'https://learn.microsoft.com/api/achievements/share/en-us/SalilaLiveraIT22638168-9187/FQHCDGCX?sharingId=108FCDA9B66677CB'
    },
    {
      title: 'Diploma in English',
      issuer: 'Esoft Metro Campus',
      date: 'July 2019',
      image: 'https://www.image2url.com/r2/default/images/1778176674889-2c9e7730-118b-4b81-abc7-1294697221b9.jpeg',
      link: '#'
    }
  ];

  return (
    <section id="certificates" className="section-padding relative bg-dark-lighter/30">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass border-white/10 text-primary text-sm font-bold uppercase tracking-widest mb-6"
          >
            Credentials
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl mb-6"
          >
            Licenses & <span className="text-gradient">Certifications</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A showcase of the professional certifications I've earned to sharpen my expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass rounded-[2rem] overflow-hidden group border-white/5"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <a 
                     href={cert.link} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="w-14 h-14 rounded-full bg-primary text-dark flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                   >
                     <ExternalLink size={24} />
                   </a>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Award size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">{cert.issuer}</span>
                </div>
                <h3 className="text-2xl text-white font-bold mb-4 group-hover:text-primary transition-colors">{cert.title}</h3>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Calendar size={14} />
                  <span>Issued {cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
