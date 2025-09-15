
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import FloatingNav from './components/FloatingNav';
import { Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="bg-background text-primary-text min-h-screen pattern-bg">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <Header />
        <About />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <FloatingNav theme={theme} toggleTheme={toggleTheme} />
      <footer className="text-center py-12 text-secondary-text text-sm">
        <p>Designed & Built by Benjamin Munyasya</p>
        <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;