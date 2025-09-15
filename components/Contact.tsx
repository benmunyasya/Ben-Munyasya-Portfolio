
import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';


const Contact: React.FC = () => {
  return (
    <Section id="contact" subtitle="Get In Touch" title="Contact Me">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-secondary-text mb-8">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open. I'll get back to you as soon as possible!
        </p>
        
        <a 
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-transform duration-300 transform hover:scale-105"
        >
          Say Hello
        </a>
        
        <div className="flex justify-center gap-6 mt-12">
            <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Email" className="text-secondary-text hover:text-primary transition-colors">
                <MailIcon className="w-8 h-8"/>
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-secondary-text hover:text-primary transition-colors">
                <GithubIcon className="w-8 h-8"/>
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-secondary-text hover:text-primary transition-colors">
                <LinkedinIcon className="w-8 h-8"/>
            </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
