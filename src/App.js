import React, { useEffect, useState } from 'react';

import {
  Terminal,
  User,
  Rocket,
  Cpu,
  Shield,
  Award,
  Mail,
  Github,
  Linkedin,
  ArrowUp,
  Menu,
  X,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

import Home from './pages/Home';
import Intel from './pages/Intel';
import Missions from './pages/Missions';
import Records from './pages/Records';
import Achievements from './pages/Achievements';


// ============================================================
// MAIN APP
// ============================================================

export default function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);


  // ==========================================================
  // SCROLL DETECTION
  // ==========================================================

  useEffect(() => {

    const handleScroll = () => {

      setShowTop(window.scrollY > 600);

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);


  // ==========================================================
  // SMOOTH SCROLL
  // ==========================================================

  const scrollToSection = (id) => {

    const element = document.getElementById(id);

    if (element) {

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    }

    setMenuOpen(false);

  };


  return (

    <div className="min-h-screen bg-[#020617] text-cyan-50 font-mono overflow-x-hidden">


      {/* ======================================================
          FIXED CYBER BACKGROUND
      ====================================================== */}

      <div className="fixed inset-0 pointer-events-none z-0">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(8,47,73,0.35),transparent_45%)]"></div>

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>

        <div className="absolute left-1/2 top-0 w-px h-full bg-cyan-500/[0.04]"></div>

      </div>



      {/* ======================================================
          NAVIGATION
      ====================================================== */}

      <header className="fixed top-0 left-0 right-0 z-[100]">

        <div className="mx-3 md:mx-6 mt-3">

          <div className="max-w-7xl mx-auto">

            <div className="bg-[#020817]/85 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-[0_0_35px_rgba(6,182,212,0.06)]">


              {/* ==================================================
                  NAVBAR
              ================================================== */}

              <div className="h-16 px-4 md:px-6 flex items-center justify-between">


                {/* LOGO */}

                <button
                  onClick={() => scrollToSection('home')}
                  className="flex items-center gap-3 group"
                >

                  <div className="w-9 h-9 border border-cyan-500/40 rounded-lg flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-500/10 transition-all">

                    <Terminal
                      size={17}
                      className="text-cyan-400"
                    />

                  </div>


                  <div className="text-left">

                    <div className="text-sm font-black tracking-tight text-white">

                      DHARUNIKA
                      <span className="text-cyan-400">.B</span>

                    </div>

                    <div className="text-[7px] text-cyan-500/60 tracking-[0.25em] uppercase">

                      SYSTEM_ONLINE

                    </div>

                  </div>

                </button>



                {/* DESKTOP NAV */}

                <nav className="hidden md:flex items-center gap-1">

                  <NavButton
                    icon={<User size={14} />}
                    label="HOME"
                    onClick={() => scrollToSection('home')}
                  />

                  <NavButton
                    icon={<Cpu size={14} />}
                    label="INTEL"
                    onClick={() => scrollToSection('intel')}
                  />

                  <NavButton
                    icon={<Rocket size={14} />}
                    label="MISSIONS"
                    onClick={() => scrollToSection('missions')}
                  />

                  <NavButton
                    icon={<Shield size={14} />}
                    label="ARCHIVES"
                    onClick={() => scrollToSection('records')}
                  />

                  <NavButton
                    icon={<Award size={14} />}
                    label="ACHIEVEMENTS"
                    onClick={() => scrollToSection('achievements')}
                  />

                  <button
                    onClick={() => scrollToSection('contact')}
                    className="ml-2 px-4 py-2 bg-cyan-500 text-black rounded-lg text-[9px] font-black tracking-widest hover:bg-white transition-all"
                  >

                    CONNECT

                  </button>

                </nav>



                {/* MOBILE MENU BUTTON */}

                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="md:hidden w-9 h-9 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400"
                >

                  {menuOpen
                    ? <X size={18} />
                    : <Menu size={18} />
                  }

                </button>

              </div>



              {/* ==================================================
                  MOBILE NAVIGATION
              ================================================== */}

              {menuOpen && (

                <div className="md:hidden border-t border-cyan-500/10 p-3 space-y-1">

                  <MobileNav
                    label="HOME"
                    onClick={() => scrollToSection('home')}
                  />

                  <MobileNav
                    label="TECH INTEL"
                    onClick={() => scrollToSection('intel')}
                  />

                  <MobileNav
                    label="MISSION LOGS"
                    onClick={() => scrollToSection('missions')}
                  />

                  <MobileNav
                    label="ARCHIVES"
                    onClick={() => scrollToSection('records')}
                  />

                  <MobileNav
                    label="ACHIEVEMENTS"
                    onClick={() => scrollToSection('achievements')}
                  />

                  <MobileNav
                    label="CONTACT"
                    onClick={() => scrollToSection('contact')}
                  />

                </div>

              )}

            </div>

          </div>

        </div>

      </header>



      {/* ======================================================
          MAIN SINGLE-SCROLL PORTFOLIO
      ====================================================== */}

      <main className="relative z-10">


        {/* ====================================================
            HOME
        ==================================================== */}

        <section
          id="home"
          className="scroll-mt-24"
        >

          <Home />

        </section>



        {/* ====================================================
            TECH INTEL
        ==================================================== */}

        <section
          id="intel"
          className="scroll-mt-24 border-t border-cyan-500/10"
        >

          <SectionHeader
            number="01"
            label="TECH_INTEL"
          />

          <Intel />

        </section>



        {/* ====================================================
            MISSIONS
        ==================================================== */}

        <section
          id="missions"
          className="scroll-mt-24 border-t border-cyan-500/10"
        >

          <SectionHeader
            number="02"
            label="MISSION_LOGS"
          />

          <Missions />

        </section>



        {/* ====================================================
            RECORDS
        ==================================================== */}

        <section
          id="records"
          className="scroll-mt-24 border-t border-cyan-500/10"
        >

          <SectionHeader
            number="03"
            label="ARCHIVES"
          />

          <Records />

        </section>



        {/* ====================================================
            ACHIEVEMENTS
        ==================================================== */}

        <section
          id="achievements"
          className="scroll-mt-24 border-t border-cyan-500/10"
        >

          <SectionHeader
            number="04"
            label="COMBAT_RECORDS"
          />

          <Achievements />

        </section>



        {/* ====================================================
            CONTACT
        ==================================================== */}

        <section
          id="contact"
          className="scroll-mt-24 border-t border-cyan-500/10"
        >

          <ContactSection />

        </section>



        {/* ====================================================
            FOOTER
        ==================================================== */}

        <footer className="border-t border-cyan-500/10 py-10 px-6">

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

            <div className="text-[9px] text-white/30 uppercase tracking-[0.3em]">

              DHARUNIKA.B // PORTFOLIO

            </div>

            <div className="text-[8px] text-cyan-500/30 uppercase tracking-widest">

              REACT // AI // DATA // SOFTWARE

            </div>

            <div className="text-[8px] text-white/20 uppercase tracking-widest">

              SYSTEM_END

            </div>

          </div>

        </footer>

      </main>



      {/* ======================================================
          FLOATING SOCIAL MEDIA
      ====================================================== */}

      <div className="hidden md:flex fixed left-5 bottom-8 z-[90] flex-col gap-3">


        <SocialButton
          href="https://github.com/Dharunika192006"
          icon={<Github size={15} />}
          label="GITHUB"
        />


        <SocialButton
          href="https://www.linkedin.com/in/dharunika-balamoorthy-43a027365/"
          icon={<Linkedin size={15} />}
          label="LINKEDIN"
        />


        <SocialButton
          href="mailto:dharunikabalamoorthy@gmail.com"
          icon={<Mail size={15} />}
          label="EMAIL"
        />

      </div>



      {/* ======================================================
          BACK TO TOP
      ====================================================== */}

      {showTop && (

        <button
          onClick={() => scrollToSection('home')}
          className="fixed right-5 bottom-8 z-[90] w-11 h-11 bg-cyan-500 text-black rounded-xl flex items-center justify-center hover:bg-white transition-all shadow-[0_0_25px_rgba(6,182,212,0.25)]"
          aria-label="Back to top"
        >

          <ArrowUp size={18} />

        </button>

      )}

    </div>

  );

}



// ============================================================
// DESKTOP NAV BUTTON
// ============================================================

function NavButton({ icon, label, onClick }) {

  return (

    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-[9px] font-bold tracking-widest text-white/50 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
    >

      {icon}

      {label}

    </button>

  );

}



// ============================================================
// MOBILE NAV BUTTON
// ============================================================

function MobileNav({ label, onClick }) {

  return (

    <button
      onClick={onClick}
      className="w-full text-left px-4 py-3 rounded-lg text-[10px] font-bold tracking-widest text-white/60 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
    >

      {label}

    </button>

  );

}



// ============================================================
// SECTION HEADER
// ============================================================

function SectionHeader({ number, label }) {

  return (

    <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12 md:pt-16">

      <div className="flex items-center gap-3">

        <span className="text-[8px] text-cyan-500/40 font-mono">
          {number}
        </span>

        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>

        <span className="text-[8px] md:text-[9px] font-bold tracking-[0.4em] text-cyan-500/60 uppercase">

          {label}

        </span>

        <div className="h-px flex-1 bg-cyan-500/10"></div>

      </div>

    </div>

  );

}



// ============================================================
// SOCIAL BUTTON
// ============================================================

function SocialButton({ href, icon, label }) {

  return (

    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      className="group w-10 h-10 rounded-xl border border-cyan-500/20 bg-black/70 backdrop-blur-md flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-black hover:border-cyan-400 transition-all"
    >

      {icon}

    </a>

  );

}



// ============================================================
// CONTACT SECTION
// ============================================================

function ContactSection() {

  return (

    <div className="min-h-[75vh] flex items-center px-6 md:px-10 py-24">

      <div className="max-w-5xl mx-auto w-full">


        <div className="text-center mb-14">

          <div className="text-cyan-500 text-[9px] tracking-[0.4em] uppercase mb-4">

            FINAL_TRANSMISSION

          </div>

          <h2 className="text-4xl md:text-6xl font-black uppercase text-white">

            Let's

            <span className="text-cyan-400">
              {' '}Connect
            </span>

          </h2>

          <p className="text-sm text-white/40 max-w-xl mx-auto mt-5 leading-relaxed">

            Open to opportunities, collaborations and conversations
            around AI, Data Science, Software Development and
            innovative technology.

          </p>

        </div>



        <div className="grid md:grid-cols-3 gap-5">


          <a
            href="https://github.com/Dharunika192006"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-7 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all"
          >

            <Github
              className="text-cyan-400 mb-6"
              size={24}
            />

            <div className="text-white font-bold text-sm">
              GITHUB
            </div>

            <div className="text-[9px] text-white/30 mt-2">
              VIEW_SOURCE_CODE
            </div>

            <ChevronRight
              size={14}
              className="mt-5 text-white/20 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"
            />

          </a>



          <a
            href="https://www.linkedin.com/in/dharunika-balamoorthy-43a027365/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-7 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all"
          >

            <Linkedin
              className="text-cyan-400 mb-6"
              size={24}
            />

            <div className="text-white font-bold text-sm">
              LINKEDIN
            </div>

            <div className="text-[9px] text-white/30 mt-2">
              PROFESSIONAL_NETWORK
            </div>

            <ChevronRight
              size={14}
              className="mt-5 text-white/20 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"
            />

          </a>



          <a
            href="mailto:dharunikabalamoorthy@gmail.com"
            className="group p-7 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all"
          >

            <Mail
              className="text-cyan-400 mb-6"
              size={24}
            />

            <div className="text-white font-bold text-sm">
              EMAIL
            </div>

            <div className="text-[9px] text-white/30 mt-2">
              START_A_CONVERSATION
            </div>

            <ChevronRight
              size={14}
              className="mt-5 text-white/20 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"
            />

          </a>

        </div>



        <div className="mt-10 text-center">

          <a
            href="https://timely-fox-fcdcc8.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-500 text-black rounded-xl text-[10px] font-black tracking-widest hover:bg-white transition-all"
          >

            VIEW_LIVE_NIDS_PROJECT

            <ExternalLink size={14} />

          </a>

        </div>

      </div>

    </div>

  );

}
