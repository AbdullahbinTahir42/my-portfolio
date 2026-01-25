import { experience, education, skills } from '../data';
import { Briefcase, GraduationCap } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-24 px-6 max-w-7xl mx-auto">
      
      {/* Skills Section First */}
      <div id="skills" className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-center">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-[#2a2a2a] border border-gray-800 px-6 py-4 rounded-xl hover:border-brand hover:bg-brand/5 transition cursor-default">
              <skill.icon size={24} className="text-brand" />
              <span className="font-medium text-gray-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Experience Column */}
        <div>
          <h3 className="flex items-center gap-3 text-2xl font-bold mb-8 text-brand">
            <Briefcase /> Experience
          </h3>
          <div className="space-y-8 border-l-2 border-gray-800 pl-8 ml-3 relative">
            {experience.map((job, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[41px] bg-[#222] p-2 rounded-full border-2 border-brand">
                  <div className="w-2 h-2 bg-brand rounded-full"></div>
                </div>
                <h4 className="text-xl font-bold">{job.role}</h4>
                <p className="text-brand text-sm mb-2">{job.company} | {job.date}</p>
                <p className="text-gray-400 text-sm">{job.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <h3 className="flex items-center gap-3 text-2xl font-bold mb-8 text-brand">
            <GraduationCap /> Education
          </h3>
          <div className="space-y-8 border-l-2 border-gray-800 pl-8 ml-3 relative">
            {education.map((edu, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[41px] bg-[#222] p-2 rounded-full border-2 border-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <h4 className="text-xl font-bold">{edu.degree}</h4>
                <p className="text-brand text-sm mb-2">{edu.school}</p>
                <p className="text-gray-500 text-sm">{edu.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;