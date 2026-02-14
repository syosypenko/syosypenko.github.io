
import React, { useState, useEffect, useRef } from 'react';
import { PROFILE, PROJECTS, SKILLS, EXPERIENCE } from './constants';
import ProjectCard from './components/ProjectCard';

const App: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-blue-500">SY</span>
            <div className="h-6 w-[1px] bg-white/10 mx-2 hidden md:block"></div>
            <span className="hidden md:block font-mono text-xs opacity-50 tracking-tighter uppercase">Innsbruck • software_engineer</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#experience" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Tech Stack</a>
            
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-5 py-2 rounded-lg bg-white/10 text-sm font-bold hover:bg-white/20 transition-all flex items-center gap-2 text-slate-200"
              >
                Download CV
                <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-slate-900 border border-white/10 rounded-xl shadow-xl overflow-hidden z-50">
                  <a
                    href="/resume-serhiy-yosypenko.pdf"
                    target="_blank"
                    className="block px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    English (PDF)
                  </a>
                  <a
                    href="/resume-serhiy-yosypenko-de.pdf"
                    target="_blank"
                    className="block px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors border-t border-white/5"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    German (PDF)
                  </a>
                </div>
              )}
            </div>

            <a href={`mailto:${PROFILE.email}`} className="px-5 py-2 rounded-lg bg-blue-600 text-sm font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20">Hire Me</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white z-50 relative"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-xl md:hidden flex flex-col items-center justify-center p-8 space-y-8">
          <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-slate-300 hover:text-white">Experience</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-slate-300 hover:text-white">Projects</a>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-slate-300 hover:text-white">Tech Stack</a>
          
          <div className="flex flex-col items-center gap-4 w-full pt-4 border-t border-white/10">
            <p className="text-sm font-bold text-blue-500 uppercase tracking-widest">Download CV</p>
            <div className="flex gap-4">
               <a href="/resume-serhiy-yosypenko.pdf" target="_blank" className="px-4 py-2 bg-white/10 rounded-lg text-sm font-bold">English</a>
               <a href="/resume-serhiy-yosypenko-de.pdf" target="_blank" className="px-4 py-2 bg-white/10 rounded-lg text-sm font-bold">German</a>
            </div>
          </div>

          <a href={`mailto:${PROFILE.email}`} className="px-8 py-3 rounded-xl bg-blue-600 text-lg font-bold hover:bg-blue-500 shadow-lg shadow-blue-500/20 w-full text-center">Hire Me</a>
        </div>
      )}


      {/* Hero Section */}
      <section id="about" className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              BASED IN {PROFILE.location.toUpperCase()}
            </div>
            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
              Scaling <br />
              <span className="gradient-text">Systems.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
              I'm <span className="text-white font-semibold">Serhiy Yosypenko</span>. A Senior Engineer with 8+ years crafting robust backends in Ruby and Python. From Redmine plugins to high-scale ad platforms, I build for maintainability and speed.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#projects" className="px-8 py-4 rounded-xl bg-white text-slate-950 font-bold hover:scale-105 transition-transform">
                Explore Repos
              </a>
              <a href={PROFILE.linkedin} target="_blank" className="p-4 rounded-xl glass hover:bg-white/10 transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href={PROFILE.github} target="_blank" className="p-4 rounded-xl glass hover:bg-white/10 transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.61-4.041-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 hidden lg:block">
            <div className="relative glass p-2 rounded-2xl overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-1000">
               <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="Hardware Code" className="w-full h-auto opacity-50" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
               <div className="absolute bottom-8 left-8">
                 <p className="text-xs font-mono opacity-50">LOCATION: {PROFILE.location}</p>
                 <p className="text-xs font-mono opacity-50">LANGS: {PROFILE.languages.join(' / ')}</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-16">Professional Journey</h2>
          <div className="space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="grid md:grid-cols-4 gap-4 md:gap-12">
                <div className="text-slate-500 font-mono text-sm">{exp.period}</div>
                <div className="md:col-span-3 group">
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-400 transition-colors">{exp.role} — {exp.company}</h3>
                  <p className="text-slate-400 leading-relaxed max-w-3xl">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <p className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4">Portfolio Highlights</p>
              <h2 className="text-4xl md:text-5xl font-black">Open Source Contributions</h2>
            </div>
            <a href={PROFILE.github} target="_blank" className="text-sm font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              Explore my projects on GitHub
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-black mb-6">Expertise</h2>
              <p className="text-slate-400 leading-relaxed">
                A toolkit honed over a decade of production experience. Specialized in building APIs that last and architectures that scale.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="glass p-4 rounded-xl flex items-center gap-3 hover:border-blue-500/50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div>
                    <p className="font-bold text-sm">{skill.name}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-tighter">{skill.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-12">Let's build the <span className="gradient-text">future.</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
             <a href={`mailto:${PROFILE.email}`} className="glass p-8 rounded-3xl hover:bg-white/5 transition-all text-left group">
                <p className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-widest">Email</p>
                <p className="text-xl font-bold group-hover:text-blue-400 transition-colors">{PROFILE.email}</p>
             </a>
             <a href={`tel:${PROFILE.phone}`} className="glass p-8 rounded-3xl hover:bg-white/5 transition-all text-left group">
                <p className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-widest">Phone</p>
                <p className="text-xl font-bold group-hover:text-blue-400 transition-colors">{PROFILE.phone}</p>
             </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Serhiy Yosypenko — Built with React & Vite.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
