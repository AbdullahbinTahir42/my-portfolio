import { useState, useEffect, useRef } from 'react';
import { Client } from '@gradio/client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Send, Bot, User, ArrowLeft, Sparkles, RefreshCw, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SUGGESTED_QUESTIONS = [
  'What AI projects has Abdullah built?',
  'What are Abdullah’s strongest technical skills?',
  'Tell me about his AI engineering experience.',
  'What backend frameworks does he work with?'
];

const SPACE_ID = 'abdullahtahir/My_Chatbot';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: "Hello! I'm Abdullah's AI Assistant. You can ask me about his background in AI engineering, agentic systems, full-stack projects, or technical skills."
    }
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('connecting'); // 'connecting' | 'ready' | 'error'

  const scrollRef = useRef(null);

  // Connect to Hugging Face Space on mount
  useEffect(() => {
    let mounted = true;

    const connectToSpace = async () => {
      try {
        setConnectionStatus('connecting');
        const gradioClient = await Client.connect(SPACE_ID);
        if (mounted) {
          setClient(gradioClient);
          setConnectionStatus('ready');
        }
      } catch (error) {
        console.error('Failed to connect to Hugging Face Space:', error);
        if (mounted) {
          setConnectionStatus('error');
        }
      }
    };

    connectToSpace();

    return () => {
      mounted = false;
    };
  }, []);

  // Auto-scroll to latest message
  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    });
  }, [messages, loading]);

  // Send message
  const sendMessage = async (messageText) => {
    const userMsg = (messageText || input).trim();
    if (!userMsg || loading) return;

    // Immediately push user message to UI
    setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    try {
      let activeClient = client;

      // Lazy re-connect if not established
      if (!activeClient) {
        setConnectionStatus('connecting');
        activeClient = await Client.connect(SPACE_ID);
        setClient(activeClient);
        setConnectionStatus('ready');
      }

      // Format previous turns for backend [[user, bot], ...]
      const history = [];
      let tempUser = null;
      for (const msg of messages) {
        if (msg.role === 'user') {
          tempUser = msg.text;
        } else if (msg.role === 'bot' && tempUser !== null) {
          history.push([tempUser, msg.text]);
          tempUser = null;
        }
      }

      // Request prediction from HF Space
      const result = await activeClient.predict('/generate_answer', [
        userMsg,
        history
      ]);

      const answer = result?.data?.[0] || "I couldn't generate a response at this time.";

      setMessages((prev) => [...prev, { role: 'bot', text: answer }]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setConnectionStatus('error');
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: 'The AI service is temporarily unavailable or warming up. Please check if the Hugging Face Space is active and try again.'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div className="mx-auto flex h-screen max-w-4xl flex-col overflow-hidden px-4 pb-4 pt-24">
      {/* Top Header & Status */}
      <div className="mb-3 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-content-secondary transition hover:text-content-primary"
        >
          <ArrowLeft size={14} />
          <span>Back to Portfolio</span>
        </Link>

        {/* Live Status Indicator */}
        <div className="flex items-center gap-2 rounded-full border border-border-subtle bg-surface-1 px-3 py-1 text-xs font-mono">
          {connectionStatus === 'ready' && !loading && (
            <>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-emerald-500 font-medium">Model Ready</span>
            </>
          )}
          {loading && (
            <>
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-ping" />
              <span className="text-indigo-400 font-medium">Generating...</span>
            </>
          )}
          {connectionStatus === 'connecting' && !loading && (
            <>
              <RefreshCw size={11} className="animate-spin text-cyan-400" />
              <span className="text-cyan-400">Connecting to Space...</span>
            </>
          )}
          {connectionStatus === 'error' && !loading && (
            <>
              <AlertCircle size={12} className="text-amber-400" />
              <span className="text-amber-400">Space Unavailable</span>
            </>
          )}
        </div>
      </div>

      {/* Main Chat Container */}
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface-1 shadow-lg">
        {/* Chat Header */}
        <div className="flex items-center justify-between border-b border-border-subtle bg-surface-2/60 px-5 py-3.5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400">
              <Bot size={18} />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-content-primary flex items-center gap-2">
                Abdullah's AI Portfolio Assistant
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-1 border border-border-subtle text-content-muted">
                  Llama-3.3
                </span>
              </h2>
              <p className="text-[11px] text-content-muted">
                Powered by Groq & Hugging Face Spaces
              </p>
            </div>
          </div>
        </div>

        {/* Message Stream */}
        <div className="min-h-0 flex-1 space-y-5 overflow-y-auto p-5 sm:p-6">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'bot' && (
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-surface-2 border border-border-medium text-indigo-400">
                  <Bot size={15} />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-indigo-600 text-white shadow'
                    : 'border border-border-subtle bg-surface-2/90 text-content-primary shadow-sm'
                }`}
              >
                {msg.role === 'bot' ? (
                  <div className="prose prose-invert prose-sm max-w-none">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        h1: ({ children }) => <h1 className="mb-2 mt-3 text-base font-bold text-white">{children}</h1>,
                        h2: ({ children }) => <h2 className="mb-2 mt-3 text-sm font-bold text-white">{children}</h2>,
                        h3: ({ children }) => <h3 className="mb-1 mt-2 text-xs font-semibold text-white">{children}</h3>,
                        p: ({ children }) => <p className="mb-2.5 last:mb-0 text-content-primary">{children}</p>,
                        ul: ({ children }) => <ul className="mb-2.5 ml-4 list-disc space-y-1">{children}</ul>,
                        ol: ({ children }) => <ol className="mb-2.5 ml-4 list-decimal space-y-1">{children}</ol>,
                        li: ({ children }) => <li className="pl-1 text-content-secondary">{children}</li>,
                        strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                        code: ({ children }) => (
                          <code className="rounded bg-black/40 border border-white/10 px-1.5 py-0.5 font-mono text-xs text-indigo-300">
                            {children}
                          </code>
                        )
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                )}
              </div>

              {msg.role === 'user' && (
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-surface-2 border border-border-medium text-content-primary">
                  <User size={15} />
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {loading && (
            <div className="flex gap-3 justify-start items-center">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-surface-2 border border-border-medium text-indigo-400">
                <Bot size={15} />
              </div>
              <div className="rounded-2xl border border-border-subtle bg-surface-2/90 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500 delay-150" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500 delay-300" />
                  <span className="ml-2 text-xs font-mono text-content-muted">Thinking...</span>
                </div>
              </div>
            </div>
          )}

          {/* Suggested Prompts */}
          {messages.length <= 2 && !loading && (
            <div className="pt-4 border-t border-border-subtle">
              <p className="text-xs font-mono uppercase tracking-wider text-content-muted mb-2.5 flex items-center gap-1.5">
                <Sparkles size={12} className="text-indigo-400" />
                <span>Suggested prompts</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(q)}
                    className="rounded-lg border border-border-medium bg-surface-2/80 px-3 py-1.5 text-xs text-content-secondary transition hover:border-indigo-500 hover:text-white hover:bg-surface-elevated text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div ref={scrollRef} />
        </div>

        {/* Input Form */}
        <div className="border-t border-border-subtle bg-surface-2/40 p-3 sm:p-4">
          <form onSubmit={handleFormSubmit} className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Abdullah's experience, AI projects, or tech stack..."
              disabled={loading}
              className="w-full rounded-xl border border-border-medium bg-surface-1 py-3.5 pl-4 pr-12 text-sm text-content-primary placeholder-content-muted outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white transition hover:bg-indigo-500 disabled:opacity-40"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
