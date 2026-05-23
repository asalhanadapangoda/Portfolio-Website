import { motion } from 'framer-motion';
import { HiHeart, HiStar } from 'react-icons/hi';
import SectionHeading from './SectionHeading';
import { volunteerActivities, achievements } from '../data/portfolio';

export default function Volunteer() {
  return (
    <section id="volunteer" className="relative z-10">
      <div className="section-padding">
        <SectionHeading
          tag="Leadership"
          title="Volunteer & Achievements"
          subtitle="IEEE, university associations, and recognitions"
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-bold text-white light:text-zinc-900">
              <HiHeart className="text-rose-400" />
              Volunteer Activities
            </h3>
            <div className="space-y-4">
              {volunteerActivities.map((item, i) => (
                <motion.div
                  key={item.organization}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass rounded-2xl p-5"
                >
                  <p className="font-semibold text-white light:text-zinc-900">
                    {item.organization}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {item.roles.map((role) => (
                      <li
                        key={`${role.title}-${role.period}`}
                        className="flex flex-col gap-0.5 text-sm sm:flex-row sm:items-center sm:justify-between"
                      >
                        <span className="text-zinc-300 light:text-zinc-700">{role.title}</span>
                        <span className="text-xs text-cyan-400">{role.period}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-bold text-white light:text-zinc-900">
              <HiStar className="text-amber-400" />
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass rounded-2xl border border-amber-500/10 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                    {item.award}
                  </p>
                  <p className="mt-1 font-display text-lg font-bold text-white light:text-zinc-900">
                    {item.title}
                  </p>
                  {item.project && (
                    <p className="mt-1 text-sm text-zinc-400">Project: {item.project}</p>
                  )}
                  {item.year && <p className="mt-1 text-xs text-zinc-500">{item.year}</p>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
