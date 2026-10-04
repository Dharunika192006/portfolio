import React from 'react';

import {
  GraduationCap,
  Code2,
  Database,
  BrainCircuit,
  Users,
  Languages,
  Sparkles
} from 'lucide-react';

import { motion } from 'framer-motion';


export default function Intel() {


  const skills = {

    programming: [
      "Java",
      "Python",
      "C",
      "C++"
    ],

    core: [
      "DBMS",
      "Big Data Analytics",
      "Computer Networks",
      "Data Structures"
    ],

    soft: [
      "Communication",
      "Teamwork",
      "Critical Thinking",
      "Continuous Learning"
    ]

  };


  return (

    <div className="min-h-screen px-5 md:px-10 py-12 md:py-20 max-w-6xl mx-auto">


      {/* ======================================================
          HEADER
      ====================================================== */}

      <div className="mb-14">

        <div className="text-cyan-500 text-[9px] tracking-[0.4em] uppercase mb-3">

          SYSTEM_PROFILE // 01

        </div>

        <h2 className="text-4xl md:text-5xl font-black text-white">

          TECH_

          <span className="text-cyan-400">
            INTEL
          </span>

        </h2>

        <div className="mt-5 h-px bg-gradient-to-r from-cyan-500/40 via-cyan-500/10 to-transparent"></div>

      </div>



      {/* ======================================================
          EDUCATION
      ====================================================== */}

      <div className="mb-20">


        <div className="flex items-center gap-3 mb-7">

          <GraduationCap
            size={17}
            className="text-cyan-400"
          />

          <h3 className="text-cyan-500 text-xs font-bold uppercase tracking-widest">

            Education_History

          </h3>

        </div>



        <div className="grid md:grid-cols-2 gap-5">


          <motion.div
            whileHover={{
              y: -5
            }}

            className="p-7 bg-cyan-900/10 border border-cyan-500/20 rounded-2xl hover:border-cyan-400/40 transition-all"
          >

            <div className="flex justify-between items-start gap-4">

              <div>

                <div className="text-xl md:text-2xl font-black text-white">

                  MEPCO SCHLENK

                </div>

                <div className="text-white/50 text-xs mt-1 uppercase tracking-wider">

                  Engineering College

                </div>

              </div>

              <GraduationCap
                size={22}
                className="text-cyan-500/40"
              />

            </div>


            <div className="text-cyan-400 text-sm mt-6 font-bold">

              B.Tech Information Technology

            </div>

            <div className="flex flex-wrap gap-3 mt-3">

              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-[9px] text-cyan-400">

                CGPA: 8.09

              </span>

              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[9px] text-white/50">

                2023 — 2027

              </span>

            </div>

          </motion.div>



          <motion.div
            whileHover={{
              y: -5
            }}

            className="p-7 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all"
          >

            <div className="flex justify-between items-start">

              <div>

                <div className="text-xl font-black text-white/80">

                  MAHATMA MONTESSORI

                </div>

                <div className="text-white/40 text-xs mt-1 uppercase">

                  School Education

                </div>

              </div>

              <GraduationCap
                size={22}
                className="text-white/20"
              />

            </div>

            <div className="text-sm text-white/60 mt-6">

              HSC — II Year

            </div>

            <div className="flex gap-3 mt-3">

              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[9px]">

                86%

              </span>

              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[9px]">

                2022 — 2023

              </span>

            </div>

          </motion.div>

        </div>

      </div>



      {/* ======================================================
          SKILLS
      ====================================================== */}

      <div>


        <div className="flex items-center gap-3 mb-8">

          <BrainCircuit
            size={17}
            className="text-cyan-400"
          />

          <h3 className="text-cyan-500 text-xs font-bold uppercase tracking-widest">

            Skill_Matrix

          </h3>

        </div>



        <div className="grid md:grid-cols-3 gap-6">


          <SkillBox
            title="Hard_Code"
            icon={<Code2 size={16} />}
            items={skills.programming}
          />


          <SkillBox
            title="Architecture"
            icon={<Database size={16} />}
            items={skills.core}
          />


          <SkillBox
            title="Human_Logic"
            icon={<Users size={16} />}
            items={skills.soft}
          />

        </div>

      </div>



      {/* ======================================================
          INTERESTS
      ====================================================== */}

      <div className="mt-16 grid md:grid-cols-2 gap-5">


        <div className="p-6 border border-cyan-500/10 rounded-2xl bg-white/[0.02]">

          <div className="flex items-center gap-3 mb-5">

            <Sparkles
              size={16}
              className="text-cyan-400"
            />

            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-500">

              Area_of_Interest

            </span>

          </div>

          <div className="flex flex-wrap gap-2">

            {[
              "UI Design",
              "Web Development",
              "AI Tools",
              "Prompt Engineering",
              "Machine Learning",
              "Data Science"
            ].map((item) => (

              <span
                key={item}
                className="px-3 py-2 bg-cyan-500/10 text-cyan-400 text-[9px] border border-cyan-500/20 rounded-lg"
              >

                {item}

              </span>

            ))}

          </div>

        </div>



        <div className="p-6 border border-cyan-500/10 rounded-2xl bg-white/[0.02]">

          <div className="flex items-center gap-3 mb-5">

            <Languages
              size={16}
              className="text-cyan-400"
            />

            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-500">

              Language_Interface

            </span>

          </div>

          <div className="flex gap-3">

            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[9px] text-white/60">

              TAMIL

            </span>

            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[9px] text-white/60">

              ENGLISH

            </span>

          </div>

        </div>

      </div>

    </div>

  );

}



// ============================================================
// SKILL BOX
// ============================================================

function SkillBox({ title, icon, items }) {

  return (

    <motion.div
      whileHover={{
        y: -5
      }}

      className="p-5 rounded-2xl bg-white/[0.025] border border-white/10 hover:border-cyan-500/30 transition-all"
    >

      <div className="flex items-center gap-3 mb-5">

        <div className="text-cyan-400">

          {icon}

        </div>

        <h4 className="text-[10px] text-cyan-500 font-bold uppercase tracking-widest">

          {title}

        </h4>

      </div>


      <div className="space-y-2">

        {items.map((item) => (

          <div
            key={item}
            className="p-3 border border-white/10 text-xs bg-white/[0.03] rounded-lg hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all"
          >

            {item}

          </div>

        ))}

      </div>

    </motion.div>

  );

}
