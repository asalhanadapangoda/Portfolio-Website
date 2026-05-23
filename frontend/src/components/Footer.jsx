import { FaGithub, FaGitlab, FaLinkedin, FaHeart } from 'react-icons/fa';
import { personalInfo, socialLinks, navLinks } from '../data/portfolio';

const iconMap = {
  github: FaGithub,
  gitlab: FaGitlab,
  linkedin: FaLinkedin,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-zinc-800/50 light:border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-bold gradient-text">{personalInfo.name}</p>
            <p className="mt-1 text-sm text-zinc-500">Software Engineering Undergraduate · GPA 3.74</p>
          </div>

          <nav className="flex max-w-full flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 transition hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            {socialLinks
              .filter((s) => iconMap[s.icon])
              .map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 transition hover:text-cyan-400 hover:scale-110"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-zinc-800/50 pt-8 text-sm text-zinc-500 md:flex-row light:border-zinc-200">
          <p>© {year} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 text-center">
            Built with <FaHeart className="text-red-400" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
