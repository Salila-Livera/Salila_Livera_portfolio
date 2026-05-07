import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Use EmailJS environment variables
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus(''), 5000);
      }, (error) => {
          setStatus('error');
          setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-4"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <p className="text-slate-400">Have a project in mind? Let's talk about it.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl mb-8">Let's connect</h3>
            <p className="text-slate-400 mb-10 leading-relaxed max-w-md">
              I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative injection, please get in touch.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { icon: Mail, label: 'Email', value: 'salliladimuthu2002@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+94 75 817 9151' },
                { icon: MapPin, label: 'Location', value: 'Maharagama, Sri Lanka' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {[
                { Icon: Github, href: 'https://github.com/Salila-Livera' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/salila-livera' },
                { Icon: Mail, href: "mailto:salliladimuthu2002@gmail.com" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-slate-300 hover:text-primary transition-colors"
                >
                  <social.Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-[40px]"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="user_email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 ml-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 ml-1">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <p className="text-green-400 text-center font-medium mt-4">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center font-medium mt-4">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
