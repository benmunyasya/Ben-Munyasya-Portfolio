
import React from 'react';
import Section from './Section';
import { STATS } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" subtitle="Get To Know" title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-1 flex justify-center">
          <div className="bg-gradient-to-br from-accent to-primary rounded-3xl p-1 transform -rotate-6 hover:rotate-0 transition-transform duration-500 ease-in-out">
            <div className="bg-surface rounded-2xl p-1">
              <img
                src="https://benmunyasya.github.io/myportfolio/static/media/me-about1.291f9f92fd9b42536e24.jpg"
                alt="Benjamin Munyasya Portrait"
                className="rounded-xl aspect-square object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {STATS.map((stat, index) => (
              <div key={index} className="bg-surface border border-slate-700/50 rounded-lg p-4 text-center hover:bg-accent hover:text-white transition-all duration-300 cursor-default group">
                <p className="font-bold text-lg">{stat.label}</p>
                <p className="text-sm text-secondary-text dark:group-hover:text-slate-200">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="text-secondary-text space-y-4">
            <p>
              With over five years in full-stack web development, I specialize in translating complex requirements into innovative and high-performance software solutions. My experience is rooted in building robust backend systems with Python (Django) and PHP (Laravel), creating responsive frontends, and optimizing for speed and scale.
            </p>
            <p>
              Key projects I've led include developing a high-scale payments platform with USSD functionality to enhance accessibility, architecting a suite of enterprise workflow tools for Kenya Wildlife Service, and deploying a scalable RESTful API that improved data retrieval speeds by 50% for both web and mobile clients.
            </p>
            <p>
              I thrive in collaborative, agile teams and am committed to continuous learning to tackle new challenges and meet evolving industry trends. I have a proven track record of delivering high-quality applications, improving system performance, and mentoring team members to enhance productivity. 
            </p>
             <p>
              Let's connect to discuss how my skills in performance engineering and system architecture can contribute to your organization's success.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;