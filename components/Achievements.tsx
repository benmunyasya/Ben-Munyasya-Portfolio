
import React from 'react';
import Section from './Section';
import { ACHIEVEMENTS } from '../constants';
import { CheckCircleIcon } from './Icons';

const Achievements: React.FC = () => {
  return (
    <Section id="achievements" subtitle="What I have achieved" title="Achievements">
      <div className="bg-surface border border-slate-700/50 rounded-lg p-8">
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
            <span className="bg-primary/20 text-primary text-sm font-medium px-4 py-2 rounded-full">Performance Optimization</span>
            <span className="bg-primary/20 text-primary text-sm font-medium px-4 py-2 rounded-full">API Architecture</span>
            <span className="bg-primary/20 text-primary text-sm font-medium px-4 py-2 rounded-full">System Integration</span>
            <span className="bg-primary/20 text-primary text-sm font-medium px-4 py-2 rounded-full">Fintech</span>
        </div>
        <ul className="space-y-4">
          {ACHIEVEMENTS.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <CheckCircleIcon className="w-6 h-6 text-accent flex-shrink-0 mr-3 mt-1" />
              <span className="text-secondary-text">{achievement.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Achievements;
