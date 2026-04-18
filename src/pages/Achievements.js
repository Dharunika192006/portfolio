import React from 'react';

export default function Achievements() {
  return (
    <div className="pt-40 px-10 max-w-7xl mx-auto">
      <h2 className="text-5xl font-black mb-16 border-l-8 border-blue-600 pl-8 tracking-tighter">COMBAT_RECORDS</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="p-10 bg-white/5 border border-white/10 rounded-3xl">
          <h3 className="text-2xl font-bold text-blue-500 mb-8 uppercase tracking-widest">Physical Excellence</h3>
          <div className="space-y-8">
            <div className="border-b border-white/5 pb-6">
              <div className="text-3xl font-black text-white">CM TROPHY WINNER</div>
              <div className="text-blue-300 text-sm mt-2 font-bold uppercase tracking-widest">Handball // Cash Prize: Rs.2000</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">ZONAL RUNNER UP</div>
              <div className="text-blue-300 text-sm mt-2 font-bold uppercase tracking-widest">Zonal Level Handball // Feb 11, 2025</div>
            </div>
          </div>
        </div>

        <div className="p-10 bg-white/5 border border-white/10 rounded-3xl">
          <h3 className="text-2xl font-bold text-blue-500 mb-8 uppercase tracking-widest">Training Clearances</h3>
          <ul className="space-y-4 text-lg">
            <li className="flex justify-between border-b border-white/5 pb-2"><span>IIT Bombay Java Training</span> <span className="text-blue-400">2025-26</span></li>
            <li className="flex justify-between border-b border-white/5 pb-2"><span>Infosys Agile Scrum</span> <span className="text-blue-400">2025-26</span></li>
            <li className="flex justify-between border-b border-white/5 pb-2"><span>NPTEL Python Data Science</span> <span className="text-blue-400">2024-25</span></li>
            <li className="flex justify-between border-b border-white/5 pb-2"><span>IEEE Technical English</span> <span className="text-blue-400">2023-24</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
