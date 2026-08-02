import { useState, useEffect, useRef } from 'react';
import { Client } from '@gradio/client';
import { Send, Bot, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hello! I’m Abdullah’s AI assistant. You can ask me about his background, projects, or technical focus." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    try {
      const client = await Client.connect('abdullahtahir/My_Chatbot');
      const result = await client.predict('/predict', { question: userMsg });
      setMessages((prev) => [...prev, { role: 'bot', text: result.data[0] }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'bot', text: 'The AI service is temporarily unavailable. Please try again shortly.' }]);
    }
    setLoading(false);
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 pb-8 pt-24">
      <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-brand">
        <ArrowLeft size={18} /> Back to Portfolio
      </Link>

      <div className="flex flex-1 flex-col overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/60 shadow-[0_20px_60px_rgba(4,8,20,0.3)] backdrop-blur">
        <div className="flex items-center gap-4 border-b border-white/10 bg-slate-950/70 p-4">
          <div className="rounded-full bg-brand/20 p-2">
            <Bot size={22} className="text-brand" />
          </div>
          <div>
            <h2 className="font-semibold text-white">Abdullah's AI Agent</h2>
            <p className="flex items-center gap-2 text-xs text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> Online
            </p>
          </div>
        </div>

        <div className="flex-1 space-y-5 overflow-y-auto p-5 sm:p-6">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'bot' && (
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand/20">
                  <Bot size={15} className="text-brand" />
                </div>
              )}

              <div className={`max-w-[85%] rounded-2xl p-4 text-sm leading-7 ${msg.role === 'user' ? 'bg-brand text-white' : 'border border-white/10 bg-slate-800/80 text-slate-200'}`}>
                {msg.text}
              </div>

              {msg.role === 'user' && (
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand/20">
                  <User size={15} className="text-brand" />
                </div>
              )}
            </div>
          ))}
          {loading && (
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/20">
                <Bot size={15} className="text-brand" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3">
                <div className="flex gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 delay-100" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 delay-200" />
                </div>
              </div>
            </div>
          )}
          <div ref={scrollRef} />
        </div>

        <div className="border-t border-white/10 bg-slate-950/60 p-4">
          <form onSubmit={handleSend} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about Abdullah..."
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 py-3.5 pl-4 pr-12 text-sm text-white outline-none transition focus:border-brand"
            />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-brand p-2 transition hover:bg-brand-dark disabled:opacity-50" disabled={loading}>
              <Send size={18} className="text-white" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;