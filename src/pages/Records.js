import React from 'react';

import {
  Trophy,
  Users,
  Award,
  Heart,
  Sparkles
} from 'lucide-react';

import { motion } from 'framer-motion';


export default function Records() {


  const certs = [
    "IIT Bombay Java",
    "Infosys Agile Scrum",
    "Infosys Software Testing",
    "NPTEL Data Analytics (Python)",
    "NPTEL IoT (Elite)",
    "IEEE Tech English"
  ];


  const roles = [
    "Office Bearer (NSS Club)",
    "Member (Google Club)",
    "Member (Finearts Club)"
  ];


  return (

    <div className="min-h-screen px-5 md:px-10 py-12 md:py-20 max-w-6xl mx-auto">


      {/* ======================================================
          HEADER
      ====================================================== */}

      <div className="mb-14">

        <div className="text-cyan-500 text-[9px] tracking-[0.4em] uppercase mb-3">

          SYSTEM_ARCHIVE // 03

        </div>

        <h2 className="text-4xl md:text-5xl font-black text-white">

          <span className="text-cyan-400">
            ARCHIVES
          </span>

        </h2>

        <div className="mt-5 h-px bg-gradient-to-r from-cyan-500/40 via-cyan-500/10 to-transparent"></div>

      </div>



      <div className="grid lg:grid-cols-2 gap-10">


        {/* ====================================================
            ACHIEVEMENTS
        ==================================================== */}

        <section>

          <div className="flex items-center gap-3 mb-7">

            <Trophy
              size={17}
              className="text-cyan-400"
            />

            <h3 className="text-cyan-500 text-xs font-bold uppercase tracking-widest">

              Physical_Achievements

            </h3>

          </div>



          <div className="space-y-5">


            <motion.div
              whileHover={{
                y: -5
              }}

              className="p-7 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-cyan-500/30 transition-all"
            >

              <div className="flex items-start justify-between">

                <div>

                  <div className="text-2xl font-black text-white">

                    CM TROPHY WINNER

                  </div>

                  <div className="text-xs text-cyan-400 mt-2 uppercase tracking-widest">

                    Handball // Rs.2000 Reward

                  </div>

                </div>

                <Trophy
                  size={22}
                  className="text-cyan-500/40"
                />

              </div>

            </motion.div>



            <motion.div
              whileHover={{
                y: -5
              }}

              className="p-7 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-cyan-500/30 transition-all"
            >

              <div className="flex items-start justify-between">

                <div>

                  <div className="text-2xl font-black text-white">

                    ZONAL RUNNER UP

                  </div>

                  <div className="text-xs text-cyan-400 mt-2 uppercase tracking-widest">

                    Handball Tournament 2025

                  </div>

                </div>

                <Award
                  size={22}
                  className="text-cyan-500/40"
                />

              </div>

            </motion.div>

          </div>



          {/* ROLES */}

          <div className="mt-12">

            <div className="flex items-center gap-3 mb-7">

              <Users
                size={17}
                className="text-cyan-400"
              />

              <h3 className="text-cyan-500 text-xs font-bold uppercase tracking-widest">

                Base_Roles

              </h3>

            </div>


            <div className="space-y-3">

              {roles.map((role) => (

                <div
                  key={role}
                  className="flex gap-4 items-center p-4 bg-white/[0.02] border border-white/5 rounded-xl"
                >

                  <span className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>

                  <span className="text-sm text-white/60">

                    {role}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </section>



        {/* ====================================================
            CERTIFICATIONS
        ==================================================== */}

        <section>

          <div className="flex items-center gap-3 mb-7">

            <Award
              size={17}
              className="text-cyan-400"
            />

            <h3 className="text-cyan-500 text-xs font-bold uppercase tracking-widest">

              Technical_Clearances

            </h3>

          </div>



          <div className="grid gap-3">

            {certs.map((cert, index) => (

              <motion.div
                key={cert}

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
                  delay: index * 0.06
                }}

                className="group p-4 bg-white/[0.03] border border-white/5 rounded-xl text-[10px] uppercase tracking-widest hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all"
              >

                <div className="flex items-center justify-between">

                  <span className="text-white/60 group-hover:text-cyan-400 transition-colors">

                    {cert}

                  </span>

                  <span className="text-cyan-500/20 group-hover:text-cyan-500/70">

                    VERIFIED

                  </span>

                </div>

              </motion.div>

            ))}

          </div>



          {/* INTERESTS */}

          <div className="mt-12">

            <div className="flex items-center gap-3 mb-6">

              <Sparkles
                size={17}
                className="text-cyan-400"
              />

              <h3 className="text-cyan-500 text-xs font-bold uppercase tracking-widest">

                Area_of_Interest

              </h3>

            </div>


            <div className="flex flex-wrap gap-2">

              {[
                "UI Design",
                "Web Dev",
                "AI Tools",
                "Prompt Engineering",
                "Machine Learning",
                "Data Science"
              ].map((item) => (

                <span
                  key={item}
                  className="px-4 py-2 bg-cyan-500/10 text-cyan-400 text-[10px] border border-cyan-500/30 rounded-full hover:bg-cyan-500/20 transition-all"
                >

                  {item}

                </span>

              ))}

            </div>

          </div>



          {/* SMALL MESSAGE */}

          <div className="mt-12 p-5 border border-cyan-500/10 rounded-2xl bg-cyan-500/[0.02]">

            <div className="flex items-center gap-3">

              <Heart
                size={15}
                className="text-cyan-400"
              />

              <span className="text-[9px] uppercase tracking-widest text-white/40">

                Always_Learning // Always_Building

              </span>

            </div>

          </div>

        </section>

      </div>

    </div>

  );

}
