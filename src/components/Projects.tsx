import React, { useState } from 'react';
import { ExternalLink, Github as GitHub, Code } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const projects: Project[] = [
    {
      id: 6,
      title: "PulseFit",
      description: "A Flutter fitness app focused on workout execution, routine planning, scheduling, progress tracking, and health-data integration—built with local-first performance and optional cloud sync.",
      image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Flutter", "Dart", "Provider", "GoRouter", "Hive", "Firebase", "Firestore", "Local Notifications", "Health APIs"],
      liveUrl: "https://github.com/TheodorAbel/PulseFit-Fitness-App/releases",
      githubUrl: "https://github.com/TheodorAbel/PulseFit-Fitness-App",
      featured: true
    },
    {
      id: 2,
      title: "DevLink",
      description: "A modern marketplace for tech-related jobs that connects job seekers and employers. Job seekers can discover roles, save/share jobs, and manage their profile and resume. Employers manage company presence and job postings via a dedicated dashboard.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "React Query", "Supabase"],
      liveUrl: "https://dev-link-eight-jet.vercel.app",
      githubUrl: "https://github.com/TheodorAbel/DevLink",
      featured: true
    },
    {
      id: 1,
      title: "Yummy Food Review Website",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and checkout process.",
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Node.js", "Firebase", "Stripe"],
      liveUrl: "https://yummy-eatery.netlify.app",
      githubUrl: "https://github.com/TheodorAbel/Yummy-Food-Review-website",
      featured: true
    },
    {
      id: 4,
      title: "FBE-campus-network",
      description: "Designed and implemented a comprehensive network infrastructure for the Faculty of Business and Economics (FBE) campus at Addis Ababa University. ",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Cisco packet tracer,"],
      liveUrl: "https://example.com/tasks",
      githubUrl: "https://github.com/TheodorAbel/FBE-CAMPUS-NETWORK",
      featured: false
    },
    {
      id: 3,
      title: "Recipe Hub",
      description: "Recipe Hub is an easy-to-use app that helps you discover, save, and share your favorite recipes. Find delicious dishes, follow step-by-step cooking instructions, and organize your personal recipe collection all in one place",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["JavaScript", "React", "Huggingface api", "CSS"],
      liveUrl: "https://example.com/weather",
      githubUrl: "https://github.com/TheodorAbel/Recipe-Hub",
      featured: false
    },
    {
      id: 5,
      title: "Personal Blog",
      description: "A markdown-based blog platform with categories, tags, and comment functionality.",
      image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Next.js", "MDX", "Tailwind CSS"],
      liveUrl: "https://example.com/blog",
      githubUrl: "https://github.com/yourusername/blog",
      featured: false
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300 text-center max-w-3xl leading-relaxed">
            Here are some of the projects I've worked on. Each one has helped me develop different skills
            and overcome unique challenges.
          </p>
          
          <div className="flex space-x-4 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                filter === 'featured' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              Featured
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-between items-center">
                    <h3 className="text-white font-bold text-xl">{project.title}</h3>
                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-300 transition-colors duration-300"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <GitHub className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-300 transition-colors duration-300"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs font-medium flex items-center"
                    >
                      <Code className="w-3 h-3 mr-1" />
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 mt-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      <GitHub className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;