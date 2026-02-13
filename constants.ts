
import { Project, Skill } from './types';

export const PROFILE = {
  name: "Serhiy Yosypenko",
  role: "Senior Software Engineer",
  location: "Innsbruck, Tyrol, Austria",
  phone: "+43 676 746 7446",
  email: "serhiy.yosipenko@gmail.com",
  bio: "Software Engineer with 8+ years of experience specializing in Ruby on Rails, Python, and scalable backend architectures. Expertise in automation, CI/CD, and system integration. Currently focused on AI-powered backend solutions and FastAPI.",
  github: "https://github.com/syosypenko",
  linkedin: "https://www.linkedin.com/in/syosypenko/",
  languages: ["English (Professional)", "German (Intermediate - B1)"],
};

export const EXPERIENCE = [
  {
    company: "Independent Projects",
    role: "Software Engineer",
    period: "2024-09 – Present",
    desc: "Expanding Python and AI expertise (FastAPI, LLM tools) while maintaining hands-on Rails experience. Completed German B1 course."
  },
  {
    company: "Softjourn, Inc",
    role: "Software Engineer",
    period: "2018-09 – 2023-05",
    desc: "Developed Redmine-based project management solutions. Focused on API integration, automation testing (Capybara/RSpec), and plugin development."
  },
  {
    company: "SoftServe",
    role: "Software Engineer",
    period: "2015-06 – 2017-08",
    desc: "Full-stack development for high-scale ads platforms using Rails, PostgreSQL, and ElasticSearch on AWS."
  },
  {
    company: "RubyGarage & ISP",
    role: "Ruby/JS Developer",
    period: "2013-12 – 2015-05",
    desc: "Backend/frontend development for multimedia projects and ISP client support."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "hotel-booking",
    title: "Hotel Booking Demo",
    description: "A comprehensive booking system demo demonstrating modern Rails patterns and Hotwire.",
    tags: ["Rails", "PostgreSQL", "Hotwire", "Redis"],
    githubUrl: "https://github.com/syosypenko/hotel-booking-rails-demo",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "fastapi-ai-playground",
    title: "Python AI Backend",
    description: "Exploring FastAPI and LLM integrations for automated reasoning and backend processing.",
    tags: ["Python", "FastAPI", "OpenAI", "Docker"],
    githubUrl: "https://github.com/syosypenko",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  }
];

export const SKILLS: Skill[] = [
  { name: "Ruby on Rails", category: "Backend" },
  { name: "Python (FastAPI)", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "React / JS", category: "Frontend" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "DevOps" },
  { name: "CI/CD (GH Actions)", category: "DevOps" },
  { name: "RSpec / Selenium", category: "Tools" },
  { name: "AI/LLM Tools", category: "Tools" },
  { name: "Git", category: "Tools" }
];
