import { motion } from 'framer-motion';
import { Download, ArrowRight, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalDetails } from '../data';
import { useState } from 'react';

const Hero = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
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
        >
          {personalDetails.about}
        </motion.p>

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
                  Backend Resume
                </a>
              </div>
            )}
          </div>

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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;