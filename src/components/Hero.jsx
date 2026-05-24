import { motion } from 'framer-motion';
import { HiArrowDown, HiDownload, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import TypingEffect from './TypingEffect';
import ProfileImage from './ProfileImage';
import { personalInfo, typingRoles, highlights } from '../data/portfolio';

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] min-h-screen items-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-zinc-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to internships & opportunities
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-4 text-lg text-zinc-400 light:text-zinc-600"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl light:text-zinc-900"
            >
              {personalInfo.name.split(' ')[0]}{' '}
              <span className="gradient-text">
                {personalInfo.name.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-3 text-base text-cyan-400/90 sm:text-lg"
            >
              {personalInfo.headline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mt-3 text-base text-zinc-400 sm:text-lg light:text-zinc-600"
            >
              {personalInfo.title}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="mt-5 flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1 text-lg sm:text-xl lg:justify-start"
            >
              <span className="text-zinc-500 light:text-zinc-600">I&apos;m a </span>
              <TypingEffect words={typingRoles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg light:text-zinc-600 lg:mx-0 mx-auto"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-3 flex items-center justify-center gap-1.5 text-sm text-zinc-500 lg:justify-start"
            >
              <HiLocationMarker className="h-4 w-4 text-cyan-400" />
              {personalInfo.location}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95 }}
              className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start"
            >
              <button
                type="button"
                onClick={() => scrollTo('#projects')}
                className="btn-glow w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-cyan-500/40 sm:w-auto sm:hover:scale-105"
              >
                View Projects
              </button>
              <button
                type="button"
                onClick={() => scrollTo('#contact')}
                className="glass w-full rounded-xl px-7 py-3.5 font-semibold text-white transition hover:border-cyan-500/50 hover:text-cyan-400 sm:w-auto light:text-zinc-900"
              >
                Contact Me
              </button>
              <a
                href={personalInfo.cvUrl}
                download
                className="glass flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-medium text-zinc-300 transition hover:text-cyan-400 sm:w-auto light:text-zinc-700"
              >
                <HiDownload className="h-5 w-5" />
                CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05 }}
              className="mt-8 flex justify-center gap-4 lg:justify-start"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-11 w-11 items-center justify-center rounded-xl text-zinc-400 transition hover:scale-110 hover:text-cyan-400"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-11 w-11 items-center justify-center rounded-xl text-zinc-400 transition hover:scale-110 hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          <div className="order-1 flex flex-col items-center lg:order-2">
            <ProfileImage size="xl" className="mx-auto" />
          </div>
        </div>

        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          onClick={() => scrollTo('#about')}
          className="mx-auto mt-14 flex flex-col items-center gap-2 text-zinc-500 transition hover:text-cyan-400"
          aria-label="Scroll to about"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <HiArrowDown className="h-5 w-5 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
