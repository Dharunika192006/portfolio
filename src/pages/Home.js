import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Shield, 
  ChevronRight, 
  Cpu, 
  Code2, 
  Terminal, 
  Activity // Using Activity as a safe alternative to Linkedin
} from 'lucide-react';
import profilePic from '../profile.jpg'; 

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 md:p-12 overflow-hidden bg-[#020617]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* 🛰️ LEFT: THE AGENT PROFILE */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative group">
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-cyan-500/40"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b border-r border-cyan-500/40"></div>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden border border-white/5 shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
              <img 
                src={profilePic} 
                alt="Dharunika B Profile" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-3 left-3">
                 <div className="px-2 py-0.5 bg-cyan-600 text-white text-[8px] font-bold uppercase tracking-[0.2em] rounded-sm">
                   READY_TO_EXPLORE
                 </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 🚀 RIGHT: COMPACT BIO */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-cyan-500/50"></span>
            <span className="text-cyan-400 text-[10px] font-bold tracking-[0.3em] uppercase">Institutional_Link // Mepco</span>
          </div>

          <motion.h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 tracking-tight uppercase">
            Crafting the<br/>
            <span className="text-cyan-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">Next Frontier</span>
          </motion.h1>

          <p className="text-blue-100/50 text-xs md:text-sm leading-relaxed max-w-md mb-6 uppercase tracking-widest font-medium border-l border-cyan-500/20 pl-5">
            Aspiring <span className="text-white">Java Developer</span> and enthusiast in <span className="text-white">Prompt Engineering</span>. 
            Exploring <span className="text-cyan-400">AI Security</span> while designing user-centric <span className="text-cyan-400">UI/UX Frontends</span>. 
          </p>

          {/* 🔗 LINK BAR WITH SAFE ICONS */}
          <div className="flex gap-4 mb-8 pl-5">
            <a 
              href="https://github.com/Dharunika192006" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
            >
              <Terminal size={14} className="text-white/70 group-hover:text-cyan-400" />
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/70 group-hover:text-cyan-400">GitHub_Link</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/dharunika-balamoorthy-43a027365/?skipRedirect=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
            >
              <Activity size={14} className="text-blue-400 group-hover:text-cyan-400" />
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/70 group-hover:text-cyan-400">LinkedIn_Link</span>
            </a>
          </div>

          {/* 🎮 COMPACT NAV CARDS */}
          <div className="grid gap-3 max-w-sm">
            <Link to="/missions" className="group flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all">
              <div className="flex items-center gap-3">
                <Rocket className="text-cyan-500/70" size={16} />
                <div>
                   <div className="text-white font-bold text-[10px] uppercase tracking-widest">Tactical_Missions</div>
                   <div className="text-[8px] opacity-30 uppercase tracking-tighter">Enter_Project_Archives</div>
                </div>
              </div>
              <ChevronRight className="opacity-10 group-hover:opacity-100 transition-transform group-hover:translate-x-1" size={14} />
            </Link>

            <Link to="/records" className="group flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all">
              <div className="flex items-center gap-3">
                <Shield className="text-cyan-500/70" size={16} />
                <div>
                   <div className="text-white font-bold text-[10px] uppercase tracking-widest">Combat_Records</div>
                   <div className="text-[8px] opacity-30 uppercase tracking-tighter">View_Achievements</div>
                </div>
              </div>
              <ChevronRight className="opacity-10 group-hover:opacity-100 transition-transform group-hover:translate-x-1" size={14} />
            </Link>
          </div>

          {/* COMPACT STATS */}
          <div className="mt-8 flex gap-10 border-t border-white/5 pt-6 pl-5">
             <div className="flex items-center gap-2">
                <Cpu className="text-cyan-500/30" size={18} />
                <div>
                  <div className="text-cyan-500 text-xl font-black">8.09</div>
                  <div className="text-[8px] opacity-20 uppercase tracking-widest">Cumulative_CGPA</div>
                </div>
             </div>
             <div className="flex items-center gap-2">
                <Code2 className="text-cyan-500/30" size={18} />
                <div>
                  <div className="text-cyan-500 text-xl font-black">2027</div>
                  <div className="text-[8px] opacity-20 uppercase tracking-widest">Graduation_Year</div>
                </div>
             </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
