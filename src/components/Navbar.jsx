import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper to handle scrolling if on home, or redirecting if on chat page
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
    <nav className="fixed top-0 w-full glass-nav z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
           <span className="text-brand">Abdullah</span> Tahir
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-gray-300 font-medium">
          <button onClick={() => handleScroll('home')} className="hover:text-brand transition">Home</button>
          <button onClick={() => handleScroll('skills')} className="hover:text-brand transition">Skills</button>
          <button onClick={() => handleScroll('projects')} className="hover:text-brand transition">Projects</button>
          <button onClick={() => handleScroll('resume')} className="hover:text-brand transition">Resume</button>
          
          <Link to="/chat" className="flex items-center gap-2 bg-brand/10 text-brand px-5 py-2 rounded-full border border-brand hover:bg-brand hover:text-white transition-all">
            <MessageSquare size={18} />
            AI Chat
          </Link>
        </div>

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
        </div>
      )}
    </nav>
  );
};

export default Navbar;