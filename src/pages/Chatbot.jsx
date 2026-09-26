import { useState, useEffect, useRef } from 'react';
import { Client } from '@gradio/client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Send, Bot, User, ArrowLeft, Sparkles, RefreshCw, AlertCircle, CheckCircle2, CornerDownLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SUGGESTED_QUESTIONS = [
  'What AI projects has Abdullah built?',
  'What are Abdullah’s strongest technical skills?',
  'Tell me about his AI engineering experience.',
  'What backend frameworks does he work with?'
];

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

  // Connect to Hugging Face Space once
  useEffect(() => {
    let mounted = true;

    const connectToSpace = async () => {
      try {
        setConnectionStatus('connecting');
        const gradioClient = await Client.connect('abdullahtahir/My_Chatbot');
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

    // Add user message to UI immediately
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

      // Lazy connect if client wasn't ready
      if (!activeClient) {
        activeClient = await Client.connect('abdullahtahir/My_Chatbot');
        setClient(activeClient);
        setConnectionStatus('ready');
      }

      // Build history array in Gradio format: [[userMsg1, botMsg1], [userMsg2, botMsg2]]
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

      // Call Hugging Face endpoint
      const result = await activeClient.predict(
        '/generate_answer',
        [
          userMsg,
          history
        ]
      );

      const answer = result?.data?.[0] || "I couldn't generate a response at this time.";

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
          text: 'The AI service is temporarily unavailable or warming up. Please try again in a moment.'
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
      
      {/* Top Header / Back Link & Status */}
      <div className="mb-3 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-content-secondary transition hover:text-content-primary"
        >
          <ArrowLeft size={14} />
          <span>Back to Portfolio</span>
        </Link>

        {/* Honest Connection Status Indicator */}
        <div className="flex items-center gap-2 rounded-full border border-border-subtle bg-surface-1 px-3 py-1 text-xs font-mono">
          {connectionStatus === 'ready' && !loading && (
            <>
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-emerald" />
              <span className="text-secondary-emerald font-medium">Model Ready</span>
            </>
          )}
          {loading && (
            <>
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
              <span className="text-accent font-medium">Generating Response...</span>
            </>
          )}
          {connectionStatus === 'connecting' && !loading && (
            <>
              <RefreshCw size={11} className="animate-spin text-secondary-cyan" />
              <span className="text-secondary-cyan">Connecting to HF Space...</span>
            </>
          )}
          {connectionStatus === 'error' && !loading && (
            <>
              <AlertCircle size={12} className="text-amber-400" />
              <span className="text-amber-400">Offline / Fallback Mode</span>
            </>
          )}
        </div>
      </div>

      {/* Main Chat Container */}
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface-1 shadow-elevation-high">
        
        {/* Chat Header Bar */}
        <div className="flex items-center justify-between border-b border-border-subtle bg-surface-2/60 px-5 py-3.5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 border border-accent/30 text-accent">
              <Bot size={18} />
            </div>
            <div>
              <h2 className="font-display text-sm font-semibold text-content-primary flex items-center gap-2">
                Abdullah's AI Portfolio Assistant
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-surface-1 border border-border-subtle text-content-muted">RAG</span>
              </h2>
              <p className="text-[11px] text-content-muted">
                Powered by LangChain & Hugging Face Spaces
              </p>
            </div>
          </div>
        </div>

        {/* Message Stream */}
        <div className="min-h-0 flex-1 space-y-5 overflow-y-auto p-5 sm:p-6 tech-grid">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {/* Bot Icon */}
              {msg.role === 'bot' && (
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-surface-2 border border-border-medium text-accent">
                  <Bot size={15} />
                </div>
              )}

              {/* Message Bubble */}
              <div
                className={`max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-accent text-white shadow-elevation-low'
                    : 'border border-border-subtle bg-surface-2/90 text-content-primary shadow-elevation-low'
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
                        a: ({ children, href }) => (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent-light underline underline-offset-2 hover:text-white"
                          >
                            {children}
                          </a>
                        ),
                        code: ({ children }) => (
                          <code className="rounded bg-bg-dark border border-border-subtle px-1.5 py-0.5 font-mono text-xs text-accent-light">
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

              {/* User Avatar */}
              {msg.role === 'user' && (
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-surface-2 border border-border-medium text-content-primary">
                  <User size={15} />
                </div>
              )}
            </div>
          ))}

          {/* Thinking / Loading Animation */}
          {loading && (
            <div className="flex gap-3 justify-start items-center">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-surface-2 border border-border-medium text-accent">
                <Bot size={15} />
              </div>
              <div className="rounded-2xl border border-border-subtle bg-surface-2/90 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent delay-150" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent delay-300" />
                  <span className="ml-2 text-xs font-mono text-content-muted">Thinking...</span>
                </div>
              </div>
            </div>
          )}

          {/* Suggested Prompts when few messages */}
          {messages.length <= 2 && !loading && (
            <div className="pt-4 border-t border-border-subtle">
              <p className="text-xs font-mono uppercase tracking-wider text-content-muted mb-2.5 flex items-center gap-1.5">
                <Sparkles size={12} className="text-accent" />
                <span>Suggested prompts</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(q)}
                    className="rounded-lg border border-border-medium bg-surface-2/80 px-3 py-1.5 text-xs text-content-secondary transition hover:border-accent hover:text-content-primary hover:bg-surface-elevated text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div ref={scrollRef} />
        </div>

        {/* Input Bar */}
        <div className="border-t border-border-subtle bg-surface-2/40 p-3 sm:p-4">
          <form onSubmit={handleFormSubmit} className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Abdullah's experience, AI projects, or tech stack..."
              disabled={loading}
              aria-label="Chat input"
              className="w-full rounded-xl border border-border-medium bg-surface-1 py-3.5 pl-4 pr-12 text-sm text-content-primary placeholder-content-muted outline-none transition focus:border-accent focus:ring-1 focus:ring-accent disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white transition hover:bg-accent-hover disabled:opacity-40 disabled:hover:bg-accent"
            >
              <Send size={14} />
            </button>
          </form>
          <div className="mt-2 text-center">
            <p className="text-[10px] font-mono text-content-faint">
              Direct connection to Hugging Face model • Responses generated via RAG architecture
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Chatbot;
