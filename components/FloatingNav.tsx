
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { NAVIGATION } from '../constants';
import type { Theme } from '../types';
import { SunIcon, MoonIcon } from './Icons';

interface FloatingNavProps {
  theme: Theme;
  toggleTheme: () => void;
}

const FloatingNav: React.FC<FloatingNavProps> = ({ theme, toggleTheme }) => {
  const [activeNav, setActiveNav] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '#home';
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = `#${section.id}`;
        }
      });
      setActiveNav(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isScrolled) {
    return null;
  }

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 bg-surface/70 backdrop-blur-md border border-slate-600/50 shadow-lg rounded-full px-4 py-2">
        {NAVIGATION.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            title={item.label}
            className={`p-2 rounded-full transition-colors duration-300 ${activeNav === `#${item.id}` ? 'bg-accent text-white' : 'hover:bg-slate-700'}`}
          >
            {item.icon}
          </a>
        ))}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full transition-colors duration-300 hover:bg-slate-700"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  );
};

export default FloatingNav;
