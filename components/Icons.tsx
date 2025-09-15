
import React from 'react';

// Generic Icon Props
interface IconProps {
  className?: string;
}

// Navigation Icons
export const HomeIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.122 0l8.954 8.955M1.5 10.5v9.75a3 3 0 003 3h15a3 3 0 003-3V10.5" />
  </svg>
);

export const UserIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

export const CodeIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5 0l-4.5 9" />
  </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.075c0 1.313-.972 2.4-2.215 2.541-1.44.16-2.535-1.03-2.535-2.36V14.15m0-3.375c.622-1.043 1.895-1.675 3.25-1.675 2.133 0 3.851 1.637 3.851 3.65V14.15m-12.8 0v4.075c0 1.313.972 2.4 2.215 2.541 1.44.16 2.535-1.03 2.535-2.36V14.15m0-3.375c-.622-1.043-1.895-1.675-3.25-1.675-2.133 0-3.851 1.637-3.851 3.65V14.15m6.4 0v-2.075a3.375 3.375 0 00-6.75 0v2.075" />
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

// Theme Icons
export const SunIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

// General Icons
export const DownloadIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

export const MessageIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 01-2.53-0.481M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const ExternalLinkIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0V6.375c0-.621.504-1.125 1.125-1.125h4.125c.621 0 1.125.504 1.125 1.125V10.5m-7.5-4.125h4.5v4.5h-4.5v-4.5z" />
  </svg>
);

// Social & Brand Icons
export const GithubIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.75c0-1.4-1.2-2.5-2.5-2.5S11 12.85 11 14.25V19h-3v-9h2.9v1.3a3.5 3.5 0 013.1-1.8C17.5 9.5 19 11.4 19 14.25z"></path>
  </svg>
);

// Tech Icons (simplified for brevity)
export const HtmlIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
export const CssIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
export const JsIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
export const BootstrapIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
export const JQueryIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
export const GitlabIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
export const TailwindIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
export const ReactIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
export const VueIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
export const CppIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
export const PythonIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
export const PhpIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
export const DjangoIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
export const JavaIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
export const MongoIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
export const FirebaseIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
export const MysqlIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
export const LaravelIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
export const PostgresIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
export const RedisIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
export const RabbitMqIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
export const KafkaIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
export const DockerIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => <span>#</span>;
