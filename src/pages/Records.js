import React from 'react';

export default function Records() {
  const certs = ["IIT Bombay Java", "Infosys Agile Scrum", "Infosys Software Testing", "NPTEL Data Analytics (Python)", "NPTEL IoT (Elite)", "IEEE Tech English"];
  const roles = ["Office Bearer (NSS Club)", "Member (Google Club)", "Member (Finearts Club)"];

  return (
    <div className="p-10 pt-24 max-w-5xl mx-auto">
      <h2 className="text-4xl font-black mb-12 border-b border-cyan-500/20 pb-4">ARCHIVES</h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* COMBAT RECORDS */}
        <section>
          <h3 className="text-cyan-500 text-xs font-bold uppercase mb-8">Physical_Achievements</h3>
          <div className="space-y-6">
             <div className="p-6 border border-white/10 rounded-2xl">
                <div className="text-2xl font-black">CM TROPHY WINNER</div>
                <div className="text-xs text-cyan-400 mt-1 uppercase">Handball // Rs.2000 Reward</div>
             </div>
             <div className="p-6 border border-white/10 rounded-2xl">
                <div className="text-2xl font-black">ZONAL RUNNER UP</div>
                <div className="text-xs text-cyan-400 mt-1 uppercase">Handball Tournament 2025</div>
             </div>
          </div>

          <h3 className="text-cyan-500 text-xs font-bold uppercase mt-12 mb-8">Base_Roles</h3>
          <ul className="space-y-4">
            {roles.map(r => <li key={r} className="text-sm opacity-60 flex gap-4 items-center">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>{r}
            </li>)}
          </ul>
        </section>

        {/* CERTIFICATION SCAN */}
        <section>
          <h3 className="text-cyan-500 text-xs font-bold uppercase mb-8">Technical_Clearances</h3>
          <div className="grid gap-3">
            {certs.map(c => <div key={c} className="p-3 bg-white/5 border border-white/5 rounded text-[10px] uppercase tracking-widest hover:border-cyan-500/50 transition-all">{c}</div>)}
          </div>
          
          <h3 className="text-cyan-500 text-xs font-bold uppercase mt-12 mb-6">Area_of_Interest</h3>
          <div className="flex flex-wrap gap-2">
            {["UI Design", "Web Dev", "AI Tools"].map(i => <span key={i} className="px-4 py-2 bg-cyan-500/10 text-cyan-400 text-[10px] border border-cyan-500/30 rounded-full">{i}</span>)}
          </div>
        </section>
      </div>
    </div>
  );
}
