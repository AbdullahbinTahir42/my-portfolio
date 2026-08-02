import { projects } from '../data';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { useState } from 'react';

const Projects = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <section id="projects" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-title text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Selected <span className="text-brand">Work</span>
          </motion.h2>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
            A snapshot of the systems, interfaces, and AI experiences I’ve built across product, backend, and research-driven work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onMouseMove={handleMove}
              onMouseLeave={resetTilt}
              whileHover={{ scale: 1.02, rotateX: tilt.x, rotateY: tilt.y, y: -6 }}
              className="group relative h-full rounded-[24px] border border-white/10 bg-slate-900/50 p-7 shadow-[0_20px_60px_rgba(4,8,20,0.28)] backdrop-blur"
            >
              <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-brand/20 via-transparent to-cyan-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col">
                <div className="mb-6 flex items-start justify-between">
                  <div className="rounded-2xl border border-brand/30 bg-brand/10 p-3 text-brand transition-all group-hover:bg-brand group-hover:text-white">
                    <Code2 size={22} />
                  </div>

                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 p-2 text-slate-400 transition hover:bg-white/10 hover:text-white" title="View Code">
                        <Github size={18} />
                      </a>
                    )}
                    {project.demo && (
                      project.demo.startsWith('/') ? (
                        <Link to={project.demo} className="rounded-full border border-white/10 p-2 text-slate-400 transition hover:bg-white/10 hover:text-white" title="Live Demo">
                          <ExternalLink size={18} />
                        </Link>
                      ) : (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 p-2 text-slate-400 transition hover:bg-white/10 hover:text-white" title="Live Demo">
                          <ExternalLink size={18} />
=======

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
>>>>>>> 26e9d76daf4131e2ae49e5a5a247fc9975aec8c1
                        </a>
                      )
                    )}
                  </div>
                </div>

<<<<<<< HEAD
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-brand/80">{project.category}</p>
                <h3 className="mb-3 text-2xl font-semibold text-white transition-colors group-hover:text-brand">{project.title}</h3>
                <p className="mb-6 flex-grow text-sm leading-7 text-slate-400">{project.desc}</p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech && project.tech.map((t, i) => (
                    <span key={i} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
=======
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
>>>>>>> 26e9d76daf4131e2ae49e5a5a247fc9975aec8c1
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