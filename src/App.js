import React, { useEffect, useState } from 'react';

import {
  Terminal,
  User,
  Rocket,
  Cpu,
  Shield,
  Award,
  Mail,
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
  // SCROLL + POPUP REVEAL
  // ==========================================================

  useEffect(() => {

    const handleScroll = () => {
      setShowTop(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);

    const revealElements = document.querySelectorAll(
      '.reveal-on-scroll'
    );

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add('is-visible');

          }

        });

      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {

      window.removeEventListener(
        'scroll',
        handleScroll
      );

      observer.disconnect();

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

    <div className="portfolio-root min-h-screen text-cyan-50 font-mono overflow-x-hidden">


      {/* ======================================================
          COLORFUL AMBIENT BACKGROUND
      ====================================================== */}

      <div className="ambient-background">

        <div className="ambient-orb orb-cyan"></div>

        <div className="ambient-orb orb-purple"></div>

        <div className="ambient-orb orb-pink"></div>

        <div className="ambient-orb orb-blue"></div>

        <div className="ambient-grid"></div>

        <div className="ambient-vignette"></div>

      </div>



      {/* ======================================================
          FIXED NAVIGATION
      ====================================================== */}

      <header className="fixed top-0 left-0 right-0 z-[100]">

        <div className="mx-3 md:mx-6 mt-3">

          <div className="max-w-7xl mx-auto">

            <div className="navbar-glass">


              {/* ==================================================
                  NAVBAR
              ================================================== */}

              <div className="h-16 px-4 md:px-6 flex items-center justify-between">


                {/* LOGO */}

                <button
                  onClick={() => scrollToSection('home')}
                  className="flex items-center gap-3 group"
                >

                  <div className="logo-box">

                    <Terminal
                      size={17}
                      className="text-cyan-300"
                    />

                  </div>


                  <div className="text-left">

                    <div className="text-sm font-black tracking-tight text-white">

                      DHARUNIKA
                      <span className="text-cyan-400">.B</span>

                    </div>

                    <div className="text-[7px] text-cyan-300/70 tracking-[0.25em] uppercase">

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
                    className="connect-button"
                  >

                    CONNECT

                  </button>

                </nav>



                {/* MOBILE MENU */}

                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="mobile-menu-button"
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

                <div className="md:hidden mobile-nav-panel">

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
          MAIN PORTFOLIO
      ====================================================== */}

      <main className="relative z-10">


        {/* ====================================================
            HOME
        ==================================================== */}

        <section
          id="home"
          className="portfolio-section scroll-mt-24"
        >

          <div className="section-panel hero-panel reveal-on-scroll">

            <div className="panel-glow glow-cyan"></div>
            <div className="panel-glow glow-purple"></div>

            <Home />

          </div>

        </section>



        {/* ====================================================
            TECH INTEL
        ==================================================== */}

        <section
          id="intel"
          className="portfolio-section scroll-mt-24"
        >

          <div className="section-panel reveal-on-scroll">

            <div className="panel-glow glow-blue"></div>
            <div className="panel-glow glow-cyan"></div>

            <SectionHeader
              number="01"
              label="TECH_INTEL"
            />

            <Intel />

          </div>

        </section>



        {/* ====================================================
            MISSIONS
        ==================================================== */}

        <section
          id="missions"
          className="portfolio-section scroll-mt-24"
        >

          <div className="section-panel reveal-on-scroll">

            <div className="panel-glow glow-purple"></div>
            <div className="panel-glow glow-pink"></div>

            <SectionHeader
              number="02"
              label="MISSION_LOGS"
            />

            <Missions />

          </div>

        </section>



        {/* ====================================================
            RECORDS
        ==================================================== */}

        <section
          id="records"
          className="portfolio-section scroll-mt-24"
        >

          <div className="section-panel reveal-on-scroll">

            <div className="panel-glow glow-cyan"></div>
            <div className="panel-glow glow-blue"></div>

            <SectionHeader
              number="03"
              label="ARCHIVES"
            />

            <Records />

          </div>

        </section>



        {/* ====================================================
            ACHIEVEMENTS
        ==================================================== */}

        <section
          id="achievements"
          className="portfolio-section scroll-mt-24"
        >

          <div className="section-panel reveal-on-scroll">

            <div className="panel-glow glow-pink"></div>
            <div className="panel-glow glow-purple"></div>

            <SectionHeader
              number="04"
              label="COMBAT_RECORDS"
            />

            <Achievements />

          </div>

        </section>



        {/* ====================================================
            CONTACT
        ==================================================== */}

        <section
          id="contact"
          className="portfolio-section scroll-mt-24"
        >

          <div className="section-panel contact-panel reveal-on-scroll">

            <div className="panel-glow glow-cyan"></div>
            <div className="panel-glow glow-purple"></div>

            <ContactSection />

          </div>

        </section>



        {/* ====================================================
            FOOTER
        ==================================================== */}

        <footer className="portfolio-footer">

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

            <div className="text-[9px] text-white/40 uppercase tracking-[0.3em]">

              DHARUNIKA.B // PORTFOLIO

            </div>

            <div className="text-[8px] text-cyan-300/50 uppercase tracking-widest">

              REACT // INFORMATION TECHNOLOGY // DATA // SOFTWARE

            </div>

            <div className="text-[8px] text-white/30 uppercase tracking-widest">

              SYSTEM_END

            </div>

          </div>

        </footer>

      </main>



      {/* ======================================================
          FLOATING SOCIAL BUTTONS
      ====================================================== */}

      <div className="hidden md:flex fixed left-5 bottom-8 z-[90] flex-col gap-3">

        <SocialButton
          href="https://github.com/Dharunika192006"
          label="GH"
          title="GITHUB"
        />

        <SocialButton
          href="https://www.linkedin.com/in/dharunika-balamoorthy-43a027365/"
          label="in"
          title="LINKEDIN"
        />

        <SocialButton
          href="mailto:dharunikabalamoorthy@gmail.com"
          label="✉"
          title="EMAIL"
        />

      </div>



      {/* ======================================================
          BACK TO TOP
      ====================================================== */}

      {showTop && (

        <button
          onClick={() => scrollToSection('home')}
          className="back-top-button"
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
      className="nav-button"
    >

      {icon}

      {label}

    </button>

  );

}



// ============================================================
// MOBILE NAV
// ============================================================

function MobileNav({ label, onClick }) {

  return (

    <button
      onClick={onClick}
      className="mobile-nav-button"
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

    <div className="section-header">

      <span className="section-number">
        {number}
      </span>

      <span className="section-status"></span>

      <span className="section-label">
        {label}
      </span>

      <div className="section-line"></div>

    </div>

  );

}



// ============================================================
// SOCIAL BUTTON
// ============================================================

function SocialButton({ href, label, title }) {

  return (

    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className="floating-social"
    >

      <span>
        {label}
      </span>

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

          <div className="text-cyan-300 text-[9px] tracking-[0.4em] uppercase mb-4">

            FINAL_TRANSMISSION

          </div>

          <h2 className="text-4xl md:text-6xl font-black uppercase text-white">

            Let's

            <span className="gradient-text">
              {' '}Connect
            </span>

          </h2>

          <p className="text-sm text-white/50 max-w-xl mx-auto mt-5 leading-relaxed">

            Open to opportunities, collaborations and conversations
            around AI, Data Science, Software Development and
            innovative technology.

          </p>

        </div>



        <div className="grid md:grid-cols-3 gap-5">


          {/* GITHUB */}

          <a
            href="https://github.com/Dharunika192006"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card contact-card-cyan"
          >

            <div className="contact-icon">
              GH
            </div>

            <div className="text-white font-bold text-sm">
              GITHUB
            </div>

            <div className="text-[9px] text-white/40 mt-2">
              VIEW_SOURCE_CODE
            </div>

            <ChevronRight
              size={14}
              className="mt-5 text-white/30 group-hover:text-cyan-300"
            />

          </a>



          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/dharunika-balamoorthy-43a027365/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card contact-card-blue"
          >

            <div className="contact-icon">
              in
            </div>

            <div className="text-white font-bold text-sm">
              LINKEDIN
            </div>

            <div className="text-[9px] text-white/40 mt-2">
              PROFESSIONAL_NETWORK
            </div>

            <ChevronRight
              size={14}
              className="mt-5 text-white/30"
            />

          </a>



          {/* EMAIL */}

          <a
            href="mailto:dharunikabalamoorthy@gmail.com"
            className="contact-card contact-card-pink"
          >

            <Mail
              className="text-pink-300 mb-6"
              size={24}
            />

            <div className="text-white font-bold text-sm">
              EMAIL
            </div>

            <div className="text-[9px] text-white/40 mt-2">
              START_A_CONVERSATION
            </div>

            <ChevronRight
              size={14}
              className="mt-5 text-white/30"
            />

          </a>

        </div>



        <div className="mt-12 text-center">

          <a
            href="https://timely-fox-fcdcc8.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="live-project-button"
          >

            VIEW_LIVE_NIDS_PROJECT

            <ExternalLink size={14} />

          </a>

        </div>

      </div>

    </div>

  );

}