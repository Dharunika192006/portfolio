import React from 'react';

export default function Database() {
  const skills = ["Java", "Python", "C/C++", "Big Data", "DBMS", "UI Design"];
  
  return (
    <div className="pt-40 px-10 pb-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
      <section>
        <h2 className="text-3xl font-black mb-10 border-l-4 border-cyan-500 pl-6 uppercase">System_Archives</h2>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8">
          <h3 className="text-cyan-500 text-xs font-bold uppercase mb-6 tracking-widest">Physical Achievements</h3>
          <div className="space-y-6">
            <div className="border-b border-white/5 pb-4">
              <p className="text-2xl font-bold">CM TROPHY - HANDBALL</p>
              <p className="text-sm opacity-50 uppercase mt-1">First Place // Rs. 2000 Reward</p>
            </div>
            <div>
              <p className="text-2xl font-bold">ZONAL RUNNER UP</p>
              <p className="text-sm opacity-50 uppercase mt-1">Zonal Tournament // Feb 11, 2025</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {skills.map(s => (
            <div key={s} className="p-4 border border-white/10 rounded-xl text-center text-xs uppercase tracking-widest opacity-60 hover:opacity-100 hover:border-cyan-500 transition-all">{s}</div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-black mb-10 border-l-4 border-cyan-500 pl-6 uppercase">Certifications</h2>
        <div className="space-y-3">
          {[
            "IIT Bombay Java Training", "Infosys Associate IT Skills", 
            "Agile Scrum Practitioner", "NPTEL Data Analytics (Python)",
            "IEEE Technical English", "Introduction to IoT (Elite)"
          ].map(cert => (
            <div key={cert} className="p-4 bg-white/[0.02] border border-white/5 rounded-lg flex justify-between items-center group hover:bg-cyan-500/10">
              <span className="text-sm uppercase tracking-wider opacity-70 group-hover:opacity-100">{cert}</span>
              <span className="text-[10px] text-cyan-500">VERIFIED</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
