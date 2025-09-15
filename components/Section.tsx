
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-sm font-semibold uppercase text-primary tracking-widest">{subtitle}</h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-primary-text sm:text-4xl">{title}</p>
      </div>
      {children}
    </section>
  );
};

export default Section;
