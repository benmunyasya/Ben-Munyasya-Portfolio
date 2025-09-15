
import React from 'react';
import Section from './Section';
import { FRONTEND_SKILLS, BACKEND_SKILLS } from '../constants';
import type { Skill } from '../types';

const SkillCard: React.FC<{ title: string; skills: Skill[] }> = ({ title, skills }) => (
  <div className="bg-surface border border-slate-700/50 rounded-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
    <h3 className="text-xl font-bold text-center mb-8 text-primary">{title}</h3>
    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
      {skills.map((skill) => (
        <div key={skill.name} className="flex items-start">
          <div className="text-primary mr-3 mt-1 flex-shrink-0">{skill.icon}</div>
          <div>
            <h4 className="font-semibold text-primary-text">{skill.name}</h4>
            <p className="text-sm text-secondary-text">{skill.level}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <Section id="experience" subtitle="Skills That I Possess" title="My Experience">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillCard title="Frontend Development" skills={FRONTEND_SKILLS} />
        <SkillCard title="Backend & Software Development" skills={BACKEND_SKILLS} />
      </div>
    </Section>
  );
};

export default Experience;
