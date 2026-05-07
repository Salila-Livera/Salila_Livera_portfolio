import React from 'react';
import { Code2, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="relative bg-dark-lighter/30 border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <Code2 className="text-dark" size={26} />
              </div>
              <span className="text-2xl font-display font-black text-white tracking-tighter">
                LIVERA<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-lg mb-8 max-w-sm leading-relaxed">
              Crafting high-performance digital experiences with precision and passion. Let's build something exceptional together.
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: Github, href: 'https://github.com/Salila-Livera' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/salila-livera' },
                { Icon: Mail, href: "mailto:salliladimuthu2002@gmail.com" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 opacity-50">Navigation</h4>
              {['Home', 'About', 'Skills'].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="block text-slate-400 hover:text-white cursor-pointer transition-colors text-sm font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 opacity-50">Content</h4>
              {['Projects', 'Journal', 'Career'].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="block text-slate-400 hover:text-white cursor-pointer transition-colors text-sm font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 opacity-50">Action</h4>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="block text-primary hover:text-white cursor-pointer transition-colors text-sm font-bold"
              >
                Start a Project
              </Link>
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
              >
                Back to Top <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} <span className="text-slate-300">Salila Livera</span>. Designed for excellence.
          </p>
          <div className="flex items-center gap-6 text-slate-500 text-xs uppercase tracking-widest font-bold">
            <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
