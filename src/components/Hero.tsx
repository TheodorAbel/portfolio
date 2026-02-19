import React, { useEffect, useRef } from 'react';
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Send,
  FileText
} from 'lucide-react';
import profilePic from './profile-pic.png'; // Ensure this is in your project
import favicon from './favicon.ico'; // You must add this to your public folder or assets

const Hero: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const roles = ['Full Stack Developer', 'Flutter App Developer'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const currentRole = roles[roleIndex % roles.length];

      if (typingRef.current) {
        typingRef.current.textContent = isDeleting
          ? currentRole.substring(0, charIndex--)
          : currentRole.substring(0, charIndex++);
      }

      let delay = isDeleting ? 60 : 100;

      if (!isDeleting && charIndex === currentRole.length) {
        delay = 1500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex++;
        delay = 500;
      }

      timeoutId = setTimeout(type, delay);
    };

    type();
    return () => clearTimeout(timeoutId);
  }, []);

  const scrollToAbout = () => {
    const section = document.querySelector('#about');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 pt-16"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="animate-fade-in-up max-w-3xl order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600">Abel Tewodros</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-700 dark:text-slate-300 mb-6">
              I'm a <span ref={typingRef} className="text-blue-600 font-medium"></span>
              <span className="animate-blink">|</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg max-w-2xl leading-relaxed">
              I build modern web and mobile products end-to-end, with a focus on clean architecture, performance,
              and great user experience. Open to full-time roles and impactful projects.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-slate-800 transition duration-300 transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="w-5 h-5 mr-2 inline" />
                Resume
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/TheodorAbel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:text-blue-600 hover:bg-blue-100 dark:hover:text-blue-400 dark:hover:bg-blue-900 transition-all duration-300 transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/abel-theodor-1258b4244"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:text-blue-600 hover:bg-blue-100 dark:hover:text-blue-400 dark:hover:bg-blue-900 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://t.me/pychess00"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:text-blue-600 hover:bg-blue-100 dark:hover:text-blue-400 dark:hover:bg-blue-900 transition-all duration-300 transform hover:scale-110"
              >
                <Send size={24} />
              </a>
              <a
                href="mailto:abeltheodor12@gmail.com"
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:text-blue-600 hover:bg-blue-100 dark:hover:text-blue-400 dark:hover:bg-blue-900 transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl">
                <img
                  src={profilePic}
                  alt="Abel Tewodros smiling in profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg text-center">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Open to Work</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Open to Opportunities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <button
            onClick={scrollToAbout}
            className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-md hover:shadow-lg transition duration-300"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-6 h-6 text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
