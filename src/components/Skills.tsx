import React from 'react';
import { Check } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaLaravel, FaFire, FaGitAlt, FaAndroid, FaCode } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiNpm } from 'react-icons/si';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        { name: "HTML/CSS", icon: <div className="flex gap-2"><FaHtml5 className="text-orange-500" size={24} /><FaCss3Alt className="text-blue-500" size={24} /></div> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" size={24} /> },
        { name: "React", icon: <FaReact className="text-blue-400" size={24} /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" size={24} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" size={24} /> },
        { name: "Android Development", icon: <FaAndroid className="text-green-500" size={24} /> },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "PHP", icon: <FaPhp className="text-purple-500" size={24} /> },
        { name: "Laravel", icon: <FaLaravel className="text-red-500" size={24} /> },
        { name: "Firebase", icon: <FaFire className="text-orange-500" size={24} /> },
        { name: "RESTful APIs", icon: <FaNodeJs className="text-green-600" size={24} /> },
      ]
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git/GitHub", icon: <FaGitAlt className="text-gray-800" size={24} /> },
        { name: "VS Code", icon: <FaCode className="text-blue-500" size={24} /> },
        { name: "Responsive Design", icon: <FaCss3Alt className="text-blue-500" size={24} /> },
        { name: "NPM/Yarn", icon: <SiNpm className="text-red-500" size={24} /> },
      ]
    }
  ];
  
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300 text-center max-w-3xl leading-relaxed">
            Here's an overview of my technical skills and the technologies I work with.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 transition-transform duration-300 hover:transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex flex-col items-center p-4 bg-white dark:bg-slate-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    {skill.icon}
                    <span className="mt-2 text-sm font-medium text-slate-800 dark:text-slate-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 dark:bg-slate-800 rounded-xl p-8 border border-blue-100 dark:border-slate-700">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">What I Bring to the Table</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-blue-100 dark:bg-blue-900 p-1 rounded-full">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Strong Foundation</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Solid understanding of computer science fundamentals and programming concepts.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-blue-100 dark:bg-blue-900 p-1 rounded-full">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Responsive Design</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Skilled in creating websites that work flawlessly across all devices and screen sizes.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-blue-100 dark:bg-blue-900 p-1 rounded-full">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Modern Development</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Proficient in modern development practices and best practices for clean, efficient code.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-blue-100 dark:bg-blue-900 p-1 rounded-full">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Problem Solving</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Strong analytical skills and ability to troubleshoot complex issues.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-blue-100 dark:bg-blue-900 p-1 rounded-full">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Version Control</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Experienced with Git workflow, branching strategies, and collaborative development.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-blue-100 dark:bg-blue-900 p-1 rounded-full">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Continuous Learning</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Dedicated to staying updated with the latest technologies and industry best practices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
