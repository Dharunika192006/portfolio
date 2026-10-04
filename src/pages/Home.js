import React from 'react';
import { motion } from 'framer-motion';

import {
  Rocket,
  Shield,
  ChevronRight,
  Cpu,
  Code2,
  Activity,
  Mail
} from 'lucide-react';

import profilePic from '../profilee.jpg';

export default function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 md:p-12 pt-28 overflow-hidden bg-transparent">

      {/* ======================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10">

        {/* ====================================================
            PROFILE IMAGE
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -30
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8
          }}
          className="relative flex justify-center lg:justify-end"
        >

          <div className="relative group">

            {/* CORNERS */}

            <div className="absolute -top-3 -left-3 w-10 h-10 border-t border-l border-cyan-500/50"></div>

            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b border-r border-cyan-500/50"></div>

            {/* IMAGE */}

            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.08)] transition-transform duration-700 group-hover:scale-[1.015]">

              <img
                src={profilePic}
                alt="Dharunika B Profile"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-cyan-500/5"></div>

              {/* SCAN */}

              <motion.div
                animate={{
                  y: [0, 300, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="absolute left-0 right-0 top-0 h-px bg-cyan-400/60 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
              />

              <div className="absolute bottom-3 left-3">

                <div className="px-2 py-1 bg-cyan-600 text-white text-[8px] font-bold uppercase tracking-[0.2em] rounded-sm">
                  READY_TO_EXPLORE
                </div>

              </div>

            </div>

            {/* STATUS */}

            <div className="absolute -right-5 top-8 hidden md:flex items-center gap-2 px-3 py-2 bg-black/70 border border-cyan-500/20 rounded-lg backdrop-blur-md">

              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>

              <span className="text-[8px] text-cyan-400 tracking-widest">
                ONLINE
              </span>

            </div>

          </div>

        </motion.div>

        {/* ====================================================
            PROFILE INFORMATION
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 30
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.15
          }}
          className="text-left"
        >

          {/* TOP LABEL */}

          <div className="flex items-center gap-2 mb-5">

            <span className="h-px w-7 bg-cyan-500/50"></span>

            <span className="text-cyan-400 text-[9px] font-bold tracking-[0.3em] uppercase">
              Institutional_Link // Mepco
            </span>

          </div>

          {/* NAME */}

          <div className="text-cyan-500/50 text-[10px] tracking-[0.4em] mb-2">
            IDENTIFICATION
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5 tracking-tight uppercase">

            DHARUNIKA

            <span className="text-cyan-500">
              .B
            </span>

          </h1>

          <h2 className="text-xl md:text-2xl font-bold text-white/80 mb-5">

            Crafting the{' '}

            <span className="text-cyan-400">
              Next Frontier
            </span>

          </h2>

          {/* DESCRIPTION */}

          <p className="text-blue-100/50 text-xs md:text-sm leading-relaxed max-w-lg mb-7 uppercase tracking-wider font-medium border-l border-cyan-500/20 pl-5">

            Aspiring{' '}

            <span className="text-white">
              Java Developer
            </span>{' '}

            and enthusiast in{' '}

            <span className="text-white">
              Prompt Engineering
            </span>.

            Exploring{' '}

            <span className="text-cyan-400">
              AI Security
            </span>{' '}

            while designing user-centric{' '}

            <span className="text-cyan-400">
              UI/UX Frontends
            </span>.

          </p>

          {/* SOCIAL LINKS */}

          <div className="flex flex-wrap gap-3 mb-8 pl-5">

            {/* GITHUB */}

            <a
              href="https://github.com/Dharunika192006"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
            >

             <span className="text-[11px] font-black text-white/70 group-hover:text-cyan-400">
  GH
</span>

              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/70 group-hover:text-cyan-400">
                GitHub
              </span>

            </a>

            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/dharunika-balamoorthy-43a027365/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
            >

              {/* LinkedIn icon replacement */}
              <span
                className="w-[14px] h-[14px] flex items-center justify-center rounded-[2px] bg-blue-500 text-white text-[9px] font-black leading-none group-hover:bg-cyan-400 transition-colors"
              >
                in
              </span>

              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/70 group-hover:text-cyan-400">
                LinkedIn
              </span>

            </a>

            {/* EMAIL */}

            <a
              href="mailto:dharunikabalamoorthy@gmail.com"
              className="group flex items-center gap-2.5 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
            >

              <Mail
                size={14}
                className="text-white/70 group-hover:text-cyan-400"
              />

              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/70 group-hover:text-cyan-400">
                Email
              </span>

            </a>

          </div>

          {/* ACTION CARDS */}

          <div className="grid gap-3 max-w-lg">

            {/* PROJECTS */}

            <button
              onClick={() => scrollTo('missions')}
              className="group flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all text-left"
            >

              <div className="flex items-center gap-3">

                <Rocket
                  className="text-cyan-500/70"
                  size={16}
                />

                <div>

                  <div className="text-white font-bold text-[10px] uppercase tracking-widest">
                    Tactical_Missions
                  </div>

                  <div className="text-[8px] opacity-30 uppercase tracking-tighter">
                    Explore_Project_Archives
                  </div>

                </div>

              </div>

              <ChevronRight
                className="opacity-10 group-hover:opacity-100 transition-transform group-hover:translate-x-1"
                size={14}
              />

            </button>

            {/* RECORDS */}

            <button
              onClick={() => scrollTo('records')}
              className="group flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all text-left"
            >

              <div className="flex items-center gap-3">

                <Shield
                  className="text-cyan-500/70"
                  size={16}
                />

                <div>

                  <div className="text-white font-bold text-[10px] uppercase tracking-widest">
                    Combat_Records
                  </div>

                  <div className="text-[8px] opacity-30 uppercase tracking-tighter">
                    Experience_And_Achievements
                  </div>

                </div>

              </div>

              <ChevronRight
                className="opacity-10 group-hover:opacity-100 transition-transform group-hover:translate-x-1"
                size={14}
              />

            </button>

          </div>

          {/* STATS */}

          <div className="mt-8 flex flex-wrap gap-8 border-t border-white/5 pt-6 pl-5">

            {/* CGPA */}

            <div className="flex items-center gap-2">

              <Cpu
                className="text-cyan-500/30"
                size={18}
              />

              <div>

                <div className="text-cyan-500 text-xl font-black">
                  8.09
                </div>

                <div className="text-[8px] opacity-20 uppercase tracking-widest">
                  Cumulative_CGPA
                </div>

              </div>

            </div>

            {/* GRADUATION */}

            <div className="flex items-center gap-2">

              <Code2
                className="text-cyan-500/30"
                size={18}
              />

              <div>

                <div className="text-cyan-500 text-xl font-black">
                  2027
                </div>

                <div className="text-[8px] opacity-20 uppercase tracking-widest">
                  Graduation_Year
                </div>

              </div>

            </div>

            {/* INTEREST */}

            <div className="flex items-center gap-2">

              <Activity
                className="text-cyan-500/30"
                size={18}
              />

              <div>

                <div className="text-cyan-500 text-xl font-black">
                  AI
                </div>

                <div className="text-[8px] opacity-20 uppercase tracking-widest">
                  Core_Interest
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}

      <motion.div
        animate={{
          y: [0, 8, 0]
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-cyan-500/30"
      >

        <span className="text-[7px] tracking-[0.4em]">
          SCROLL_TO_EXPLORE
        </span>

        <ChevronRight
          size={14}
          className="rotate-90"
        />

      </motion.div>

    </div>
  );
}