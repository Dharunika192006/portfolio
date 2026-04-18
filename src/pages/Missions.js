import React from 'react';
import { Cpu, Terminal, ChevronRight, ShieldCheck } from 'lucide-react';
import Glimpse3D from '../components/Glimpse3D';
import Phish3D from '../components/Phish3D';
import AI3D from '../components/AI3D';
import Deque3D from '../components/Deque3D';

export default function Missions() {
  const missions = [
    { 
      title: "AI-BASED INTERVIEW QUESTION GENERATOR", 
      id: "M-01",
      date: "2025-26", 
      gitLink: "https://github.com/Dharunika192006/AI-BASED-INTERVIEW-QUESTIONS-GENERATOR",
      hasAI3D: true, 
      desc: [
        "Architected automated intelligence system using Java and DBMS.",
        "Engineered logic for dynamic, role-specific technical questions.",
        "Optimized database queries for high-speed question retrieval."
      ], 
      tech: "Java / SQL / AI Logic" 
    },
    { 
      title: "PHISHING DETECTION FRAMEWORK", 
      id: "M-02",
      date: "2025-26", 
      gitLink: "https://github.com/Dharunika192006",
      hasPhish3D: true, 
      desc: [
        "Explainable Federated Learning Framework for real-time security.",
        "Decentralized models for maximum data privacy.",
        "Provides explainable insights into malicious email patterns."
      ], 
      tech: "Python / Fed-Learning" 
    },
    { 
      title: "DEPARTMENTAL STORE MGMT SYSTEM", 
      id: "M-03",
      date: "2024-25", 
      gitLink: "https://github.com/Dharunika192006",
      has3D: true, 
      desc: [
        "Full-stack Java solution for real-time retail inventory.",
        "Synchronized multi-table DBMS for stock and employee tracking.",
        "Implemented efficient algorithms for rapid product identification."
      ], 
      tech: "Java / DBMS / UI" 
    },
    { 
      title: "DOUBLE-ENDED QUEUE (DEQUE)", 
      id: "M-04",
      date: "2024-25", 
      gitLink: "https://github.com/Dharunika192006",
      hasDeque3D: true, 
      desc: [
        "Technical implementation depicting the efficiency of Deque structures.",
        "Optimized memory management for O(1) time complexity.",
        "Simulated real-time buffer scenarios for logic validation."
      ], 
      tech: "C++ / Data Structures" 
    }
  ];

  return (
    <div className="p-4 md:p-10 pt-28 max-w-7xl mx-auto mb-20">
      {/* PAGE HEADER */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-2 text-white">
          Active_<span className="text-cyan-500 font-extrabold">Missions</span>
        </h2>
        <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full opacity-50"></div>
      </div>

      {/* 🛡️ INTERNSHIP HUD WITH CERTIFICATE LINK */}
      <div className="mb-12 p-6 md:p-8 rounded-3xl bg-[#0a1930]/40 border border-cyan-500/20 backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex-1 text-left">
          <span className="text-cyan-400 font-bold text-[10px] tracking-[0.3em] uppercase block mb-1">Internship_Verified</span>
          <h3 className="text-xl md:text-2xl font-black uppercase text-white">Elysiam Intelligence Solutions</h3>
          <p className="text-blue-100/50 text-sm mt-1 uppercase tracking-wider font-bold">Data Science // Python // June 2025</p>
        </div>
        <a 
          href="https://drive.google.com/file/d/1gIGlU10vPTfvHqCA45xPWvQs4oU1AdSi/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 bg-white text-black font-black text-xs rounded-xl hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-105 whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          <ShieldCheck size={16} /> VERIFY_CREDENTIALS
        </a>
      </div>

      {/* PROJECT MISSION GRID */}
      <div className="grid gap-8">
        {missions.map((m) => (
          <div key={m.id} className="group relative bg-[#0a1128]/60 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-cyan-500/30 transition-all overflow-hidden">
            
            <div className="flex flex-col lg:flex-row items-center gap-10">
              
              {/* 🛰️ 3D VISUAL SECTION (FIXED LOGIC) */}
              {(m.has3D || m.hasPhish3D || m.hasAI3D || m.hasDeque3D) ? (
                <div className="w-full lg:w-[400px] h-[300px] flex items-center justify-center bg-black/30 rounded-2xl border border-white/5 relative">
                   <div className="scale-75 md:scale-90 transform">
                      {m.hasAI3D && <AI3D />}
                      {m.hasPhish3D && <Phish3D />}
                      {m.has3D && <Glimpse3D />}
                      {m.hasDeque3D && <Deque3D />} 
                   </div>
                </div>
              ) : (
                <div className="hidden lg:flex w-[400px] h-[300px] items-center justify-center bg-white/5 rounded-2xl opacity-10">
                  <Terminal size={80} className="text-cyan-500 animate-pulse" />
                </div>
              )}

              {/* 📑 DATA SECTION */}
              <div className="flex-1 w-full text-left">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-cyan-500 text-[10px] font-bold tracking-[0.4em] uppercase">{m.tech}</span>
                    <h4 className="text-2xl md:text-3xl font-black uppercase text-white mt-1 group-hover:text-cyan-400 transition-colors">{m.title}</h4>
                  </div>
                  <span className="text-[10px] opacity-20 font-bold uppercase tracking-widest">{m.date}</span>
                </div>

                <div className="space-y-3 mb-8">
                  {m.desc.map((bullet, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <ChevronRight className="text-cyan-500 mt-1 flex-shrink-0" size={18} />
                      <p className="text-sm md:text-base text-blue-100/60 leading-relaxed font-medium">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                <a 
                  href={m.gitLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-2 border border-cyan-500/40 text-cyan-400 font-bold text-[10px] rounded-lg hover:bg-cyan-500 hover:text-white transition-all w-fit"
                >
                  <Terminal size={14} /> OPEN_GIT_SOURCE
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
