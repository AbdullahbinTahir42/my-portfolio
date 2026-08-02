import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Chatbot from './pages/Chatbot';

const Home = () => (
  <>
    <Hero />
    <Resume />
    <Projects />

    <footer className="border-t border-white/10 bg-slate-950/40 px-6 py-8 text-center text-sm text-slate-400 backdrop-blur">
      <p>© 2026 Abdullah Tahir. Built with React, Tailwind, and Framer Motion.</p>
    </footer>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-hidden bg-transparent text-slate-50 font-sans selection:bg-brand selection:text-white">
        <div className="hero-orb left-[-8rem] top-[-6rem] h-64 w-64 bg-brand/40" />
        <div className="hero-orb right-[-6rem] top-24 h-72 w-72 bg-cyan-400/20" />
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