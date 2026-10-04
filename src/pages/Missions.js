import React, { useEffect, useState } from 'react';

import {
  Terminal,
  ChevronRight,
  ShieldCheck,
  ExternalLink,
  ChevronLeft,
  ChevronRight as ArrowRight,
  Image as ImageIcon
} from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

import Glimpse3D from '../components/Glimpse3D';
import Phish3D from '../components/Phish3D';
import AI3D from '../components/AI3D';
import Deque3D from '../components/Deque3D';


// ============================================================
// NIDS PROJECT SCREENSHOTS
// ============================================================

import nids1 from '../assets/project5/nids1.png';
import nids2 from '../assets/project5/nids2.png';
import nids3 from '../assets/project5/nids3.png';
import nids4 from '../assets/project5/nids4.png';
import nids5 from '../assets/project5/nids5.png';
import nids6 from '../assets/project5/nids6.png';
import nids7 from '../assets/project5/nids7.png';


// ============================================================
// NIDS ANIMATED SCREENSHOT GALLERY
// ============================================================

function NIDSCarousel({ images }) {

  const [current, setCurrent] = useState(0);

  const [isPaused, setIsPaused] = useState(false);


  // ----------------------------------------------------------
  // AUTOMATIC SLIDESHOW
  // ----------------------------------------------------------

  useEffect(() => {

    if (isPaused) return;

    const timer = setInterval(() => {

      setCurrent((prev) =>
        (prev + 1) % images.length
      );

    }, 4000);

    return () => clearInterval(timer);

  }, [images.length, isPaused]);


  // ----------------------------------------------------------
  // NEXT IMAGE
  // ----------------------------------------------------------

  const nextImage = () => {

    setCurrent((prev) =>
      (prev + 1) % images.length
    );

  };


  // ----------------------------------------------------------
  // PREVIOUS IMAGE
  // ----------------------------------------------------------

  const previousImage = () => {

    setCurrent((prev) =>
      (prev - 1 + images.length) % images.length
    );

  };


  return (

    <div
      className="relative w-full h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >


      {/* ======================================================
          SCREENSHOT CONTAINER
      ====================================================== */}

      <div className="relative w-full h-[300px] md:h-[340px] bg-[#020817] rounded-2xl overflow-hidden border border-cyan-500/20">


        {/* ----------------------------------------------------
            CYAN GLOW
        ---------------------------------------------------- */}

        <div className="absolute inset-0 bg-cyan-500/5 pointer-events-none z-10"></div>


        {/* ----------------------------------------------------
            TOP HUD BAR
        ---------------------------------------------------- */}

        <div className="absolute top-0 left-0 right-0 z-30 h-9 bg-black/70 backdrop-blur-md border-b border-cyan-500/20 flex items-center justify-between px-4">

          <div className="flex items-center gap-2">

            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>

            <span className="text-[8px] md:text-[9px] font-bold tracking-[0.25em] text-cyan-400 uppercase">

              NIDS // SYSTEM_VISUAL

            </span>

          </div>


          <span className="text-[8px] text-cyan-500/70 font-mono">

            LIVE_FEED

          </span>

        </div>


        {/* ----------------------------------------------------
            ANIMATED SCREENSHOT
        ---------------------------------------------------- */}

        <AnimatePresence mode="wait">

          <motion.div
            key={current}
            initial={{
              opacity: 0,
              scale: 1.06,
              x: 25
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              scale: 0.97,
              x: -25
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut"
            }}
            className="absolute inset-0 flex items-center justify-center pt-9 pb-8"
          >

            <img
              src={images[current]}
              alt={`Network Intrusion Detection screenshot ${current + 1}`}
              className="w-full h-full object-contain p-3 md:p-5"
            />

          </motion.div>

        </AnimatePresence>


        {/* ----------------------------------------------------
            SCANNING LINE ANIMATION
        ---------------------------------------------------- */}

        <motion.div
          animate={{
            y: [0, 300, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute left-0 right-0 top-10 h-[2px] bg-cyan-400/40 shadow-[0_0_12px_rgba(34,211,238,0.8)] z-20 pointer-events-none"
        />


        {/* ----------------------------------------------------
            CORNER HUD - TOP LEFT
        ---------------------------------------------------- */}

        <div className="absolute top-12 left-3 z-30 text-cyan-400/70 text-[8px] font-mono">

          SYS://NIDS

        </div>


        {/* ----------------------------------------------------
            CORNER HUD - TOP RIGHT
        ---------------------------------------------------- */}

        <div className="absolute top-12 right-3 z-30 text-cyan-400/70 text-[8px] font-mono">

          SECURE

        </div>


        {/* ----------------------------------------------------
            PREVIOUS BUTTON
        ---------------------------------------------------- */}

        <button
          onClick={previousImage}
          aria-label="Previous screenshot"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-40 w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/70 border border-cyan-500/30 text-cyan-400 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all duration-300"
        >

          <ChevronLeft size={18} />

        </button>


        {/* ----------------------------------------------------
            NEXT BUTTON
        ---------------------------------------------------- */}

        <button
          onClick={nextImage}
          aria-label="Next screenshot"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-40 w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/70 border border-cyan-500/30 text-cyan-400 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all duration-300"
        >

          <ArrowRight size={18} />

        </button>


        {/* ----------------------------------------------------
            BOTTOM COUNTER
        ---------------------------------------------------- */}

        <div className="absolute bottom-2 left-3 z-30 flex items-center gap-2">

          <ImageIcon
            size={11}
            className="text-cyan-400"
          />

          <span className="text-[9px] font-mono text-cyan-400">

            {String(current + 1).padStart(2, '0')}
            {" / "}
            {String(images.length).padStart(2, '0')}

          </span>

        </div>


        {/* ----------------------------------------------------
            IMAGE INDICATOR DOTS
        ---------------------------------------------------- */}

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-40 flex gap-1.5">

          {images.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to screenshot ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === current
                  ? 'w-6 bg-cyan-400'
                  : 'w-1.5 bg-cyan-400/30 hover:bg-cyan-400/70'
              }`}
            />

          ))}

        </div>


        {/* ----------------------------------------------------
            PAUSED INDICATOR
        ---------------------------------------------------- */}

        {isPaused && (

          <div className="absolute bottom-2 right-3 z-30 text-[8px] text-yellow-400/70 font-mono uppercase">

            AUTO_SCAN_PAUSED

          </div>

        )}

      </div>


      {/* ======================================================
          THUMBNAIL STRIP
      ====================================================== */}

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-thin">

        {images.map((image, index) => (

          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`relative flex-shrink-0 w-14 h-10 rounded-md overflow-hidden border transition-all duration-300 ${
              current === index
                ? 'border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.4)] scale-105'
                : 'border-white/10 opacity-50 hover:opacity-100'
            }`}
          >

            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20"></div>

          </button>

        ))}

      </div>

    </div>

  );

}



// ============================================================
// MAIN MISSIONS PAGE
// ============================================================

export default function Missions() {


  // ==========================================================
  // PROJECT DATA
  // ==========================================================

  const missions = [

    // ========================================================
    // M-01 — HYBRID CSA-PSO NIDS
    // ========================================================

    {
      title:
        "HYBRID CSA-PSO OPTIMIZED MULTI-CLASS SVM FOR NETWORK INTRUSION DETECTION",

      id: "M-01",

      date: "2025-26",

      gitLink:
        "https://github.com/Dharunika192006/nids-project",

      liveLink:
        "https://timely-fox-fcdcc8.netlify.app/",

      screenshots: [
        nids1,
        nids2,
        nids3,
        nids4,
        nids5,
        nids6,
        nids7
      ],

      desc: [

        "Developed a machine learning-based intrusion detection system for identifying and classifying network attacks in cloud computing environments.",

        "Used XGBoost for effective feature selection and a hybrid Crow Search Algorithm with Particle Swarm Optimization for SVM parameter optimization.",

        "Implemented Multi-Class SVM for attack classification with real-time network packet capture and monitoring using Python and Scapy."

      ],

      tech:
        "Python / XGBoost / SVM / CSA-PSO / Scapy"
    },


    // ========================================================
    // M-02 — DEPARTMENTAL STORE
    // ========================================================

    {
      title:
        "DEPARTMENTAL STORE MGMT SYSTEM",

      id: "M-02",

      date: "2024-25",

      gitLink:
        "https://github.com/Dharunika192006",

      has3D: true,

      desc: [

        "Full-stack Java solution for real-time retail inventory management.",

        "Synchronized multi-table DBMS for stock, employee, customer, and product tracking.",

        "Implemented efficient database operations for rapid product identification and management."

      ],

      tech:
        "Java / MySQL / DBMS / UI"
    },


    // ========================================================
    // M-03 — AI INTERVIEW QUESTION GENERATOR
    // ========================================================

    {
      title:
        "AI-BASED INTERVIEW QUESTION GENERATOR",

      id: "M-03",

      date: "2025-26",

      gitLink:
        "https://github.com/Dharunika192006/AI-BASED-INTERVIEW-QUESTIONS-GENERATOR",

      hasAI3D: true,

      desc: [

        "Developed an automated system for generating technical interview questions based on specific roles and technologies.",

        "Engineered logic for dynamic, role-specific question generation and retrieval.",

        "Integrated database management for organizing and efficiently retrieving interview questions."

      ],

      tech:
        "Java / SQL / AI Logic"
    },


    // ========================================================
    // M-04 — PHISHING DETECTION
    // ========================================================

    {
      title:
        "PHISHING DETECTION FRAMEWORK",

      id: "M-04",

      date: "2025-26",

      gitLink:
        "https://github.com/Dharunika192006",

      hasPhish3D: true,

      desc: [

        "Developed an Explainable Federated Learning framework for real-time phishing detection.",

        "Applied decentralized machine learning to improve privacy while detecting malicious email patterns.",

        "Integrated explainability techniques to provide interpretable insights into phishing predictions."

      ],

      tech:
        "Python / Federated Learning / AI-ML"
    },


    // ========================================================
    // M-05 — DOUBLE ENDED QUEUE
    // ========================================================

    {
      title:
        "DOUBLE-ENDED QUEUE (DEQUE)",

      id: "M-05",

      date: "2024-25",

      gitLink:
        "https://github.com/Dharunika192006",

      hasDeque3D: true,

      desc: [

        "Technical implementation demonstrating the efficiency of Double-Ended Queue data structures.",

        "Optimized insertion and deletion operations at both ends with O(1) time complexity.",

        "Simulated real-time buffer scenarios to validate queue operations and data structure logic."

      ],

      tech:
        "C++ / Data Structures / Algorithms"
    }

  ];


  // ==========================================================
  // PAGE
  // ==========================================================

  return (

    <div className="p-4 md:p-10 pt-28 max-w-7xl mx-auto mb-20">


      {/* ======================================================
          PAGE HEADER
      ====================================================== */}

      <div className="mb-12 text-center">

        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-2 text-white">

          Active_

          <span className="text-cyan-500 font-extrabold">
            Missions
          </span>

        </h2>

        <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full opacity-50"></div>

      </div>



      {/* ======================================================
          INTERNSHIP HUD
      ====================================================== */}

      <div className="mb-12 p-6 md:p-8 rounded-3xl bg-[#0a1930]/40 border border-cyan-500/20 backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex-1 text-left">

          <span className="text-cyan-400 font-bold text-[10px] tracking-[0.3em] uppercase block mb-1">

            Internship_Verified

          </span>

          <h3 className="text-xl md:text-2xl font-black uppercase text-white">

            Elysiam Intelligence Solutions

          </h3>

          <p className="text-blue-100/50 text-sm mt-1 uppercase tracking-wider font-bold">

            Data Science // Python // June 2025

          </p>

        </div>


        <a
          href="https://drive.google.com/file/d/1gIGlU10vPTfvHqCA45xPWvQs4oU1AdSi/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 bg-white text-black font-black text-xs rounded-xl hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-105 whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >

          <ShieldCheck size={16} />

          VERIFY_CREDENTIALS

        </a>

      </div>



      {/* ======================================================
          PROJECT GRID
      ====================================================== */}

      <div className="grid gap-8">


        {missions.map((m) => (

          <motion.div
            key={m.id}

            initial={{
              opacity: 0,
              y: 30
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            viewport={{
              once: true,
              amount: 0.15
            }}

            transition={{
              duration: 0.6
            }}

            className="group relative bg-[#0a1128]/60 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-cyan-500/30 transition-all overflow-hidden"
          >


            {/* ==================================================
                CYBER BACKGROUND GLOW
            ================================================== */}

            <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>



            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">


              {/* =================================================
                  VISUAL SECTION
              ================================================= */}

              <div className="w-full lg:w-[400px] flex-shrink-0">


                {/* ==============================================
                    NIDS SCREENSHOT ANIMATION
                ============================================== */}

                {m.screenshots ? (

                  <NIDSCarousel
                    images={m.screenshots}
                  />

                ) : (

                  /* ==============================================
                     EXISTING 3D VISUALS
                  ============================================== */

                  (m.has3D ||
                    m.hasPhish3D ||
                    m.hasAI3D ||
                    m.hasDeque3D) ? (

                    <div className="w-full h-[300px] flex items-center justify-center bg-black/30 rounded-2xl border border-white/5 relative">

                      <div className="scale-75 md:scale-90 transform">

                        {m.hasAI3D && <AI3D />}

                        {m.hasPhish3D && <Phish3D />}

                        {m.has3D && <Glimpse3D />}

                        {m.hasDeque3D && <Deque3D />}

                      </div>

                    </div>

                  ) : (

                    <div className="hidden lg:flex w-full h-[300px] items-center justify-center bg-white/5 rounded-2xl opacity-10">

                      <Terminal
                        size={80}
                        className="text-cyan-500 animate-pulse"
                      />

                    </div>

                  )

                )}

              </div>



              {/* =================================================
                  PROJECT INFORMATION
              ================================================= */}

              <div className="flex-1 w-full text-left">


                {/* =================================================
                    PROJECT TITLE
                ================================================= */}

                <div className="flex justify-between items-start mb-4">

                  <div>

                    <span className="text-cyan-500 text-[10px] font-bold tracking-[0.4em] uppercase">

                      {m.tech}

                    </span>


                    <h4 className="text-2xl md:text-3xl font-black uppercase text-white mt-1 group-hover:text-cyan-400 transition-colors">

                      {m.title}

                    </h4>

                  </div>


                  <span className="text-[10px] opacity-20 font-bold uppercase tracking-widest">

                    {m.date}

                  </span>

                </div>



                {/* =================================================
                    PROJECT DESCRIPTION
                ================================================= */}

                <div className="space-y-3 mb-8">

                  {m.desc.map((bullet, i) => (

                    <motion.div
                      key={i}

                      initial={{
                        opacity: 0,
                        x: -10
                      }}

                      whileInView={{
                        opacity: 1,
                        x: 0
                      }}

                      viewport={{
                        once: true
                      }}

                      transition={{
                        duration: 0.4,
                        delay: i * 0.1
                      }}

                      className="flex gap-3 items-start"
                    >

                      <ChevronRight
                        className="text-cyan-500 mt-1 flex-shrink-0"
                        size={18}
                      />

                      <p className="text-sm md:text-base text-blue-100/60 leading-relaxed font-medium">

                        {bullet}

                      </p>

                    </motion.div>

                  ))}

                </div>



                {/* =================================================
                    PROJECT BUTTONS
                ================================================= */}

                <div className="flex flex-wrap gap-3">


                  {/* ===============================================
                      GITHUB
                  =============================================== */}

                  <a
                    href={m.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="flex items-center gap-3 px-5 py-2 border border-cyan-500/40 text-cyan-400 font-bold text-[10px] rounded-lg hover:bg-cyan-500 hover:text-white transition-all w-fit"
                  >

                    <Terminal size={14} />

                    OPEN_GIT_SOURCE

                  </a>



                  {/* ===============================================
                      LIVE DEMO
                  =============================================== */}

                  {m.liveLink && (

                    <a
                      href={m.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"

                      className="flex items-center gap-3 px-5 py-2 border border-blue-500/40 text-blue-400 font-bold text-[10px] rounded-lg hover:bg-blue-500 hover:text-white transition-all w-fit"
                    >

                      <ExternalLink size={14} />

                      LIVE_DEMO

                    </a>

                  )}

                </div>


              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  );

}
