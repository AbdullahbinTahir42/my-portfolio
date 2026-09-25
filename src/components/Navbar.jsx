import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll spy for active section detection
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'skills', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (id) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-base/85 backdrop-blur-md border-b border-border-subtle shadow-elevation-low py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Brand Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 focus-visible:ring-1 focus-visible:ring-accent rounded-lg"
          aria-label="Abdullah Tahir - Home"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-1 border border-border-medium text-accent font-display font-bold text-sm shadow-inner-light group-hover:border-accent/50 transition-colors">
            AT
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base tracking-tight text-content-primary">
              Abdullah <span className="text-content-secondary font-medium">Tahir</span>
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-accent font-semibold -mt-0.5">
              AI Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-border-subtle bg-surface-1/80 p-1.5 backdrop-blur-sm shadow-inner-light">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === '/' && activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 text-xs font-medium transition-all duration-200 rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                  isActive
                    ? 'text-white'
                    : 'text-content-secondary hover:text-content-primary hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <Motion.div
                    layoutId="navbar-active-indicator"
                    className="absolute inset-0 rounded-full bg-accent/20 border border-accent/40 shadow-accent-sm"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right CTA - AI Chat */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/chat"
            className="group relative inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent transition-all duration-200 hover:bg-accent hover:text-white hover:shadow-accent-sm active:scale-95 focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Sparkles size={14} className="transition-transform group-hover:rotate-12" />
            <span>AI Assistant</span>
            <span className="flex h-1.5 w-1.5 rounded-full bg-secondary-emerald animate-pulse" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="flex md:hidden h-9 w-9 items-center justify-center rounded-lg border border-border-medium bg-surface-1 text-content-secondary hover:text-content-primary focus-visible:ring-2 focus-visible:ring-accent"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden md:hidden border-b border-border-subtle bg-bg-base/95 backdrop-blur-xl px-6 py-5 shadow-elevation-high"
          >
            <div className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id && location.pathname === '/'
                      ? 'bg-accent/15 text-accent border border-accent/30'
                      : 'text-content-secondary hover:bg-white/[0.04] hover:text-content-primary'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-content-faint">#0{NAV_ITEMS.indexOf(item) + 1}</span>
                </button>
              ))}

              <div className="my-2 border-t border-border-subtle pt-3">
                <Link
                  to="/chat"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-lg border border-accent/40 bg-accent/15 px-4 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent hover:text-white"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} />
                    <span>Talk to AI Assistant</span>
                  </div>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;