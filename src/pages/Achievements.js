import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Users, Star, CalendarDays } from 'lucide-react';

const records=[
 {icon:Trophy,title:'Management Scholarship',text:'Awarded a Management Scholarship of Rs. 10,000 for achieving a CGPA above 8.',tag:'AY 2025–2026'},
 {icon:Trophy,title:'CM Trophy Match – Handball',text:'Won the CM Trophy Match in Handball and received a cash prize of Rs. 2,000.',tag:'SPORTS_ACHIEVEMENT'},
 {icon:Medal,title:'Zonal Level Handball Tournament',text:'Secured Runner-up position in the Zonal Level Handball Tournament.',tag:'11 FEB 2025'},
 {icon:Users,title:'NSS Club',text:'Office Bearer, NSS Club.',tag:'ROLE'},
 {icon:Users,title:'Google Club',text:'Member, Google Club.',tag:'ROLE'},
 {icon:Star,title:'Finearts Club',text:'Member, Finearts Club.',tag:'ROLE'},
 {icon:Star,title:"ASTRANOVA'26",text:'Participated in the Technical Symposium at CIT, Coimbatore.',tag:'23 JAN 2026'}
];

export default function Achievements(){return <div className="px-6 md:px-10 pb-20"><div className="max-w-6xl mx-auto">
  <div className="grid md:grid-cols-2 gap-5">{records.map((r,i)=>{const Icon=r.icon; return <motion.div key={r.title} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}} className="group relative overflow-hidden rounded-[1.7rem] p-6 border border-white/10 bg-gradient-to-br from-white/[.045] to-white/[.015] hover:border-pink-400/30 hover:-translate-y-2 transition duration-300"><div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-pink-500/10 blur-2xl group-hover:bg-pink-500/20 transition"/><div className="relative flex gap-4"><div className="w-11 h-11 shrink-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-violet-400/15 to-pink-400/20 border border-white/10 flex items-center justify-center"><Icon size={20} className="text-pink-200"/></div><div><div className="flex flex-wrap items-center gap-2"><h3 className="text-sm font-black text-white">{r.title}</h3><span className="text-[7px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/35 tracking-widest">{r.tag}</span></div><p className="text-xs text-white/45 leading-6 mt-2">{r.text}</p></div></div></motion.div>})}</div>
  <div className="mt-8 grid md:grid-cols-2 gap-5"><div className="rounded-[1.7rem] p-6 border border-cyan-400/15 bg-cyan-400/[.035]"><div className="text-[9px] tracking-[.3em] text-cyan-300/70 mb-4">CURRENT_FOCUS</div><p className="text-sm text-white/60 leading-7">Prompt Engineering, Artificial Intelligence, Data Science, Java Development and Software Development.</p></div><div className="rounded-[1.7rem] p-6 border border-violet-400/15 bg-violet-400/[.035]"><div className="text-[9px] tracking-[.3em] text-violet-200/70 mb-4">LANGUAGES</div><div className="flex gap-3"><span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70">Tamil — Native</span><span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70">English — Professional</span></div></div></div>
</div></div>}
