import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Chatbot from './pages/Chatbot';

// The "Single Page" Home
const Home = () => (
  <>
    <Hero />
    <Resume /> 
    <Projects />
    
    <footer className="text-center py-8 text-gray-500 text-sm bg-[#1a1a1a] border-t border-gray-800">
      <p>© 2026 Abdullah Tahir. Built with React & Tailwind.</p>
    </footer>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#222] text-white font-sans selection:bg-brand selection:text-white">
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