import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Terminal, User, Rocket, Shield, Database, Cpu, MessageSquare } from 'lucide-react';
import Home from './pages/Home';
import Intel from './pages/Intel';
import Missions from './pages/Missions';
import Records from './pages/Records';

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#020617] text-cyan-50 font-mono">
        {/* SIDEBAR HUD */}
        <aside className="w-20 md:w-64 border-r border-cyan-500/20 bg-black/40 backdrop-blur-xl flex flex-col z-50 fixed h-full">
          <div className="p-6 border-b border-cyan-500/20 text-center">
            <h1 className="hidden md:block text-xl font-black tracking-tighter">DHARUNIKA<span className="text-cyan-500">.B</span></h1>
            <Terminal className="md:hidden mx-auto text-cyan-500" />
          </div>
          <nav className="flex-1 p-4 space-y-4">
            <NavItem to="/" icon={<User size={20}/>} label="The_Bridge" />
            <NavItem to="/intel" icon={<Cpu size={20}/>} label="Tech_Intel" />
            <NavItem to="/missions" icon={<Rocket size={20}/>} label="Mission_Logs" />
            <NavItem to="/records" icon={<Shield size={20}/>} label="Archives" />
          </nav>
          <div className="p-4 border-t border-cyan-500/10 opacity-30 text-[8px] text-center uppercase tracking-widest">
            System v4.0.2 // Madurai Sector
          </div>
        </aside>

        {/* MAIN DISPLAY WINDOW */}
        <main className="flex-1 ml-20 md:ml-64 relative overflow-hidden">
            {/* Background AI Grid */}
            <div className="absolute inset-0 bg-[url('https://transparenttextures.com')] opacity-10 pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 w-px h-full bg-cyan-500/5"></div>
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/intel" element={<Intel />} />
              <Route path="/missions" element={<Missions />} />
              <Route path="/records" element={<Records />} />
            </Routes>
        </main>
      </div>
    </Router>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <Link to={to} className="flex items-center gap-4 p-3 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-400 transition-all group">
      <span className="text-cyan-500 group-hover:animate-pulse">{icon}</span>
      <span className="hidden md:block text-xs font-bold uppercase tracking-widest">{label}</span>
    </Link>
  );
}
