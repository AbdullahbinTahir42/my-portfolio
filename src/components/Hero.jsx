import { motion } from 'framer-motion';
import { Download, ArrowRight, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalDetails } from '../data';
import { useState } from 'react';

const Hero = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
<<<<<<< HEAD
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
=======
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      
      {/* Dynamic Background Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand/20 rounded-full blur-[120px] -z-10 opacity-30 animate-pulse" />

      <div className="max-w-5xl mx-auto text-center z-10">
        
        {/* Profile Image with Glowing Ring */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative inline-block mb-10 group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-brand to-cyan-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full p-1 bg-[#111]">
            <img 
              src="/images/my.JPG" 
              alt="Profile" 
              className="w-full h-full rounded-full object-cover" 
            />
          </div>
        </motion.div>
        
        {/* Modern Typography */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
            {personalDetails.name}
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-3xl text-brand font-medium mb-8"
        >
          {personalDetails.role}
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-gray-400 text-lg mb-12 leading-relaxed font-light"
>>>>>>> 26e9d76daf4131e2ae49e5a5a247fc9975aec8c1
        >
          {personalDetails.about}
        </motion.p>

<<<<<<< HEAD
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
=======
        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row justify-center gap-5 items-center"
        >
          <div className="relative group">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <Download size={20} />
              Download CV
              <ChevronDown size={16} className={`transition ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-3 w-full bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden shadow-2xl z-20 flex flex-col">
                <a href="/files/CV_Ai.pdf" download className="block px-4 py-3 text-sm text-gray-300 hover:bg-brand hover:text-white text-left transition">
                  AI / ML Resume
                </a>
                <a href="/files/CV_python.pdf" download className="block px-4 py-3 text-sm text-gray-300 hover:bg-brand hover:text-white text-left transition border-t border-gray-800">
>>>>>>> 26e9d76daf4131e2ae49e5a5a247fc9975aec8c1
                  Backend Resume
                </a>
              </div>
            )}
          </div>

<<<<<<< HEAD
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
=======
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth'})}
            className="flex items-center justify-center gap-3 glass-card text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 hover:scale-105 transition-all"
          >
            View Projects
            <ArrowRight size={20} />
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.6 }}
          className="mt-16 flex justify-center gap-6 text-gray-500"
        >
          <a href={personalDetails.github} target="_blank" className="hover:text-white hover:-translate-y-1 transition"><Github size={24} /></a>
          <a href={personalDetails.linkedin} target="_blank" className="hover:text-blue-400 hover:-translate-y-1 transition"><Linkedin size={24} /></a>
          <a href={`mailto:${personalDetails.email}`} className="hover:text-brand hover:-translate-y-1 transition"><Mail size={24} /></a>
>>>>>>> 26e9d76daf4131e2ae49e5a5a247fc9975aec8c1
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;