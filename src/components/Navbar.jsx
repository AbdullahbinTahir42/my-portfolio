import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

<<<<<<< HEAD
=======
  // Helper to handle scrolling if on home, or redirecting if on chat page
>>>>>>> 26e9d76daf4131e2ae49e5a5a247fc9975aec8c1
  const handleScroll = (id) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<<<<<<< HEAD
    <nav className="glass-nav fixed top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-white">
          <span className="font-display text-brand">Abdullah</span>
          <span className="text-slate-100">Tahir</span>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
          <button onClick={() => handleScroll('home')} className="transition hover:text-brand">Home</button>
          <button onClick={() => handleScroll('skills')} className="transition hover:text-brand">Skills</button>
          <button onClick={() => handleScroll('resume')} className="transition hover:text-brand">Resume</button>
          <button onClick={() => handleScroll('projects')} className="transition hover:text-brand">Projects</button>

          <Link to="/chat" className="flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-2 text-brand transition-all hover:bg-brand hover:text-white">
=======
    <nav className="fixed top-0 w-full glass-nav z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
           <span className="text-brand">Abdullah</span> Tahir
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-gray-300 font-medium">
          <button onClick={() => handleScroll('home')} className="hover:text-brand transition">Home</button>
          <button onClick={() => handleScroll('skills')} className="hover:text-brand transition">Skills</button>
          <button onClick={() => handleScroll('resume')} className="hover:text-brand transition">Resume</button>       
          <button onClick={() => handleScroll('projects')} className="hover:text-brand transition">Projects</button>
          
          <Link to="/chat" className="flex items-center gap-2 bg-brand/10 text-brand px-5 py-2 rounded-full border border-brand hover:bg-brand hover:text-white transition-all">
>>>>>>> 26e9d76daf4131e2ae49e5a5a247fc9975aec8c1
            <MessageSquare size={18} />
            AI Chat
          </Link>
        </div>

<<<<<<< HEAD
        <button className="rounded-full border border-white/10 p-2 text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-3 border-t border-white/10 bg-slate-950/80 px-6 py-5 text-sm text-slate-300 shadow-xl md:hidden">
          <button onClick={() => handleScroll('home')} className="text-left py-2">Home</button>
          <button onClick={() => handleScroll('projects')} className="text-left py-2">Projects</button>
          <button onClick={() => handleScroll('resume')} className="text-left py-2">Resume</button>
          <Link to="/chat" className="pt-2 font-semibold text-brand" onClick={() => setIsOpen(false)}>
            Talk to AI Agent
          </Link>
=======
        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#222] border-b border-white/10 pb-6 px-6 flex flex-col gap-4 shadow-xl">
          <button onClick={() => handleScroll('home')} className="text-left py-2 text-gray-300">Home</button>
          <button onClick={() => handleScroll('projects')} className="text-left py-2 text-gray-300">Projects</button>
          <button onClick={() => handleScroll('resume')} className="text-left py-2 text-gray-300">Resume</button>
          <Link to="/chat" className="text-brand font-bold py-2" onClick={() => setIsOpen(false)}>Talk to AI Agent</Link>
>>>>>>> 26e9d76daf4131e2ae49e5a5a247fc9975aec8c1
        </div>
      )}
    </nav>
  );
};

export default Navbar;