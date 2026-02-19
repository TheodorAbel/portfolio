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
            I'm a full-stack developer focused on building reliable, user-centered products.
            I enjoy taking ownership from problem definition to delivery—shipping polished UI, solid APIs, and maintainable code.
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
              <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-2">
                <li>IT Security Intern at Grant Thornton</li>
                <li>Freelance full-stack development for different clients and companies</li>
                <li>Contributing to a startup project at Nano Computing ICT Solution</li>
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Award className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Achievements</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-2">Hackathon Finalist</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Local Web Development Competition, 2023</p>
              <p className="text-slate-600 dark:text-slate-300 mb-2 mt-3">Startup Project Contributor</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Building and shipping features as part of a startup initiative at Nano Computing ICT Solution.</p>
              <p className="text-slate-600 dark:text-slate-300 mb-2 mt-3">Delivered Real-World Client Work</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Hands-on experience collaborating with stakeholders, translating requirements into working software, and iterating quickly.</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Interests</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-2">Full-Stack Development, Mobile App Development</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Constantly learning and expanding my skill set</p>
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">What I Bring</h3>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              I help teams ship reliable features by combining strong engineering fundamentals with practical product thinking.
              I’m comfortable working across the stack—from UI and APIs to integration and deployment.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              I’ve worked in real delivery environments, including an IT Security internship and freelance engagements.
              I communicate clearly, take ownership, and focus on writing maintainable code that scales.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              If you’re looking for a developer who learns fast, executes with discipline, and cares about quality and UX,
              I’d love to contribute.
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