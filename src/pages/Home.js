import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ChevronRight, Code2, Activity, Database, Brain } from 'lucide-react';
import profilePic from '../profilee.jpg';

export default function Home() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <div className="min-h-screen flex items-center justify-center p-6 md:p-12 pt-28 overflow-hidden bg-transparent">
      <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[360px] h-[360px] bg-fuchsia-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10">
        <motion.div initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8 }} className="relative flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-violet-500/10 to-pink-500/20 blur-2xl opacity-70 group-hover:opacity-100 transition" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border border-cyan-400/30 shadow-[0_0_70px_rgba(6,182,212,.12)] bg-slate-950">
              <img src={profilePic} alt="Dharunika B" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-cyan-400/10" />
              <motion.div animate={{ y: [0, 280, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'linear' }} className="absolute left-0 right-0 top-0 h-px bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,.9)]" />
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/60 border border-cyan-300/20 backdrop-blur-md text-[8px] tracking-[.25em] text-cyan-300">IT // 2027</div>
            </div>
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-cyan-400/60 rounded-tl-xl" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-pink-400/60 rounded-br-xl" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .12 }} className="text-left">
          <div className="flex items-center gap-2 mb-5"><span className="h-px w-8 bg-cyan-400" /><span className="text-cyan-300 text-[9px] font-bold tracking-[.3em] uppercase">Mepco Schlenk Engineering College // Sivakasi</span></div>
          <div className="text-cyan-400/60 text-[10px] tracking-[.4em] mb-2">IDENTIFICATION</div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 uppercase">DHARUNIKA<span className="gradient-text">.B</span></h1>
          <h2 className="text-xl md:text-2xl font-bold text-white/85 mb-5">Java • Data Science • <span className="gradient-text">Software Development</span></h2>
          <p className="text-blue-100/60 text-xs md:text-sm leading-relaxed max-w-xl mb-7 border-l border-cyan-400/30 pl-5">
            Passionate and detail-oriented IT student with a strong foundation in programming, Java, MySQL and software development, backed by hands-on project experience. Interested in Prompt Engineering and Artificial Intelligence, with a focus on problem-solving, continuous learning and real-world software development.
          </p>
          <div className="flex flex-wrap gap-3 mb-8 pl-5">
            <a href="https://github.com/Dharunika192006" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 hover:bg-cyan-400/15 hover:-translate-y-1 transition text-[10px] font-bold text-cyan-200">GH // GITHUB</a>
            <a href="https://www.linkedin.com/in/dharunika-balamoorthy-43a027365/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl border border-violet-400/20 bg-violet-400/5 hover:bg-violet-400/15 hover:-translate-y-1 transition text-[10px] font-bold text-violet-200">in // LINKEDIN</a>
            <a href="mailto:dharunikabalamoorthy@gmail.com" className="px-4 py-2 rounded-xl border border-pink-400/20 bg-pink-400/5 hover:bg-pink-400/15 hover:-translate-y-1 transition text-[10px] font-bold text-pink-200">✉ // EMAIL</a>
          </div>
          <div className="grid grid-cols-3 gap-3 max-w-xl">
            <Stat icon={<Activity size={16}/>} value="8.04" label="CGPA" />
            <Stat icon={<Database size={16}/>} value="2027" label="GRADUATION" />
            <Stat icon={<Brain size={16}/>} value="AI" label="INTEREST" />
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <button onClick={() => scrollTo('missions')} className="live-project-button"><Rocket size={15}/> EXPLORE PROJECTS <ChevronRight size={14}/></button>
            <button onClick={() => scrollTo('intel')} className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-[10px] font-bold tracking-[.15em] text-white/70 hover:bg-white/10 transition"><Code2 size={15} className="inline mr-2"/>TECH STACK</button>
          </div>
        </motion.div>
      </div>
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-cyan-500/40"><span className="text-[7px] tracking-[.4em]">SCROLL_TO_EXPLORE</span><ChevronRight size={14} className="rotate-90" /></motion.div>
    </div>
  );
}

function Stat({ icon, value, label }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[.035] p-4 hover:border-cyan-400/30 hover:-translate-y-1 transition"><div className="text-cyan-300 mb-2">{icon}</div><div className="text-xl font-black text-white">{value}</div><div className="text-[8px] text-white/35 tracking-[.2em] mt-1">{label}</div></div>;
}

