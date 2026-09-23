import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-[#08090d] text-slate-100 font-sans relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="ambient-glow w-[500px] h-[500px] bg-indigo-600/10 top-[-100px] left-[-100px]" />
        <div className="ambient-glow w-[600px] h-[600px] bg-purple-600/10 top-[20%] right-[-200px]" />
        <div className="ambient-glow w-[500px] h-[500px] bg-cyan-600/10 top-[60%] left-[-150px]" />

        <Navbar />
        <main className="relative z-10 space-y-16 sm:space-y-24">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}
