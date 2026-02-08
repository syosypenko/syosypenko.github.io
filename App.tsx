
import React from 'react';
import { PROFILE, PROJECTS, SKILLS, EXPERIENCE, EDUCATION } from './constants';
import ProjectCard from './components/ProjectCard';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-blue-500">SY</span>
            <div className="h-6 w-[1px] bg-white/10 mx-2 hidden md:block"></div>
            <span className="hidden md:block font-mono text-xs opacity-50 tracking-tighter uppercase">Innsbruck • senior_engineer</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#experience" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Tech Stack</a>
            <a href={PROFILE.cvUrl} target="_blank" className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              Resume
            </a>
            <a href={`mailto:${PROFILE.email}`} className="px-5 py-2 rounded-lg bg-blue-600 text-sm font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-48 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -mr-64 -mt-32"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              8+ YEARS EXPERIENCE • AUSTRIA
            </div>
            <h1 className="text-6xl lg:text-8xl font-black mb-10 leading-[0.85] tracking-tight">
              Backend <br />
              <span className="gradient-text">Architect.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-12">
              Building robust, scalable applications with <span className="text-white">Ruby on Rails</span> and <span className="text-white">Python</span>. Currently engineering the intersection of cloud backends and AI in Innsbruck.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <a href="#projects" className="px-10 py-5 rounded-2xl bg-white text-slate-950 font-black hover:scale-105 transition-transform shadow-xl">
                Explore Work
              </a>
              <a href={PROFILE.cvUrl} target="_blank" className="px-8 py-5 rounded-2xl glass font-bold hover:bg-white/10 transition-all flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                Download CV
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 hidden lg:block">
             <div className="relative glass p-3 rounded-[32px] rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=800" alt="Code Editor" className="w-full h-auto rounded-2xl opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center">
                  <div className="font-mono text-[10px] text-blue-400 bg-blue-500/10 px-2 py-1 rounded">SERHIY.DEV</div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-32 px-6 border-t border-white/5 bg-slate-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <p className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4">Professional History</p>
              <h2 className="text-5xl font-black">Experience</h2>
            </div>
            <p className="text-slate-500 max-w-sm text-sm">A decade of engineering excellence, from early multimedia projects to senior leadership at international tech firms.</p>
          </div>
          
          <div className="space-y-16">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0 grid md:grid-cols-4 gap-8 group">
                {/* Timeline vertical line for mobile */}
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10 md:hidden"></div>
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-blue-500 md:hidden"></div>

                <div className="md:col-span-1">
                  <span className="font-mono text-sm text-slate-500 bg-white/5 px-3 py-1 rounded-md">{exp.period}</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors flex items-center gap-3">
                    {exp.role} 
                    <span className="text-slate-600 text-lg font-medium">@ {exp.company}</span>
                  </h3>
                  <p className="text-slate-400 leading-relaxed max-w-3xl mb-6 text-lg">
                    {exp.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-white/10 px-2 py-1 rounded bg-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-black mb-12">Education</h2>
            <div className="space-y-10">
              {EDUCATION.map((ed, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">{ed.degree}</h4>
                    <p className="text-slate-400 mb-1">{ed.institution}</p>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">{ed.year} GRADUATE</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass p-10 rounded-[40px] flex flex-col justify-center">
            <h3 className="text-3xl font-black mb-6">Languages</h3>
            <div className="space-y-6">
              {PROFILE.languages.map(lang => (
                <div key={lang} className="flex items-center justify-between group">
                  <span className="font-bold text-lg group-hover:text-blue-400 transition-colors">{lang.split(' ')[0]}</span>
                  <span className="text-sm font-mono text-slate-500">{lang.split(' ')[1]}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/5">
              <p className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-2">Relocation Info</p>
              <p className="text-sm text-slate-400 leading-relaxed">Currently based in Innsbruck, Tyrol. Valid EU work permit and B1 German certification completed for smooth integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black mb-6">Featured Builds</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Explore my latest experiments in Garmin integrations, Rails performance demos, and Python AI solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-20 text-center">
            <a href={PROFILE.github} target="_blank" className="inline-flex items-center gap-4 px-8 py-4 rounded-xl glass hover:bg-white/5 transition-all group">
              <span className="font-bold">View More on GitHub</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="skills" className="py-32 px-6 bg-slate-900/40">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-5xl font-black mb-8 leading-tight">Mastered <br /> Technologies.</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              A comprehensive stack designed for performance, reliability, and speed. From automated testing with Playwright to complex Sidekiq job processing.
            </p>
            <div className="flex gap-4">
               <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
               </div>
               <p className="text-xs text-slate-500 font-mono flex items-center uppercase tracking-tighter">Stack Version 2025.1</p>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="glass p-8 rounded-3xl hover:border-blue-500/30 transition-all group hover:-translate-y-1">
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">{skill.category}</p>
                <h5 className="text-lg font-bold group-hover:text-blue-400 transition-colors">{skill.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="text-left">
             <h4 className="text-2xl font-black mb-2">Serhiy Yosypenko</h4>
             <p className="text-slate-500 text-sm">Senior Software Engineer in Innsbruck</p>
           </div>
           <div className="flex flex-wrap justify-center gap-10 text-sm font-bold uppercase tracking-widest text-slate-400">
              <a href={PROFILE.github} className="hover:text-white transition-colors">GitHub</a>
              <a href={PROFILE.linkedin} className="hover:text-white transition-colors">LinkedIn</a>
              <a href={`mailto:${PROFILE.email}`} className="hover:text-white transition-colors">Email</a>
              <a href={PROFILE.cvUrl} className="hover:text-white transition-colors">Resume</a>
           </div>
        </div>
        <div className="mt-20 opacity-30 text-[10px] font-mono tracking-widest">
          © 2025 Serhiy Yosypenko — Built with AI assistance
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

export default App;
