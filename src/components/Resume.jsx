import { experience, education, skills } from '../data';
import { Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <section id="resume" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
      <div id="skills" className="mb-20 rounded-[28px] border border-white/10 bg-slate-900/50 p-8 shadow-[0_18px_60px_rgba(4,8,20,0.24)] backdrop-blur sm:p-10">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Core capabilities</p>
            <h2 className="section-title text-3xl font-bold text-white sm:text-4xl">Technical Skills</h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Sparkles size={16} className="text-brand" />
            Focused on dependable delivery and high-impact execution
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-slate-200"
            >
              <skill.icon size={18} className="text-brand" />
              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-[28px] border border-white/10 bg-slate-900/40 p-8 shadow-[0_18px_60px_rgba(4,8,20,0.24)] backdrop-blur">
          <h3 className="mb-8 flex items-center gap-3 text-2xl font-semibold text-brand">
            <Briefcase /> Experience
          </h3>
          <div className="space-y-6 border-l border-white/10 pl-6">
            {experience.map((job, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-brand bg-slate-950" />
                <h4 className="text-xl font-semibold text-white">{job.role}</h4>
                <p className="mt-1 text-sm font-medium text-brand">{job.company} • {job.date}</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">{job.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-slate-900/40 p-8 shadow-[0_18px_60px_rgba(4,8,20,0.24)] backdrop-blur">
          <h3 className="mb-8 flex items-center gap-3 text-2xl font-semibold text-brand">
            <GraduationCap /> Education
          </h3>
          <div className="space-y-6 border-l border-white/10 pl-6">
            {education.map((edu, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-slate-500 bg-slate-950" />
                <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                <p className="mt-1 text-sm font-medium text-brand">{edu.school}</p>
                <p className="mt-3 text-sm text-slate-400">{edu.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;