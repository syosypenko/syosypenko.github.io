
// --- DATA ---
const PROFILE = {
  name: "Serhiy Yosypenko",
  role: "Senior Software Engineer",
  location: "Innsbruck, Tyrol, Austria",
  phone: "+43 676 746 7446",
  email: "serhiy.yosipenko@gmail.com",
  bio: "Software Engineer with 8+ years of experience in Ruby on Rails and Python, specializing in scalable web applications and API development. Strong background in automation, system integrations, CI/CD pipelines, and DevOps. Actively expanding expertise in Python and AI-powered backend solutions.",
  github: "https://github.com/syosypenko",
  linkedin: "https://www.linkedin.com/in/syosypenko/",
  cvUrl: "https://github.com/syosypenko/syosypenko.github.io/raw/main/Serhiy_Yosypenko_CV.pdf",
  languages: ["English (Professional)", "German (Intermediate - B1)"],
};

const EXPERIENCE = [
  { company: "Independent Projects", role: "Software Engineer", period: "2024-09 – Present", desc: "Self-directed. Expanding Python and AI expertise (FastAPI, LLM tools) while maintaining hands-on Rails experience. Completed German B1 course.", tech: ["Python", "FastAPI", "AI/LLM", "Ruby on Rails"] },
  { company: "Softjourn, Inc", role: "Software Engineer", period: "2018-09 – 2023-05", desc: "Developed and maintained Redmine, a project management web application. Requirements analysis, software design, API integration, and plugin development.", tech: ["Ruby on Rails", "RSpec", "MySQL", "Git", "Redmine"] },
  { company: "Insilico Soft", role: "Software Engineer", period: "2018-01 – 2018-05", desc: "Optimized user flows and added new features to a dating platform using Ruby on Rails.", tech: ["Ruby on Rails", "ActiveRecord", "JavaScript"] },
  { company: "SoftServe", role: "Software Engineer", period: "2015-06 – 2017-08", desc: "Full-stack development for an ads platform; responsible for requirements, development, and maintenance.", tech: ["Ruby on Rails", "PostgreSQL", "ElasticSearch", "AWS", "Stripe"] },
  { company: "RubyGarage & ISP", role: "Ruby/JS Developer", period: "2013-12 – 2015-05", desc: "Backend/frontend development for multimedia projects and client support for an ISP.", tech: ["Ruby", "JavaScript", "HTML/CSS"] }
];

const EDUCATION = [
  { institution: "Akademie Galizien, Ivano-Frankivsk, Ukraine", degree: "Diplomstudium in Computer Systems and Networks", year: "2010" },
  { institution: "Akademie Galizien, Ivano-Frankivsk, Ukraine", degree: "Bachelor’s Degree in Computer Engineering", year: "2009" }
];

const PROJECTS = [
  { id: "garmin", title: "Garmin Health Tracker", desc: "Advanced integration for fetching and visualizing Garmin health metrics.", tags: ["Rails", "API", "React", "Sidekiq"], github: "https://github.com/syosypenko/HealthTrackerAppRails", img: "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&q=80&w=800" },
  { id: "hotel", title: "Hotel Booking Demo", desc: "Comprehensive booking system demonstrating modern Rails patterns and Hotwire.", tags: ["Rails", "PostgreSQL", "Hotwire", "Redis"], github: "https://github.com/syosypenko/hotel-booking-rails-demo", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" },
  { id: "ai", title: "AI-Powered Backend Solutions", desc: "Building scalable backends with FastAPI and integrating LLM tools.", tags: ["Python", "FastAPI", "OpenAI", "Docker"], github: "https://github.com/syosypenko", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" }
];

const SKILLS = [
  { name: "Ruby on Rails", cat: "Backend" },
  { name: "Python (FastAPI)", cat: "Backend" },
  { name: "PostgreSQL", cat: "Backend" },
  { name: "React / JS", cat: "Frontend" },
  { name: "Docker", cat: "DevOps" },
  { name: "AWS", cat: "DevOps" },
  { name: "CI/CD", cat: "DevOps" },
  { name: "AI/LLM Tools", cat: "Tools" },
  { name: "Git", cat: "Tools" }
];

// --- RENDERING ---
function init() {
  // Bio
  const heroBio = document.getElementById('hero-bio');
  if (heroBio) heroBio.textContent = PROFILE.bio;
  
  // Resume Links
  // Fix: Cast elements to HTMLAnchorElement to access 'href' property and handle potential null values
  const navResumeLink = document.getElementById('nav-resume-link') as HTMLAnchorElement | null;
  if (navResumeLink) navResumeLink.href = PROFILE.cvUrl;

  const heroResumeLink = document.getElementById('hero-resume-link') as HTMLAnchorElement | null;
  if (heroResumeLink) heroResumeLink.href = PROFILE.cvUrl;

  const navContactBtn = document.getElementById('nav-contact-btn') as HTMLAnchorElement | null;
  if (navContactBtn) navContactBtn.href = `mailto:${PROFILE.email}`;

  // Experience
  const expList = document.getElementById('experience-list');
  if (expList) {
    expList.innerHTML = EXPERIENCE.map(exp => `
      <div class="relative pl-8 md:pl-0 grid md:grid-cols-4 gap-8 group">
        <div class="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10 md:hidden"></div>
        <div class="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-blue-500 md:hidden"></div>
        <div class="md:col-span-1">
          <span class="font-mono text-sm text-slate-500 bg-white/5 px-3 py-1 rounded-md">${exp.period}</span>
        </div>
        <div class="md:col-span-3">
          <h3 class="text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors">${exp.role} <span class="text-slate-600 text-lg font-medium">@ ${exp.company}</span></h3>
          <p class="text-slate-400 leading-relaxed mb-6 text-lg">${exp.desc}</p>
          <div class="flex flex-wrap gap-2">
            ${exp.tech.map(t => `<span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-white/10 px-2 py-1 rounded bg-white/5">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  // Education
  const edList = document.getElementById('education-list');
  if (edList) {
    edList.innerHTML = EDUCATION.map(ed => `
      <div class="flex gap-6">
        <div class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
        </div>
        <div>
          <h4 class="font-bold text-xl">${ed.degree}</h4>
          <p class="text-slate-400 mb-1">${ed.institution}</p>
          <span class="text-xs font-mono text-slate-500 uppercase tracking-widest">${ed.year} GRADUATE</span>
        </div>
      </div>
    `).join('');
  }

  // Languages
  const langList = document.getElementById('languages-list');
  if (langList) {
    langList.innerHTML = PROFILE.languages.map(lang => `
      <div class="flex items-center justify-between group">
        <span class="font-bold text-lg group-hover:text-blue-400 transition-colors">${lang.split(' ')[0]}</span>
        <span class="text-sm font-mono text-slate-500">${lang.split(' ')[1]}</span>
      </div>
    `).join('');
  }

  // Projects
  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) {
    projectsGrid.innerHTML = PROJECTS.map(p => `
      <div class="group relative glass rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
        <div class="aspect-video w-full overflow-hidden">
          <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        </div>
        <div class="p-6">
          <div class="flex flex-wrap gap-2 mb-4">
            ${p.tags.map(t => `<span class="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">${t}</span>`).join('')}
          </div>
          <h3 class="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">${p.title}</h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-6">${p.desc}</p>
          <a href="${p.github}" target="_blank" class="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.61-4.041-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Code
          </a>
        </div>
      </div>
    `).join('');
  }

  // Skills
  const skillsGrid = document.getElementById('skills-grid');
  if (skillsGrid) {
    skillsGrid.innerHTML = SKILLS.map(s => `
      <div class="glass p-8 rounded-3xl hover:border-blue-500/30 transition-all group hover:-translate-y-1">
        <p class="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">${s.cat}</p>
        <h5 class="text-lg font-bold group-hover:text-blue-400 transition-colors">${s.name}</h5>
      </div>
    `).join('');
  }

  // Footer
  const footerLinks = document.getElementById('footer-links');
  if (footerLinks) {
    footerLinks.innerHTML = `
      <a href="${PROFILE.github}" target="_blank" class="hover:text-white transition-colors">GitHub</a>
      <a href="${PROFILE.linkedin}" target="_blank" class="hover:text-white transition-colors">LinkedIn</a>
      <a href="mailto:${PROFILE.email}" class="hover:text-white transition-colors">Email</a>
      <a href="${PROFILE.cvUrl}" target="_blank" class="hover:text-white transition-colors">Resume</a>
    `;
  }
}

// Start the app
init();
