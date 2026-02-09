
import { Project, Skill } from './types';

export const PROFILE = {
  name: "Serhiy Yosypenko",
  role: "Senior Software Engineer",
  location: "Innsbruck, Tyrol, Austria",
  phone: "+43 676 746 7446",
  email: "serhiy.yosipenko@gmail.com",
  bio: "Software Engineer with 8+ years of experience in Ruby on Rails and Python, specializing in scalable web applications and API development. Strong background in automation, system integrations, CI/CD pipelines, and DevOps. Actively expanding expertise in Python and AI-powered backend solutions.",
  github: "https://github.com/syosypenko",
  linkedin: "https://www.linkedin.com/in/syosypenko/",
  cvUrl: "/resume-serhiy-yosypenko.pdf",
  languages: ["English (Professional)", "German (Intermediate - B1)"],
};

export const EXPERIENCE = [
  {
    company: "Independent Projects",
    role: "Software Engineer",
    period: "2024-09 – Present",
    desc: "Self-directed. Expanding Python and AI expertise (FastAPI, LLM tools) while maintaining hands-on Rails experience. Completed German B1 course for professional integration.",
    tech: ["Python", "FastAPI", "AI/LLM", "Ruby on Rails"]
  },
  {
    company: "Softjourn, Inc",
    role: "Software Engineer",
    period: "2018-09 – 2023-05",
    desc: "Developed and maintained Redmine, a project management web application. Requirements analysis, software design, API integration, automation testing, plugin development, and code review.",
    tech: ["Ruby on Rails", "RSpec", "Capybara", "MySQL", "Git", "Redmine"]
  },
  {
    company: "Insilico Soft",
    role: "Software Engineer",
    period: "2018-01 – 2018-05",
    desc: "Optimized user flows and added new features to a dating platform using Ruby on Rails.",
    tech: ["Ruby on Rails", "ActiveRecord", "JavaScript"]
  },
  {
    company: "SoftServe",
    role: "Software Engineer",
    period: "2015-06 – 2017-08",
    desc: "Full-stack development for an ads platform; responsible for requirements, development, and post-production maintenance.",
    tech: ["Ruby on Rails", "RSpec", "Selenium", "PostgreSQL", "ElasticSearch", "AWS", "Stripe", "Git", "Jira"]
  },
  {
    company: "RubyGarage & ISP",
    role: "Ruby/JS Developer",
    period: "2013-12 – 2015-05",
    desc: "Backend/frontend development for multimedia projects and client support for an ISP.",
    tech: ["Ruby", "JavaScript", "HTML/CSS"]
  }
];

export const EDUCATION = [
  {
    institution: "Akademie Galizien, Ivano-Frankivsk, Ukraine",
    degree: "Diplomstudium in Computer Systems and Networks",
    year: "2010"
  },
  {
    institution: "Akademie Galizien, Ivano-Frankivsk, Ukraine",
    degree: "Bachelor’s Degree in Computer Engineering",
    year: "2009"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "garmin-health-tracker",
    title: "Garmin Health Tracker",
    description: "Advanced integration for fetching and visualizing Garmin health metrics. Focus on data accuracy and performant Rails background processing.",
    tags: ["Ruby on Rails", "Garmin API", "React", "Sidekiq"],
    githubUrl: "https://github.com/syosypenko/HealthTrackerAppRails",
    imageUrl: "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking Demo",
    description: "A comprehensive booking system demo demonstrating modern Rails patterns, Hotwire, and real-time availability.",
    tags: ["Rails", "PostgreSQL", "Hotwire", "Redis"],
    githubUrl: "https://github.com/syosypenko/hotel-booking-rails-demo",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "fastapi-ai-playground",
    title: "AI-Powered Backend Solutions",
    description: "Current focus: Building scalable backends with FastAPI and integrating LLM tools for automation.",
    tags: ["Python", "FastAPI", "OpenAI", "Docker"],
    githubUrl: "https://github.com/syosypenko",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  }
];

export const SKILLS: Skill[] = [
  { name: "Ruby on Rails", category: "Backend" },
  { name: "Python (FastAPI)", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Redis / Sidekiq", category: "Backend" },
  { name: "React / JS", category: "Frontend" },
  { name: "Hotwire / Turbo", category: "Frontend" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "DevOps" },
  { name: "CI/CD (GH Actions)", category: "DevOps" },
  { name: "Playwright / Selenium", category: "Tools" },
  { name: "RSpec / Capybara", category: "Tools" },
  { name: "AI/LLM Tools", category: "Tools" }
];
