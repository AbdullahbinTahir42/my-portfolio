import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Chatbot from './pages/Chatbot';

<<<<<<< HEAD
const Home = () => (
  <>
    <Hero />
    <Resume />
    <Projects />

    <footer className="border-t border-white/10 bg-slate-950/40 px-6 py-8 text-center text-sm text-slate-400 backdrop-blur">
      <p>© 2026 Abdullah Tahir. Built with React, Tailwind, and Framer Motion.</p>
=======
// The "Single Page" Home
const Home = () => (
  <>
    <Hero />
    <Resume /> 
    <Projects />
    
    <footer className="text-center py-8 text-gray-500 text-sm bg-[#1a1a1a] border-t border-gray-800">
      <p>© 2026 Abdullah Tahir. Built with React & Tailwind.</p>
>>>>>>> 26e9d76daf4131e2ae49e5a5a247fc9975aec8c1
    </footer>
  </>
);

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <div className="relative min-h-screen overflow-hidden bg-transparent text-slate-50 font-sans selection:bg-brand selection:text-white">
        <div className="hero-orb left-[-8rem] top-[-6rem] h-64 w-64 bg-brand/40" />
        <div className="hero-orb right-[-6rem] top-24 h-72 w-72 bg-cyan-400/20" />
=======
      <div className="min-h-screen bg-[#222] text-white font-sans selection:bg-brand selection:text-white">
>>>>>>> 26e9d76daf4131e2ae49e5a5a247fc9975aec8c1
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chatbot />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;