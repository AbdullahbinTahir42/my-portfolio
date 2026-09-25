import { personalDetails } from '../data';
import { Github, Linkedin, Mail, ArrowUp, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border-subtle bg-bg-dark/80 px-6 pt-16 pb-12 text-content-secondary">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border-subtle">
          
          {/* Brand & Closing Pitch (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-surface-1 border border-border-medium text-accent font-display font-bold text-xs">
                AT
              </div>
              <span className="font-display font-bold text-base text-content-primary">
                Abdullah Tahir
              </span>
            </div>
            
            <h3 className="font-display text-2xl font-bold text-content-primary max-w-sm">
              Let's build something intelligent together.
            </h3>
            
            <p className="text-sm text-content-muted max-w-md leading-relaxed">
              Specialized in production-grade AI systems, autonomous agentic workflows, high-throughput backend APIs, and modern user-centric interfaces.
            </p>

            <div className="pt-2">
              <Link
                to="/chat"
                className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:text-accent-light underline underline-offset-4"
              >
                <Sparkles size={13} />
                <span>Ask my AI assistant a question</span>
              </Link>
            </div>
          </div>

          {/* Core Competencies (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-content-faint">Focus Areas</p>
            <ul className="space-y-2 text-xs font-medium text-content-secondary">
              <li>Autonomous Agents & Workflows</li>
              <li>Retrieval Augmented Generation (RAG)</li>
              <li>Computer Vision & Classification</li>
              <li>FastAPI & Async Microservices</li>
              <li>PostgreSQL & Data Modeling</li>
              <li>Full-Stack React Interfaces</li>
            </ul>
          </div>

          {/* Connect & Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-content-faint">Connect</p>
            <div className="flex flex-col space-y-2 text-xs font-medium">
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-content-secondary hover:text-content-primary transition-colors"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-content-secondary hover:text-content-primary transition-colors"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalDetails.email}`}
                className="inline-flex items-center gap-2 text-content-secondary hover:text-content-primary transition-colors"
              >
                <Mail size={14} />
                <span>{personalDetails.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-content-faint">
          <p>© {new Date().getFullYear()} Abdullah Tahir. Designed with precision & purpose.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-content-muted hover:text-content-primary transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
