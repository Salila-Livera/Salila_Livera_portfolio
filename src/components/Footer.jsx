import React from 'react';
import { Code2, Heart } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-dark-lighter/50 border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Code2 className="text-white" size={24} />
            </div>
            <span className="text-xl font-display font-bold text-white tracking-tight">
              LIVERA<span className="text-primary">.</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 max-w-md">
            {['Home', 'About', 'Skills', 'Projects', 'Journal', 'Career', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-slate-400 hover:text-white cursor-pointer transition-colors text-xs sm:text-sm uppercase tracking-widest font-bold"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Salila Livera. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
