import { useState, useRef } from 'react';
import { projects } from '../data';
import { Github, ExternalLink, ArrowRight, Layers, Bot, Eye, Server, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion as Motion, AnimatePresence } from 'framer-motion';

// Category classification helper for filter tabs
const getCategoryGroup = (category) => {
  const cat = category.toLowerCase();
  if (cat.includes('ai') || cat.includes('llm') || cat.includes('agent')) return 'ai';
  if (cat.includes('vision') || cat.includes('ml')) return 'ml';
  if (cat.includes('api') || cat.includes('fastapi') || cat.includes('backend') || cat.includes('iot')) return 'backend';
  return 'fullstack';
};

// Semantic neutral category icon renderer
const renderCategoryIcon = (category) => {
  const cat = category.toLowerCase();
  const iconProps = { size: 12, className: 'text-white/70', strokeWidth: 2 };
  if (cat.includes('llm') || cat.includes('assistant') || cat.includes('ai project')) {
    return <Bot {...iconProps} />;
  }
  if (cat.includes('vision') || cat.includes('ml')) {
    return <Eye {...iconProps} />;
  }
  if (cat.includes('backend') || cat.includes('api') || cat.includes('fastapi')) {
    return <Server {...iconProps} />;
  }
  if (cat.includes('automation') || cat.includes('iot')) {
    return <Cpu {...iconProps} />;
  }
  return <Layers {...iconProps} />;
};

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & Agents' },
  { id: 'ml', label: 'Computer Vision & ML' },
  { id: 'backend', label: 'APIs & Backend' },
  { id: 'fullstack', label: 'Full-Stack & Apps' }
];

/**
 * Standardized Category Badge Component
 * Shared neutral/white visual styling across ALL project cards.
 */
export const CategoryBadge = ({ category }) => {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.18] bg-white/[0.04] px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider font-medium text-white/90 transition-colors duration-200 hover:border-white/30 hover:bg-white/[0.07]">
      {renderCategoryIcon(category)}
      <span>{category}</span>
    </span>
  );
};

/**
 * Individual Project Card with Isolated 3D Tilt & Cursor Glare
 */
const ProjectCard = ({ project, isFeatured = false }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, isHovered: false });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Small, restrained tilt range (max ±5 degrees)
    setTilt({
      x: (y - 0.5) * -8,
      y: (x - 0.5) * 8,
      glareX: x * 100,
      glareY: y * 100,
      isHovered: true
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, isHovered: false });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px'
      }}
      className={`relative h-full transition-transform duration-200 ${isFeatured ? 'md:col-span-2 lg:col-span-2' : ''}`}
    >
      <Motion.div
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          y: tilt.isHovered ? -4 : 0
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border-subtle bg-surface-1 p-6 transition-all duration-300 hover:border-border-highlight hover:shadow-elevation-medium"
      >
        {/* Subtle dynamic cursor light glare */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            opacity: tilt.isHovered ? 0.35 : 0,
            background: `radial-gradient(400px circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.08), transparent 60%)`
          }}
        />

        {/* Card Header & Content */}
        <div>
          {/* Card Meta Bar: Unified Category Badge & Action Links */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <CategoryBadge category={project.category} />

            {/* Quick Action Links */}
            <div className="flex items-center gap-1.5">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-medium bg-surface-2 text-content-secondary transition hover:text-content-primary hover:border-accent hover:bg-surface-elevated"
                  title="View Source on GitHub"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github size={15} />
                </a>
              )}
              {project.demo && (
                project.demo.startsWith('/') ? (
                  <Link
                    to={project.demo}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-medium bg-surface-2 text-content-secondary transition hover:text-content-primary hover:border-accent hover:bg-surface-elevated"
                    title="Launch Interactive Demo"
                    aria-label={`Open Demo for ${project.title}`}
                  >
                    <ExternalLink size={15} />
                  </Link>
                ) : (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-medium bg-surface-2 text-content-secondary transition hover:text-content-primary hover:border-accent hover:bg-surface-elevated"
                    title="Live Demo"
                    aria-label={`Open Live Demo for ${project.title}`}
                  >
                    <ExternalLink size={15} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Project Title */}
          <h3 className="font-display text-xl font-bold text-content-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="mt-2.5 text-sm leading-relaxed text-content-secondary">
            {project.desc}
          </p>
        </div>

        {/* Tech Stack Footer */}
        <div className="mt-6 pt-4 border-t border-border-subtle flex flex-wrap gap-1.5">
          {project.tech && project.tech.map((t, i) => (
            <span
              key={i}
              className="rounded-md border border-border-subtle bg-surface-2 px-2.5 py-0.5 text-[11px] font-mono text-content-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </Motion.div>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);

  // Filter projects by selected category
  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'all') return true;
    return getCategoryGroup(p.category) === activeCategory;
  });

  // Progressive disclosure: show 6 by default unless expanded or filtered
  const displayedProjects = (activeCategory !== 'all' || showAll)
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="relative px-6 py-28 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-border-subtle pb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Selected Portfolio
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-content-primary">
            Featured Systems & Applications
          </h2>
        </div>
        <p className="text-sm text-content-secondary max-w-md">
          A showcase of autonomous agents, computer vision models, API architectures, and intelligent software deployed for production.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const count = cat.id === 'all'
            ? projects.length
            : projects.filter((p) => getCategoryGroup(p.category) === cat.id).length;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setShowAll(false);
              }}
              className={`flex whitespace-nowrap items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition-all duration-200 border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                isActive
                  ? 'bg-accent/15 border-accent text-white shadow-accent-sm'
                  : 'bg-surface-1 border-border-subtle text-content-secondary hover:text-content-primary hover:border-border-highlight'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                isActive ? 'bg-accent text-white font-bold' : 'bg-surface-2 text-content-faint'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Project Grid with Isolated 3D Tilt */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, index) => (
            <Motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
            >
              <ProjectCard project={project} />
            </Motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Progressive Disclosure Toggle Button */}
      {activeCategory === 'all' && projects.length > 6 && (
        <div className="mt-14 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-2 rounded-xl border border-border-medium bg-surface-1 px-6 py-3 text-xs font-mono uppercase tracking-wider text-content-primary shadow-elevation-low transition-all hover:border-accent hover:bg-surface-2"
          >
            <span>{showAll ? 'Show Fewer Projects' : `View All ${projects.length} Projects (${projects.length - 6} more)`}</span>
            <ArrowRight size={14} className={`transition-transform duration-200 ${showAll ? '-rotate-90' : 'group-hover:translate-x-1'}`} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;