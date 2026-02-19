import React from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Abel Tewodros</h3>
            <p className="text-slate-400">Full Stack & Flutter Developer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/TheodorAbel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-800 dark:bg-slate-900 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <GitHub className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/abel-theodor-1258b4244" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-800 dark:bg-slate-900 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:abeltheodor12@gmail.com"
              className="bg-slate-800 dark:bg-slate-900 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 dark:border-slate-900 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Abel Tewodros. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <button 
              onClick={scrollToTop} 
              className="group bg-slate-800 dark:bg-slate-900 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300 focus:outline-none"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-white group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;