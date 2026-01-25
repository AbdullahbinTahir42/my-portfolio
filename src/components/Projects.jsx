import { projects } from '../data';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Selected <span className="text-brand">Work</span>
          </motion.h2>
          <div className="h-1 w-32 bg-gradient-to-r from-brand to-transparent rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative glass-card rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                    <Code2 size={24} />
                  </div>
                  
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition text-gray-400 hover:text-white" title="View Code">
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                       project.demo.startsWith('/') ? (
                        <Link to={project.demo} className="p-2 rounded-full hover:bg-white/10 transition text-gray-400 hover:text-white" title="Live Demo">
                          <ExternalLink size={20} />
                        </Link>
                      ) : (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition text-gray-400 hover:text-white" title="Live Demo">
                          <ExternalLink size={20} />
                        </a>
                      )
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-brand transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech && project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;