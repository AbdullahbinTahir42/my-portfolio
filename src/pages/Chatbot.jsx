import { useState, useEffect, useRef } from 'react';
import { Client } from "@gradio/client"; 
import { Send, Bot, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hello! I am Abdullah's AI Assistant. You can ask me about his Resume, Projects, or Skills." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput("");
    setLoading(true);

    try {
      const client = await Client.connect("abdullahtahir/My_Chatbot");
      const result = await client.predict("/predict", { question: userMsg });
      setMessages(prev => [...prev, { role: 'bot', text: result.data[0] }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Error connecting to AI. Please try again later." }]);
    }
    setLoading(false);
  };

  return (
    <div className="pt-24 min-h-screen flex flex-col max-w-4xl mx-auto px-4 pb-6">
      <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand mb-6 transition">
        <ArrowLeft size={20} /> Back to Portfolio
      </Link>

      <div className="flex-1 bg-[#2a2a2a] rounded-2xl border border-gray-800 shadow-2xl flex flex-col overflow-hidden">
        {/* Chat Header */}
        <div className="bg-[#333] p-4 border-b border-gray-700 flex items-center gap-4">
          <div className="p-2 bg-brand rounded-full">
            <Bot size={24} className="text-white" />
          </div>
          <div>
            <h2 className="font-bold text-white">Abdullah's AI Agent</h2>
            <p className="text-xs text-green-400 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Online
            </p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 h-[60vh]">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center flex-shrink-0">
                  <Bot size={16} className="text-brand" />
                </div>
              )}
              
              <div className={`p-4 rounded-2xl max-w-[80%] text-sm leading-relaxed ${
                msg.role === 'user' 
                ? 'bg-brand text-white rounded-tr-sm' 
                : 'bg-[#333] text-gray-200 rounded-tl-sm border border-gray-700'
              }`}>
                {msg.text}
              </div>

              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <User size={16} className="text-blue-500" />
                </div>
              )}
            </div>
          ))}
          {loading && (
            <div className="flex gap-4">
               <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center">
                  <Bot size={16} className="text-brand" />
                </div>
                <div className="bg-[#333] px-4 py-3 rounded-2xl rounded-tl-sm border border-gray-700">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
            </div>
          )}
          <div ref={scrollRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-[#333] border-t border-gray-700">
          <form onSubmit={handleSend} className="relative">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="w-full bg-[#222] text-white rounded-xl py-4 pl-4 pr-12 outline-none border border-gray-600 focus:border-brand transition"
            />
            <button type="submit" className="absolute right-2 top-2 bg-brand p-2 rounded-lg hover:bg-brand-dark transition disabled:opacity-50" disabled={loading}>
              <Send size={20} color="white" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;