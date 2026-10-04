import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe2, Brain, Cpu, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';

const skills = [
  { title: 'PROGRAMMING', icon: Code2, items: ['Java', 'C', 'Python'] },
  { title: 'WEB TECHNOLOGIES', icon: Globe2, items: ['HTML', 'CSS', 'JavaScript'] },
  { title: 'DATABASE', icon: Database, items: ['DBMS', 'SQL', 'MySQL'] },
  { title: 'CORE CS', icon: Cpu, items: ['Data Structures', 'Computer Networks', 'Operating Systems'] },
  { title: 'AI / DATA INTERESTS', icon: Brain, items: ['Prompt Engineering', 'Artificial Intelligence', 'Data Science'] },
];

export default function Intel() {
  return <div className="px-6 md:px-10 pb-20">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="grid lg:grid-cols-[1.1fr_.9fr] gap-6 mb-8">
        <div className="rounded-[2rem] p-7 md:p-9 border border-cyan-400/15 bg-gradient-to-br from-cyan-500/[.08] via-violet-500/[.04] to-transparent">
          <div className="flex items-center gap-3 mb-5"><GraduationCap className="text-cyan-300"/><span className="text-[9px] tracking-[.35em] text-cyan-300/70">EDUCATION_PROFILE</span></div>
          <h3 className="text-2xl md:text-3xl font-black text-white">Mepco Schlenk Engineering College</h3>
          <p className="text-white/50 text-sm mt-2">B. Tech in Information Technology • 2023 — 2027</p>
          <div className="flex flex-wrap gap-3 mt-6"><Badge text="CGPA 8.04"/><Badge text="Sivakasi" icon={<MapPin size={11}/>}/></div>
          <div className="mt-6 text-white/45 text-xs leading-6">Strong foundation in programming, software development, databases and core computer science, supported by hands-on academic projects.</div>
        </div>
        <div className="rounded-[2rem] p-7 md:p-9 border border-pink-400/15 bg-gradient-to-br from-pink-500/[.08] via-violet-500/[.04] to-transparent">
          <div className="text-[9px] tracking-[.35em] text-pink-300/70 mb-5">ACADEMIC_MILESTONES</div>
          <div className="space-y-5"><Milestone label="Higher Secondary Certificate" value="86%"/><Milestone label="Current Degree" value="8.04 CGPA"/><Milestone label="Expected Graduation" value="2027"/></div>
        </div>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((s, i) => <motion.div key={s.title} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.07}} className="rounded-[1.7rem] p-6 border border-white/10 bg-white/[.025] hover:bg-white/[.05] hover:border-cyan-400/25 hover:-translate-y-2 transition duration-300">
          <s.icon className="text-cyan-300 mb-5" size={22}/><h3 className="text-[10px] tracking-[.25em] font-black text-white/70 mb-4">{s.title}</h3><div className="flex flex-wrap gap-2">{s.items.map(x=><span key={x} className="px-3 py-2 rounded-xl bg-cyan-400/[.06] border border-cyan-400/10 text-[9px] text-cyan-100/70">{x}</span>)}</div>
        </motion.div>)}
      </div>
      <div className="mt-6 rounded-[1.7rem] p-6 border border-violet-400/15 bg-gradient-to-r from-violet-500/[.06] to-pink-500/[.04]"><div className="text-[9px] tracking-[.3em] text-violet-200/60 mb-4">TOOLBOX</div><div className="flex flex-wrap gap-3">{['Git','GitHub','VS Code','IntelliJ IDEA','MySQL'].map(x=><span key={x} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[.035] text-[10px] text-white/65"><CheckCircle2 size={12} className="text-cyan-300"/>{x}</span>)}</div></div>
    </div>
  </div>;
}
function Badge({text,icon}){return <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/[.06] border border-cyan-400/15 text-cyan-200 text-[9px] font-bold">{icon}{text}</span>}
function Milestone({label,value}){return <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4"><span className="text-xs text-white/45">{label}</span><span className="text-sm font-black text-white">{value}</span></div>}
