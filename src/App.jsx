import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Volunteer from './components/Volunteer';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div
        className={`min-h-screen bg-[#0a0a0f] text-zinc-100 transition-colors duration-300 light:bg-zinc-50 light:text-zinc-900 ${
          loading ? 'overflow-hidden' : ''
        }`}
      >
        <ParticleBackground />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Volunteer />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
