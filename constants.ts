
import React from 'react';
import type { Skill } from './types';
// FIX: Import Achievement type from types.ts
import type { Achievement } from './types';
import type { Project } from './types';
// FIX: Import NavItem type from types.ts
import type { NavItem } from './types';
import { 
  HtmlIcon, CssIcon, JsIcon, BootstrapIcon, JQueryIcon, GitlabIcon, TailwindIcon, ReactIcon, CppIcon, PythonIcon, PhpIcon, DjangoIcon, JavaIcon, MongoIcon, FirebaseIcon, MysqlIcon, LaravelIcon, PostgresIcon, VueIcon, RedisIcon, RabbitMqIcon, KafkaIcon, DockerIcon,
  HomeIcon, UserIcon, CodeIcon, BriefcaseIcon, MailIcon, GithubIcon, LinkedinIcon, DownloadIcon
} from './components/Icons';

export const PERSONAL_INFO = {
  name: "Benjamin Munyasya",
  title: "Software Engineer",
  summary: "Passionate Software Engineer with 5+ years of experience designing, building, and optimizing scalable full-stack applications. Proven expertise in Laravel, Django, and Vue.js, with a strong focus on API performance, system reliability, and secure payment integrations.",
  portfolio: "benmunyasya.github.io/myportfolio",
  github: "https://github.com/benmunyasya",
  linkedin: "https://www.linkedin.com/in/benjamin-munyasya/",
  email: "benngovi47@gmail.com",
  resumeUrl: "/benjamin-munyasya-resume.pdf"
};

// FIX: Replaced JSX with React.createElement to be valid in a .ts file.
export const NAVIGATION: NavItem[] = [
  { id: 'home', label: 'Home', icon: React.createElement(HomeIcon) },
  { id: 'about', label: 'About', icon: React.createElement(UserIcon) },
  { id: 'experience', label: 'Experience', icon: React.createElement(CodeIcon) },
  { id: 'contact', label: 'Contact', icon: React.createElement(MailIcon) },
];

export const STATS = [
  { label: 'Experience', value: '5+ Years' },
  { label: 'Clients', value: '10+ Countrywide' },
  { label: 'Projects', value: '10+ Completed' },
];

// FIX: Replaced JSX with React.createElement to be valid in a .ts file.
export const FRONTEND_SKILLS: Skill[] = [
  { name: 'HTML5', level: 'Expert', icon: React.createElement(HtmlIcon) },
  { name: 'CSS3', level: 'Expert', icon: React.createElement(CssIcon) },
  { name: 'JavaScript', level: 'Experienced', icon: React.createElement(JsIcon) },
  { name: 'Bootstrap', level: 'Experienced', icon: React.createElement(BootstrapIcon) },
  { name: 'jQuery', level: 'Experienced', icon: React.createElement(JQueryIcon) },
  { name: 'Git, GitLab', level: 'Experienced', icon: React.createElement(GitlabIcon) },
  { name: 'Tailwind', level: 'Beginner', icon: React.createElement(TailwindIcon) },
  { name: 'React', level: 'Intermediate', icon: React.createElement(ReactIcon) },
  { name: 'Vue.js', level: 'Intermediate', icon: React.createElement(VueIcon) },
];

// FIX: Replaced JSX with React.createElement to be valid in a .ts file.
export const BACKEND_SKILLS: Skill[] = [
  { name: 'C++', level: 'Intermediate', icon: React.createElement(CppIcon) },
  { name: 'Python', level: 'Expert', icon: React.createElement(PythonIcon) },
  { name: 'PHP', level: 'Beginner', icon: React.createElement(PhpIcon) },
  { name: 'Python - Django', level: 'Expert', icon: React.createElement(DjangoIcon) },
  { name: 'Java', level: 'Beginner', icon: React.createElement(JavaIcon) },
  { name: 'MongoDB', level: 'Experienced', icon: React.createElement(MongoIcon) },
  { name: 'Firebase', level: 'Beginner', icon: React.createElement(FirebaseIcon) },
  { name: 'MySQL', level: 'Experienced', icon: React.createElement(MysqlIcon) },
  { name: 'Laravel', level: 'Beginner', icon: React.createElement(LaravelIcon) },
  { name: 'PostgreSQL', level: 'Experienced', icon: React.createElement(PostgresIcon) },
  { name: 'Redis', level: 'Experienced', icon: React.createElement(RedisIcon) },
  { name: 'RabbitMQ', level: 'Intermediate', icon: React.createElement(RabbitMqIcon) },
  { name: 'Kafka', level: 'Intermediate', icon: React.createElement(KafkaIcon) },
  { name: 'Docker', level: 'Intermediate', icon: React.createElement(DockerIcon) },
];

export const ACHIEVEMENTS: Achievement[] = [
  { text: "Engineered and deployed a scalable RESTful API architecture serving both web (Vue.js) and mobile clients, improving data retrieval speeds by 50%." },
  { text: "Optimized database performance and implemented advanced caching strategies with Redis, resulting in a 75% improvement in application response times and supporting a 3x increase in concurrent users." },
  { text: "Architected a high-volume NFC payment processing system, efficiently handling over 500,000 daily transactions with a 40% reduction in processing time." },
  { text: "Developed a USSD application using a Finite State Machine (FSM) model, enabling over 50,000 users to access digital wallets and increasing transaction volume by 25%." },
  { text: "Led performance profiling initiatives using Laravel Telescope and Xdebug, reducing memory leaks by 40% and increasing overall application stability by 50%." },
  { text: "Executed rigorous load testing on a Laravel REST API using Locust, enhancing bottleneck detection and mitigation capabilities by 50%." },
  { text: "Integrated multiple bank and M-Pesa payment gateways, enhancing the financial ecosystem and boosting transaction efficiency by 40%." },
  { text: "Designed and built secure enterprise workflow systems with Active Directory/LDAP integration for single sign-on (SSO)." },
  { text: "Mentored junior engineers in agile methodologies and coding best practices, leading to a 25% improvement in team productivity and project delivery velocity." },
];

export const PROJECTS: Project[] = [
    {
    title: "Payments Platform + USSD FSM",
    category: "Fintech & High-Scale Systems",
    image: "https://picsum.photos/seed/payment/800/600",
    description: "A high-performance payment gateway with an integrated USSD system for accessibility. This platform handles millions of transactions, integrating multiple banks and payment services while ensuring security and speed.",
    metrics: [
      "75% faster response time",
      "3x concurrency support",
      "50k+ USSD users",
      "+40% transaction efficiency",
      "500k/day NFC transactions",
      "-40% memory leaks",
    ],
    stack: ["Laravel", "Vue.js", "Django", "Redis", "RabbitMQ", "PostgreSQL", "Docker", "Locust"],
    liveLink: "#",
    codeLink: "https://github.com/benmunyasya",
  },
  {
    title: "Enterprise Workflow Tools (KWS)",
    category: "Internal Business Applications",
    image: "https://picsum.photos/seed/workflow/800/600",
    description: "A suite of internal tools for Kenya Wildlife Service to digitize and automate workflows. This includes an approval system with SSO, an IT inventory manager, and a visitor management system.",
    metrics: [
      "Automated approval flows",
      "Centralized IT asset tracking",
      "Streamlined visitor check-ins",
      "Active Directory/LDAP SSO",
    ],
    stack: ["Django", "viewflow", "Laravel", "MySQL", "Active Directory"],
    liveLink: "#",
    codeLink: "https://github.com/benmunyasya",
  },
  {
    title: "Scalable RESTful API",
    category: "Backend Architecture",
    image: "https://picsum.photos/seed/api/800/600",
    description: "Designed and deployed a scalable RESTful API that served both an Android application and a Vue.js frontend, achieving 50% faster data retrieval speeds and high availability.",
    metrics: [
        "50% faster data retrieval",
        "Served Android & Web clients",
        "Mentored junior developers on best practices"
    ],
    stack: ["Django Rest Framework", "PostgreSQL", "Vue.js"],
    liveLink: "#",
    codeLink: "https://github.com/benmunyasya"
  }
];