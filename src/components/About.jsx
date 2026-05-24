import { motion } from 'framer-motion';
import { HiAcademicCap, HiLightningBolt, HiOfficeBuilding } from 'react-icons/hi';
import SectionHeading from './SectionHeading';
import ProfileImage from './ProfileImage';
import { aboutContent, personalInfo } from '../data/portfolio';

export default function About() {
  const cards = [
    {
      icon: HiAcademicCap,
      title: 'University',
      content: (
        <>
          <p className="font-semibold text-white light:text-zinc-900">
            {aboutContent.education.degree}
          </p>
          <p className="mt-1 text-sm text-cyan-400">{aboutContent.education.institution}</p>
          <p className="mt-1 text-xs font-medium text-emerald-400">
            GPA: {aboutContent.education.gpa}
          </p>
          <p className="mt-3 text-sm text-zinc-400 light:text-zinc-600">
            {aboutContent.education.details}
          </p>
        </>
      ),
    },
    {
      icon: HiLightningBolt,
      title: 'Soft Skills',
      content: (
        <ul className="space-y-2">
          {aboutContent.softSkills.map((s) => (
            <li
              key={s}
              className="flex items-start gap-2 text-sm text-zinc-400 light:text-zinc-600"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
              {s}
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <section id="about" className="relative z-10">
      <div className="section-padding">
        <SectionHeading tag="About Me" title="Who I Am" subtitle={personalInfo.summary} />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass relative overflow-hidden rounded-2xl p-5 sm:rounded-3xl sm:p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="relative flex flex-col items-center sm:flex-row sm:items-start sm:gap-6">
                <ProfileImage size="md" className="shrink-0" />
                <div className="mt-6 text-center sm:mt-0 sm:text-left">
                  <h3 className="font-display text-2xl font-bold text-white light:text-zinc-900">
                    {personalInfo.name}
                  </h3>
                  <p className="mt-1 text-sm text-cyan-400">{personalInfo.headline}</p>
                  <p className="mt-4 text-base leading-relaxed text-zinc-300 light:text-zinc-700">
                    {aboutContent.intro}
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-2 sm:justify-start">
                    {personalInfo.interests.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-zinc-500">
                    Languages: {personalInfo.languages.join(' · ')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass group rounded-2xl p-6 transition hover:border-cyan-500/30"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-400">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white light:text-zinc-900">
                    {card.title}
                  </h3>
                </div>
                {card.content}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
