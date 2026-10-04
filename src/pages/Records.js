import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CalendarDays, Award, BookOpen, ExternalLink } from 'lucide-react';

const certs = [
 'Introduction to Generative AI – Google Cloud & Simplilearn',
 'Introduction to Prompt Engineering – Simplilearn',
 'Java Training – Spoken Tutorial, IIT Bombay',
 'Associate in IT Foundation Skills (Java) – Infosys Springboard',
 'Software Testing – NPTEL',
 'Foundations of R Software (Elite Certificate) – NPTEL',
 'Introduction to Internet of Things (Elite Certificate) – NPTEL',
 'IEEE English for Technical Professionals'
];

export default function Records(){return <div className="px-6 md:px-10 pb-20"><div className="max-w-6xl mx-auto">
  <motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-[2rem] p-7 md:p-10 border border-cyan-400/15 bg-gradient-to-br from-cyan-500/[.08] via-blue-500/[.04] to-transparent mb-7">
    <div className="flex items-center gap-3 text-cyan-300 mb-5"><Briefcase size={20}/><span className="text-[9px] tracking-[.35em]">INTERNSHIP_RECORD</span></div>
    <h2 className="text-2xl md:text-3xl font-black text-white">Data Science using Python</h2>
    <p className="text-white/55 text-sm mt-2">Elysiam Intelligence Business Solution, Madurai</p>
    <div className="flex items-center gap-2 text-cyan-300/70 text-[10px] mt-5"><CalendarDays size={14}/> 16th – 27th June 2025</div>
    <p className="text-xs text-white/40 leading-6 mt-5 max-w-3xl">Completed a Data Science internship with practical exposure to Python, data analysis, preprocessing, machine learning concepts and real-world datasets.</p>
  </motion.div>
  <div className="flex items-center gap-3 mb-5"><Award className="text-pink-300" size={20}/><span className="text-[9px] tracking-[.35em] text-pink-200/60">CERTIFICATION_ARCHIVE</span></div>
  <div className="grid md:grid-cols-2 gap-4">{certs.map((c,i)=><motion.div key={c} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.04}} className="rounded-2xl p-5 border border-white/10 bg-white/[.025] hover:bg-white/[.05] hover:border-pink-400/25 hover:-translate-y-1 transition"><div className="flex gap-3"><div className="w-8 h-8 shrink-0 rounded-xl bg-gradient-to-br from-cyan-400/20 to-pink-400/20 flex items-center justify-center"><BookOpen size={15} className="text-cyan-200"/></div><div><p className="text-xs font-bold text-white/80 leading-5">{c}</p><p className="text-[8px] text-white/30 tracking-widest mt-2">VERIFIED_LEARNING_RECORD</p></div></div></motion.div>)}</div>

</div></div>}
