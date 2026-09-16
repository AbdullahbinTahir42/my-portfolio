import { motion } from 'framer-motion';
import { Download, ArrowRight, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalDetails } from '../data';
import { useState } from 'react';

const Hero = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-20 pt-28">
      <div className="hero-orb left-[-4rem] top-16 h-72 w-72 bg-brand/40" />
      <div className="hero-orb right-[-4rem] top-24 h-80 w-80 bg-cyan-400/20" />

      <div className="z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-8 inline-block"
        >
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-brand to-cyan-400 opacity-40 blur-xl" />
          <div className="relative h-36 w-36 overflow-hidden rounded-full border border-white/10 bg-slate-900/70 p-1 shadow-[0_20px_60px_rgba(4,8,20,0.45)] md:h-44 md:w-44">
            <img src="/images/my.JPG" alt="Portrait of Abdullah Tahir" className="h-full w-full rounded-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm font-medium text-brand"
        >
          Available for AI product work and modern web builds
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl"
        >
          {personalDetails.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg font-medium text-brand md:text-2xl"
        >
          {personalDetails.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
        >
          {personalDetails.about}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-10 flex flex-col items-center gap-4 md:flex-row"
        >
          <div className="relative group">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-semibold text-slate-950 shadow-[0_16px_45px_rgba(255,255,255,0.16)] transition-all hover:-translate-y-0.5 hover:bg-slate-100"
            >
              <Download size={18} />
              Download CV
              <ChevronDown size={16} className={`transition ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 top-full mt-3 flex w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/90 shadow-2xl backdrop-blur">
                <a href="/files/CV_Ai.pdf" download className="px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-brand hover:text-white">
                  AI / ML Resume
                </a>
                <a href="/files/CV_python.pdf" download className="border-t border-white/10 px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-brand hover:text-white">
                  Backend Resume
                </a>
              </div>
            )}
          </div>

          <button
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-3 rounded-full border border-white/10 bg-slate-900/60 px-7 py-3.5 font-medium text-slate-100 transition-all hover:-translate-y-0.5 hover:bg-white/10"
          >
            View Projects
            <ArrowRight size={18} />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-10 flex justify-center gap-5 text-slate-400"
        >
          <a href={personalDetails.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 transition hover:-translate-y-1 hover:border-brand hover:text-white"><Github size={20} /></a>
          <a href={personalDetails.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 transition hover:-translate-y-1 hover:border-brand hover:text-white"><Linkedin size={20} /></a>
          <a href={`mailto:${personalDetails.email}`} className="rounded-full border border-white/10 p-3 transition hover:-translate-y-1 hover:border-brand hover:text-white"><Mail size={20} /></a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;