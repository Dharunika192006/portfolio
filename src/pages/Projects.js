import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const missions = [
    { id: "01", title: "Phishing Recon", role: "AI Security", desc: "Built an Explainable Federated Learning Framework for Real-Time Phishing Detection. Focused on protecting user data while identifying malicious email patterns using decentralized AI training.", tech: ["Python", "AI", "Federated Learning"] },
    { id: "02", title: "Interview Forge", role: "Java Developer", desc: "Automated AI-powered interview question generator. Uses DBMS and Java to create role-specific questions for technical interviews, improving preparation speed and accuracy.", tech: ["Java", "SQL", "AI Logic"] },
    { id: "03", title: "Inventory System", role: "Full Stack", desc: "Comprehensive Departmental Store Management System. Tracks stock levels, employee shifts, and customer sales in a real-time database environment.", tech: ["Java", "DBMS", "Software Architecture"] }
  ];

  return (
    <div className="pt-40 px-10 pb-20 max-w-7xl mx-auto">
      <h2 className="text-5xl font-black mb-16 border-l-8 border-blue-600 pl-8 tracking-tighter">TACTICAL_MISSIONS</h2>
      <div className="grid gap-12">
        {missions.map((m) => (
          <motion.div whileHover={{ scale: 1.01 }} key={m.id} className="p-10 bg-blue-900/10 border border-blue-500/30 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-8xl font-black opacity-5 text-white group-hover:opacity-10 transition-opacity">{m.id}</div>
            <div className="relative z-10">
              <div className="text-blue-500 font-bold mb-2 tracking-[0.2em] uppercase">{m.role}</div>
              <h3 className="text-4xl font-black mb-6 text-white uppercase">{m.title}</h3>
              <p className="text-xl text-blue-100/70 leading-relaxed mb-8 max-w-4xl">{m.desc}</p>
              <div className="flex gap-4">
                {m.tech.map(t => <span key={t} className="px-4 py-1 border border-white/20 rounded-full text-xs uppercase opacity-60">{t}</span>)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
