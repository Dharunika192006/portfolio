import React from 'react';

export default function Intel() {
  const skills = {
    programming: ["Java", "Python", "C", "C++"],
    core: ["DBMS", "Big Data Analytics", "Computer Networks", "Data Structures"],
    soft: ["Communication", "Teamwork", "Critical Thinking", "Continuous Learning"]
  };

  return (
    <div className="p-10 pt-24 max-w-5xl mx-auto">
      <h2 className="text-4xl font-black mb-12 border-b border-cyan-500/20 pb-4">TECH_INTEL</h2>
      
      {/* EDUCATION SCAN */}
      <div className="mb-16">
        <h3 className="text-cyan-500 text-xs font-bold uppercase tracking-widest mb-6">Education_History</h3>
        <div className="space-y-6">
          <div className="p-6 bg-cyan-900/10 border border-cyan-500/20 rounded-xl">
             <div className="text-2xl font-bold">MEPCO SCHLENK ENGG COLLEGE</div>
             <div className="text-cyan-400 text-sm">B.Tech IT // CGPA: 8.09 // 2023-2027</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
             <div className="text-xl font-bold opacity-70">MAHATMA MONTESSORI SCHOOL</div>
             <div className="text-sm opacity-50">HSC (II Year) - 86% // 2022-2023</div>
          </div>
        </div>
      </div>

      {/* SKILL MATRIX */}
      <div className="grid md:grid-cols-3 gap-8">
        <SkillBox title="Hard_Code" items={skills.programming} />
        <SkillBox title="Architecture" items={skills.core} />
        <SkillBox title="Human_Logic" items={skills.soft} />
      </div>
      
      {/* LANGUAGES */}
      <div className="mt-12 p-6 border-t border-cyan-500/10">
        <span className="text-[10px] opacity-40 uppercase mr-6">Languages:</span>
        <span className="font-bold text-cyan-400">TAMIL / ENGLISH</span>
      </div>
    </div>
  );
}

function SkillBox({ title, items }) {
  return (
    <div className="space-y-4">
      <h4 className="text-[10px] text-cyan-500 font-bold uppercase tracking-widest">{title}</h4>
      {items.map(i => <div key={i} className="p-3 border border-white/10 text-xs bg-white/5 rounded hover:border-cyan-500/50 transition-all">{i}</div>)}
    </div>
  );
}
