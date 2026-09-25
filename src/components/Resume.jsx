import { motion as Motion } from 'framer-motion';
import { experience, education, skills } from '../data';
import { Briefcase, GraduationCap, Cpu, Layers, Server, Code, Sparkles, CheckCircle2 } from 'lucide-react';

// Domain categorization mapping the 9 actual skills from data.js
const SKILL_DOMAINS = [
  {
    title: 'AI & Intelligent Systems',
    description: 'Autonomous workflows, retrieval pipelines, and computer vision models',
    icon: Cpu,
    skills: ['Machine Learning', 'Computer Vision', 'Agentic AI']
  },
  {
    title: 'Agentic Frameworks & LLMs',
    description: 'Multi-agent orchestration, tool-use, and structured LLM reasoning',
    icon: Sparkles,
    skills: ['LangChain & CrewAI']
  },
  {
    title: 'Backend Architecture',
    description: 'High-throughput async APIs, microservices, and robust architectures',
    icon: Server,
    skills: ['Python', 'FastAPI', 'Django']
  },
  {
    title: 'Data & Client Engineering',
    description: 'Relational data modeling and responsive, modern client applications',
    icon: Layers,
    skills: ['SQL / PostgreSQL', 'React & Frontend']
  }
];

const Resume = () => {
  return (
    <section id="experience" className="relative px-6 py-28 max-w-6xl mx-auto">
      
      {/* ========================================================
          1. SKILLS SECTION: Structured Professional Domains
      ======================================================== */}
      <div id="skills" className="mb-32">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 border-b border-border-subtle pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Technical Capabilities
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-content-primary">
              Core Engineering Domains
            </h2>
          </div>
          <p className="text-sm text-content-secondary max-w-md">
            Production-focused technical proficiencies applied to building real-world AI software and resilient backends.
          </p>
        </div>

        {/* 4 Structured Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILL_DOMAINS.map((domain, index) => (
            <Motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative rounded-2xl border border-border-subtle bg-surface-1 p-6 transition-all duration-300 hover:border-border-highlight hover:shadow-elevation-medium"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-2 border border-border-medium text-accent">
                    <domain.icon size={19} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-content-primary">
                      {domain.title}
                    </h3>
                    <p className="text-xs text-content-muted mt-0.5">
                      {domain.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills matching this domain */}
              <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-border-subtle">
                {domain.skills.map((skillName) => {
                  const skillData = skills.find((s) => s.name === skillName);
                  const Icon = skillData?.icon || Code;
                  return (
                    <span
                      key={skillName}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border-medium bg-surface-2 px-3 py-1.5 text-xs font-mono font-medium text-content-primary transition-colors group-hover:border-accent/30"
                    >
                      <Icon size={13} className="text-accent" />
                      <span>{skillName}</span>
                    </span>
                  );
                })}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>

      {/* ========================================================
          2. EXPERIENCE & EDUCATION: Editorial Career Timeline
      ======================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Experience Timeline (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-accent font-semibold mb-2">
            <Briefcase size={15} />
            <span>Work History</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-content-primary mb-8">
            Professional Experience
          </h2>

          <div className="relative pl-6 sm:pl-8 space-y-10 border-l border-border-medium">
            {experience.map((item, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-bg-base transition-transform group-hover:scale-125">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                </div>

                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display font-semibold text-lg text-content-primary group-hover:text-accent transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-xs font-mono text-content-muted px-2.5 py-0.5 rounded border border-border-subtle bg-surface-1">
                    {item.date}
                  </span>
                </div>

                <div className="mt-1 flex items-center gap-2 text-sm font-medium text-accent">
                  <span>{item.company}</span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-content-secondary">
                  {item.desc}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>

        {/* Education & Academic Rigor (5 Cols) */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-secondary-cyan font-semibold mb-2">
            <GraduationCap size={15} />
            <span>Academic Background</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-content-primary mb-8">
            Education
          </h2>

          <div className="relative pl-6 sm:pl-8 space-y-8 border-l border-border-medium">
            {education.map((edu, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-secondary-cyan bg-bg-base transition-transform group-hover:scale-125">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary-cyan" />
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-mono text-content-muted px-2 py-0.5 rounded border border-border-subtle bg-surface-1 self-start mb-2">
                    {edu.date}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-content-primary">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm text-secondary-cyan font-medium">
                    {edu.school}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-border-subtle bg-surface-1/70 p-4 text-xs text-content-secondary leading-relaxed">
                  <p className="font-mono text-content-muted mb-1.5 uppercase tracking-wider text-[10px]">Specialized Curriculum</p>
                  Foundations in Machine Learning, Deep Neural Networks, Natural Language Processing, Autonomous Systems, and Algorithmic Complexity.
                </div>
              </Motion.div>
            ))}
          </div>

          {/* Quick Stat / Credibility Card */}
          <div className="mt-10 rounded-2xl border border-border-subtle bg-gradient-to-br from-surface-1 to-surface-2 p-5 shadow-elevation-low">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 text-accent">
                <CheckCircle2 size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-content-primary">Production-First Methodology</h4>
                <p className="mt-1 text-xs text-content-secondary leading-relaxed">
                  Bridging academic machine learning research with practical software engineering, containerized services, and user-facing interfaces.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Resume;