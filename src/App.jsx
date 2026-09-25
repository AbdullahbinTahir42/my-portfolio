import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';

// Lazy-load Chatbot route for code-splitting
const Chatbot = lazy(() => import('./pages/Chatbot'));

// Hugging Face Space URL for pre-warming cold starts
const CHATBOT_SPACE_URL = 'https://abdullahtahir-my-chatbot.hf.space';

function App() {
  // Wake up Hugging Face Space when the website opens
  useEffect(() => {
    const wakeUpChatbot = () => {
      fetch(CHATBOT_SPACE_URL, {
        method: 'GET',
        mode: 'no-cors',
        cache: 'no-store',
      }).catch((error) => {
        console.error('Chatbot wake-up request failed:', error);
      });
    };

    wakeUpChatbot();
  }, []);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-bg-base text-content-primary font-sans selection:bg-accent/30 selection:text-white">
        {/* Global Navigation */}
        <Navbar />

        {/* Page Routes with Suspense fallback */}
        <Suspense
          fallback={
            <div className="flex h-screen items-center justify-center bg-bg-base">
              <div className="flex flex-col items-center gap-3">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-accent border-t-transparent" />
                <span className="font-mono text-xs text-content-muted">Loading interface...</span>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chatbot />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
