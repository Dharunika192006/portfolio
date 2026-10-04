import React from 'react';

import {
  Trophy,
  Award,
  Medal,
  CheckCircle2,
  Star
} from 'lucide-react';

import { motion } from 'framer-motion';


export default function Achievements() {


  const certifications = [
    {
      title: "IIT Bombay Java Training",
      year: "2025-26"
    },
    {
      title: "Infosys Agile Scrum",
      year: "2025-26"
    },
    {
      title: "NPTEL Python Data Science",
      year: "2024-25"
    },
    {
      title: "IEEE Technical English",
      year: "2023-24"
    }
  ];


  return (

    <div className="min-h-screen px-5 md:px-10 py-12 md:py-20 max-w-6xl mx-auto">


      {/* ======================================================
          HEADER
      ====================================================== */}

      <div className="mb-14">

        <div className="text-cyan-500 text-[9px] tracking-[0.4em] uppercase mb-3">

          ACHIEVEMENT_DATABASE // 04

        </div>

        <h2 className="text-4xl md:text-5xl font-black text-white">

          COMBAT_

          <span className="text-cyan-400">
            RECORDS
          </span>

        </h2>

        <div className="mt-5 h-px bg-gradient-to-r from-cyan-500/40 via-cyan-500/10 to-transparent"></div>

      </div>



      <div className="grid lg:grid-cols-2 gap-8">


        {/* ====================================================
            SPORTS ACHIEVEMENTS
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: true
          }}

          className="p-7 md:p-9 bg-white/[0.03] border border-white/10 rounded-3xl hover:border-cyan-500/30 transition-all"
        >

          <div className="flex items-center gap-3 mb-8">

            <Trophy
              className="text-cyan-400"
              size={21}
            />

            <h3 className="text-xl font-bold text-cyan-400 uppercase tracking-widest">

              Physical Excellence

            </h3>

          </div>



          <div className="space-y-8">


            <div className="border-b border-white/5 pb-7">

              <div className="flex items-start gap-4">

                <Medal
                  size={24}
                  className="text-cyan-500/60 mt-1"
                />

                <div>

                  <div className="text-2xl md:text-3xl font-black text-white">

                    CM TROPHY WINNER

                  </div>

                  <div className="text-cyan-300 text-xs mt-2 font-bold uppercase tracking-widest">

                    Handball // Cash Prize: Rs.2000

                  </div>

                </div>

              </div>

            </div>



            <div>

              <div className="flex items-start gap-4">

                <Trophy
                  size={24}
                  className="text-cyan-500/60 mt-1"
                />

                <div>

                  <div className="text-2xl md:text-3xl font-black text-white">

                    ZONAL RUNNER UP

                  </div>

                  <div className="text-cyan-300 text-xs mt-2 font-bold uppercase tracking-widest">

                    Zonal Level Handball // Feb 11, 2025

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>



        {/* ====================================================
            CERTIFICATIONS
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: true
          }}

          transition={{
            delay: 0.1
          }}

          className="p-7 md:p-9 bg-white/[0.03] border border-white/10 rounded-3xl hover:border-cyan-500/30 transition-all"
        >

          <div className="flex items-center gap-3 mb-8">

            <Award
              className="text-cyan-400"
              size={21}
            />

            <h3 className="text-xl font-bold text-cyan-400 uppercase tracking-widest">

              Training Clearances

            </h3>

          </div>



          <div className="space-y-3">

            {certifications.map((cert, index) => (

              <motion.div
                key={cert.title}

                initial={{
                  opacity: 0,
                  x: 15
                }}

                whileInView={{
                  opacity: 1,
                  x: 0
                }}

                viewport={{
                  once: true
                }}

                transition={{
                  delay: index * 0.08
                }}

                className="group flex items-center justify-between gap-4 p-4 border border-white/5 rounded-xl bg-white/[0.02] hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
              >

                <div className="flex items-center gap-3">

                  <CheckCircle2
                    size={15}
                    className="text-cyan-500/50 group-hover:text-cyan-400 transition-colors"
                  />

                  <span className="text-sm text-white/70 group-hover:text-white transition-colors">

                    {cert.title}

                  </span>

                </div>

                <span className="text-[9px] text-cyan-400 whitespace-nowrap">

                  {cert.year}

                </span>

              </motion.div>

            ))}

          </div>



          <div className="mt-8 pt-7 border-t border-white/5">

            <div className="flex items-center gap-3">

              <Star
                size={16}
                className="text-cyan-400"
              />

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">

                Continuous_Learning_Protocol: ACTIVE

              </span>

            </div>

          </div>

        </motion.div>

      </div>



      {/* ======================================================
          ACHIEVEMENT MESSAGE
      ====================================================== */}

      <div className="mt-12 p-6 border border-cyan-500/10 rounded-2xl bg-cyan-500/[0.02] text-center">

        <div className="text-[9px] text-cyan-500/60 tracking-[0.4em] uppercase mb-2">

          SYSTEM_STATUS

        </div>

        <div className="text-sm text-white/50">

          Achievement log continuously expanding.

        </div>

      </div>

    </div>

  );

}
