
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { DownloadIcon, MessageIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="max-w-3xl">
        <p className="text-primary text-md mb-2">Hello I'm</p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-primary-text tracking-tight">
          {PERSONAL_INFO.name}
        </h1>
        <h2 className="text-xl md:text-2xl text-secondary-text mt-4">
          {PERSONAL_INFO.title}
        </h2>
        <p className="text-secondary-text max-w-xl mx-auto mt-6">
          {PERSONAL_INFO.summary}
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-opacity-90 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <DownloadIcon className="w-5 h-5" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-background dark:bg-surface hover:bg-primary hover:text-white dark:hover:text-slate-900 transition-colors duration-300 ease-in-out"
          >
            <MessageIcon className="w-5 h-5" />
            Let's Talk
          </a>
        </div>
      </div>
      
      <div className="mt-16 w-full max-w-2xl">
        <div className="relative" style={{ paddingBottom: '75%' /* 4:3 Aspect Ratio */ }}>
          <img 
            src="https://benmunyasya.github.io/myportfolio/static/media/me.895661d1ef290ee68846.png" 
            alt="Isometric illustration of a software engineer interacting with a large mobile application interface" 
            className="absolute h-full w-full object-contain"
            loading="eager"
          />
        </div>
      </div>
      
      <div className="absolute bottom-10 right-4 transform -rotate-90 hidden md:block">
        <span className="text-secondary-text text-sm tracking-widest animate-pulse">Scroll Down</span>
      </div>
    </section>
  );
};

export default Header;
