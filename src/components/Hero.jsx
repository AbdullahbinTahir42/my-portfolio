import { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail, Cpu, Terminal, CheckCircle2 } from 'lucide-react';
import { personalDetails } from '../data';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x: x * 15, y: y * 15 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-6 pt-32 pb-20 tech-grid"
    >
      {/* Background Architectural Glow & Vignette */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[480px] w-[640px] max-w-full rounded-full bg-accent/10 blur-[120px]" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-bg-base/60 to-bg-base" 
      />

      <div className="relative z-10 mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Editorial Information & CTAs (7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Eyebrow / Availability Badge */}
          <Motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-border-medium bg-surface-1/90 px-3.5 py-1.5 text-xs text-content-secondary shadow-elevation-low"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-emerald opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-emerald" />
            </span>
            <span className="font-medium text-content-primary">Available for AI Engineering & Full-Stack Builds</span>
          </Motion.div>

          {/* Main Statement / Headline */}
          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-content-primary leading-[1.1]">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-accent to-secondary-cyan">Agentic AI</span> & Scalable Systems.
            </h1>
          </Motion.div>

          {/* Role & Name Anchor */}
          <Motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 flex flex-wrap items-center gap-2.5 text-sm sm:text-base font-mono text-content-secondary"
          >
            <span className="text-content-primary font-semibold">{personalDetails.name}</span>
            <span className="text-border-highlight">•</span>
            <span className="text-accent">{personalDetails.role}</span>
          </Motion.div>

          {/* Description */}
          <Motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-content-secondary font-normal"
          >
            {personalDetails.about}
          </Motion.p>

          {/* CTAs */}
          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <button
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-elevation-low transition-all duration-200 hover:bg-accent-hover hover:shadow-accent-sm active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>Explore Selected Work</span>
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Secondary CTA: Direct Download CV */}
            <a
              href="/files/CV_Ai.pdf"
              download
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-border-medium bg-surface-1 px-5 py-3.5 text-sm font-medium text-content-primary shadow-elevation-low transition-all duration-200 hover:bg-surface-2 hover:border-border-highlight active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Download Abdullah Tahir's AI Resume PDF"
            >
              <Download size={16} className="text-content-secondary group-hover:text-content-primary transition-colors" />
              <span>Download CV</span>
            </a>
          </Motion.div>

          {/* Social Links & Meta */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-10 flex items-center gap-5 pt-6 border-t border-border-subtle w-full max-w-xl"
          >
            <span className="text-xs font-mono uppercase tracking-wider text-content-faint">Connect</span>
            <div className="flex items-center gap-3">
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-medium bg-surface-1 text-content-secondary transition-all hover:text-content-primary hover:border-accent hover:bg-surface-2 focus-visible:ring-1 focus-visible:ring-accent"
              >
                <Github size={17} />
              </a>
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-medium bg-surface-1 text-content-secondary transition-all hover:text-content-primary hover:border-accent hover:bg-surface-2 focus-visible:ring-1 focus-visible:ring-accent"
              >
                <Linkedin size={17} />
              </a>
              <a
                href={`mailto:${personalDetails.email}`}
                aria-label="Send Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-medium bg-surface-1 text-content-secondary transition-all hover:text-content-primary hover:border-accent hover:bg-surface-2 focus-visible:ring-1 focus-visible:ring-accent"
              >
                <Mail size={17} />
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-2 ml-auto text-xs text-content-faint font-mono">
              <CheckCircle2 size={13} className="text-secondary-emerald" />
              <span>Full-Stack & ML Specialist</span>
            </div>
          </Motion.div>
        </div>

        {/* Right Column: Subtle 3D Layered Depth Profile Visual (5 cols on desktop) */}
        <div className="lg:col-span-5 flex justify-center items-center py-6">
          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              transform: `perspective(1000px) rotateX(${mousePos.y * -0.5}deg) rotateY(${mousePos.x * 0.5}deg)`,
              transition: 'transform 0.2s ease-out'
            }}
            className="relative flex items-center justify-center"
          >
            {/* Outer Technical Orbital Bezel */}
            <div className="absolute h-80 w-80 sm:h-96 sm:w-96 rounded-full border border-dashed border-border-medium opacity-60 animate-[spin_60s_linear_infinite]" />
            <div className="absolute h-[340px] w-[340px] sm:h-[420px] sm:w-[420px] rounded-full border border-border-subtle opacity-40" />

            {/* Radial Accent Rim Flare */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-accent/20 via-transparent to-secondary-cyan/15 blur-2xl opacity-70" />

            {/* Precision Bezel Container with Profile Photo */}
            <div className="relative h-60 w-60 sm:h-72 sm:w-72 rounded-full p-2 bg-gradient-to-b from-white/15 via-border-subtle to-white/5 shadow-elevation-high">
              <div className="relative h-full w-full rounded-full overflow-hidden bg-surface-1 border border-border-medium">
                <img
                  src="/images/my.JPG"
                  alt="Portrait of Abdullah Tahir"
                  className="h-full w-full object-cover object-center filter grayscale-[12%] contrast-[1.04] hover:grayscale-0 transition-all duration-500"
                />
                {/* Subtle vignette inner overlay */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] pointer-events-none" />
              </div>
            </div>

            {/* Floating 3D Micro-Chips / Capability Badges */}
            <Motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-3 -right-2 sm:-right-6 z-20 flex items-center gap-2 rounded-xl border border-border-highlight bg-surface-1/95 px-3 py-2 text-xs font-mono shadow-elevation-medium backdrop-blur-md"
            >
              <Cpu size={14} className="text-accent" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-content-faint uppercase">Specialization</span>
                <span className="font-semibold text-content-primary">Agentic AI & RAG</span>
              </div>
            </Motion.div>

            <Motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 -left-2 sm:-left-6 z-20 flex items-center gap-2 rounded-xl border border-border-highlight bg-surface-1/95 px-3 py-2 text-xs font-mono shadow-elevation-medium backdrop-blur-md"
            >
              <Terminal size={14} className="text-secondary-cyan" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-content-faint uppercase">Engineering</span>
                <span className="font-semibold text-content-primary">FastAPI & Python</span>
              </div>
            </Motion.div>

            {/* Coordinate / Spec mark */}
            <div className="absolute bottom-2 right-4 hidden sm:block text-[9px] font-mono text-content-faint uppercase tracking-widest bg-bg-base/80 px-2 py-0.5 rounded border border-border-subtle">
              LAT: PK // ML: PROD
            </div>
          </Motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
