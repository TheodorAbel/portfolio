import React from 'react';
import { BookOpen, Calendar, Award, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300 text-center max-w-3xl leading-relaxed">
            I'm a passionate and dedicated aspiring developer with a strong foundation in web technologies.
            Here's a bit more about my journey, education, and what drives me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Education</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-2">BSc in Information Science</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Addis Ababa University, 2022 - Present</p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Experience</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-2">Self-taught Developer</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Building personal projects and contributing to open source</p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Award className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Achievements</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-2">Hackathon Finalist</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Local Web Development Competition, 2023</p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Interests</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-2">Networking,Web Development,Mobile Apps</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Constantly learning and expanding my skill set</p>
            </div>
          </div>
          
          <div className="space-y-6 order-1 md:order-2">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Why Hire Me?</h3>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              I'm a quick learner with a passion for clean, efficient code and beautiful user interfaces. 
              My background in computer science has given me a solid foundation in algorithms, data structures, 
              and software design principles.
            </p>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              What sets me apart is my dedication to continuous improvement and my ability to adapt to new 
              technologies and frameworks. I believe in writing maintainable, well-documented code and 
              working collaboratively with others.
            </p>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              I'm looking for an internship opportunity where I can apply my skills, learn from experienced 
              professionals, and contribute to meaningful projects.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">Problem Solver</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">Detail-oriented</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">Fast Learner</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">Team Player</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">Self-motivated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;