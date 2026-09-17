import { useState, useEffect, useRef } from 'react';
import { Client } from '@gradio/client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Send, Bot, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: "Hello! I'm Abdullah's AI assistant. You can ask me about his background, projects, skills, or technical focus."
    }
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState(null);

  const scrollRef = useRef(null);

  // Connect to Hugging Face once
  useEffect(() => {
    let mounted = true;

    const connectToSpace = async () => {
      try {
        const gradioClient = await Client.connect('abdullahtahir/My_Chatbot');
        if (mounted) {
          setClient(gradioClient);
        }
      } catch (error) {
        console.error('Failed to connect to Hugging Face Space:', error);
      }
    };

    connectToSpace();

    return () => {
      mounted = false;
    };
  }, []);

  // Auto scroll to latest message
  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    });
  }, [messages, loading]);

  // Send message
  const handleSend = async (e) => {
    e.preventDefault();

    const userMsg = input.trim();

    if (!userMsg || loading) {
      return;
    }

    // Add user message immediately
    setMessages((prev) => [
      ...prev,
      {
        role: 'user',
        text: userMsg
      }
    ]);

    setInput('');
    setLoading(true);

    try {
      let activeClient = client;

      // Connect if the client isn't ready yet
      if (!activeClient) {
        activeClient = await Client.connect('abdullahtahir/My_Chatbot');
        setClient(activeClient);
      }

      // 1. Build history array in Gradio format: [[userMsg1, botMsg1], [userMsg2, botMsg2]]
      // We use the current `messages` state which represents history BEFORE the new userMsg
      const history = [];
      let lastUserMsg = null;
      for (const msg of messages) {
        if (msg.role === 'user') {
          lastUserMsg = msg.text;
        } else if (msg.role === 'bot' && lastUserMsg !== null) {
          history.push([lastUserMsg, msg.text]);
          lastUserMsg = null;
        }
      }

      // 2. Call the '/chat' endpoint and pass the [message, history] array
      const result = await activeClient.predict(
        '/chat',
        [
          userMsg,
          history
        ]
      );

      const answer = result?.data?.[0] || "I couldn't generate a response.";

      // Add bot response
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: answer
        }
      ]);

    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: 'The AI service is temporarily unavailable. Please try again shortly.'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto flex h-screen max-w-4xl flex-col overflow-hidden px-4 pb-4 pt-24">

      {/* Back to Portfolio */}
      <Link
        to="/"
        className="mb-4 inline-flex flex-shrink-0 items-center gap-2 text-sm text-slate-400 transition hover:text-brand"
      >
        <ArrowLeft size={18} />
        Back to Portfolio
      </Link>

      {/* Chat Container */}
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/60 shadow-[0_20px_60px_rgba(4,8,20,0.3)] backdrop-blur">

        {/* Header */}
        <div className="flex flex-shrink-0 items-center gap-4 border-b border-white/10 bg-slate-950/70 p-4">
          <div className="rounded-full bg-brand/20 p-2">
            <Bot size={22} className="text-brand" />
          </div>
          <div>
            <h2 className="font-semibold text-white">Abdullah's AI Agent</h2>
            <p className="flex items-center gap-2 text-xs text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Online
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="min-h-0 flex-1 space-y-6 overflow-y-auto p-5 sm:p-6">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {/* Bot Avatar */}
              {msg.role === 'bot' && (
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand/20">
                  <Bot size={15} className="text-brand" />
                </div>
              )}

              {/* Message Bubble */}
              <div
                className={`max-w-[90%] rounded-2xl p-4 text-sm ${
                  msg.role === 'user'
                    ? 'bg-brand text-white leading-6'
                    : 'border border-white/10 bg-slate-800/80 text-slate-200'
                }`}
              >
                {msg.role === 'bot' ? (
                  <div className="prose prose-invert prose-sm max-w-none leading-7">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        h1: ({ children }) => <h1 className="mb-3 mt-1 text-lg font-semibold text-white">{children}</h1>,
                        h2: ({ children }) => <h2 className="mb-2 mt-4 text-base font-semibold text-white">{children}</h2>,
                        h3: ({ children }) => <h3 className="mb-2 mt-3 text-sm font-semibold text-white">{children}</h3>,
                        p: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,
                        ul: ({ children }) => <ul className="mb-3 ml-5 list-disc space-y-1.5">{children}</ul>,
                        ol: ({ children }) => <ol className="mb-3 ml-5 list-decimal space-y-1.5">{children}</ol>,
                        li: ({ children }) => <li className="pl-1">{children}</li>,
                        strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                        a: ({ children, href }) => (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand underline underline-offset-2 hover:opacity-80"
                          >
                            {children}
                          </a>
                        ),
                        code: ({ children }) => (
                          <code className="rounded bg-slate-900 px-1.5 py-0.5 text-xs text-brand">
                            {children}
                          </code>
                        )
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  </div>
                ) : (
                  msg.text
                )}
              </div>

              {/* User Avatar */}
              {msg.role === 'user' && (
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand/20">
                  <User size={15} className="text-brand" />
                </div>
              )}
            </div>
          ))}

          {/* Loading Indicator */}
          {loading && (
            <div className="flex gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand/20">
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

          {/* Scroll Anchor */}
          <div ref={scrollRef} />
        </div>

        {/* Input */}
        <div className="flex-shrink-0 border-t border-white/10 bg-slate-950/60 p-4">
          <form onSubmit={handleSend} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about Abdullah..."
              disabled={loading}
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 py-3.5 pl-4 pr-12 text-sm text-white outline-none transition focus:border-brand disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-brand p-2 transition hover:bg-brand-dark disabled:opacity-50"
            >
              <Send size={18} className="text-white" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
