import { motion } from 'framer-motion';
import { HiBriefcase, HiLocationMarker } from 'react-icons/hi';
import SectionHeading from './SectionHeading';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="relative z-10">
      <div className="section-padding">
        <SectionHeading
          tag="Career"
          title="Experience"
          subtitle="Technical leadership, project coordination, and backend development"
        />

        <div className="mx-auto max-w-3xl space-y-6">
          {experience.map((item, i) => (
            <motion.article
              key={`${item.title}-${item.organization}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="glass relative overflow-hidden rounded-2xl p-5 sm:p-6 md:p-8"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl" />

              <div className="relative flex flex-col gap-4 sm:flex-row sm:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg sm:h-14 sm:w-14">
                  <HiBriefcase className="h-6 w-6 text-white" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                          {item.period.includes('Present') ? 'Current' : 'Past'}
                        </span>
                        {item.employmentType && (
                          <span className="rounded-full bg-zinc-800/80 px-2 py-0.5 text-[10px] font-medium text-zinc-400 light:bg-zinc-200 light:text-zinc-600">
                            {item.employmentType}
                          </span>
                        )}
                        {item.workMode && (
                          <span className="rounded-full bg-purple-500/10 px-2 py-0.5 text-[10px] font-medium text-purple-300">
                            {item.workMode}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-1 font-display text-lg font-bold text-white sm:text-xl light:text-zinc-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 font-medium text-zinc-300 light:text-zinc-700">
                        {item.organization}
                      </p>
                      {item.location && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-zinc-500">
                          <HiLocationMarker className="h-3.5 w-3.5 shrink-0 text-cyan-500/80" />
                          {item.location}
                        </p>
                      )}
                    </div>
                    <span className="inline-flex w-fit shrink-0 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base light:text-zinc-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
