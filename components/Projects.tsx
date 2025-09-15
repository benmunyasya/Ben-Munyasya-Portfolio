
import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import { ExternalLinkIcon, GithubIcon } from './Icons';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-surface rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-700/50 flex flex-col">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-primary-text">{project.title}</h3>
        <p className="text-sm text-primary mb-2">{project.category}</p>
        <p className="text-secondary-text text-sm mb-4 flex-grow">{project.description}</p>
        
        <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2 text-primary-text">Key Metrics:</h4>
            <ul className="list-disc list-inside text-secondary-text text-sm space-y-1">
                {project.metrics.map(metric => <li key={metric}>{metric}</li>)}
            </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span key={tech} className="bg-slate-700 text-slate-300 text-xs font-mono px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-start gap-4">
          {project.liveLink && (
             <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
               <ExternalLinkIcon className="w-4 h-4" /> Live Demo
             </a>
          )}
          {project.codeLink && (
             <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                <GithubIcon className="w-4 h-4" /> View Code
             </a>
          )}
        </div>
      </div>
    </div>
  );
};


const Projects: React.FC = () => {
  return (
    <Section id="portfolio" subtitle="My Recent Projects" title="Portfolio">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
