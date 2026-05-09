import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Calendar, X } from 'lucide-react';

const Certificates = () => {
  const [lightbox, setLightbox] = useState(null); // { image, title }

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
      image: 'https://www.image2url.com/r2/default/images/1778353854699-825d23e1-97b5-41c9-9078-c9d39f4853e6.jpeg',
      link: '#'
    },
    {
      title: 'Diploma in IT',
      issuer: 'Esoft Metro Campus',
      date: 'July 2019',
      image: 'https://www.image2url.com/r2/default/images/1778353906023-d5cd9861-4f41-443f-befc-26cf7fce56b2.jpeg',
      link: '#'
    }
  ];

  const openLightbox = (cert) => {
    setLightbox({ image: cert.image, title: cert.title });
  };

  const closeLightbox = () => setLightbox(null);

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
            Licenses &amp; <span className="text-gradient">Certifications</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A showcase of the professional certifications I've earned to sharpen my expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  {cert.link === '#' ? (
                    /* Diploma cards — open lightbox */
                    <button
                      onClick={() => openLightbox(cert)}
                      className="w-14 h-14 rounded-full bg-primary text-dark flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                      aria-label={`View ${cert.title}`}
                    >
                      <ExternalLink size={24} />
                    </button>
                  ) : (
                    /* Other certs — open external link */
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-primary text-dark flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                    >
                      <ExternalLink size={24} />
                    </a>
                  )}
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-start justify-center p-6 overflow-y-auto"
            style={{ backgroundColor: 'rgba(0,0,0,0.90)', backdropFilter: 'blur(8px)' }}
            onClick={closeLightbox}
          >
            <motion.div
              key="lightbox-content"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="relative max-w-4xl w-full rounded-3xl shadow-2xl my-auto"
              style={{ background: 'rgba(15,23,42,0.95)', border: '1px solid rgba(255,255,255,0.1)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cancel Button */}
              <button
                onClick={closeLightbox}
                id="lightbox-close-btn"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-dark/80 border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:text-dark transition-all duration-300 hover:scale-110"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* Full Image — no cropping */}
              <div className="rounded-t-3xl overflow-hidden">
                <img
                  src={lightbox.image}
                  alt={lightbox.title}
                  className="w-full h-auto block"
                  style={{ maxHeight: '80vh', objectFit: 'contain' }}
                />
              </div>

              {/* Title Bar */}
              <div className="px-6 py-4 border-t border-white/10">
                <p className="text-white font-bold text-lg text-center">{lightbox.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Certificates;
