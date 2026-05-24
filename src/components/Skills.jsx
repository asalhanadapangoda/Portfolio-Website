import { motion } from 'framer-motion';
import {
  SiSpringboot,
  SiPython,
  SiReact,
  SiJavascript,
  SiMysql,
  SiDocker,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import SectionHeading from './SectionHeading';
import { skills, skillGroups } from '../data/portfolio';

const iconMap = {
  java: FaJava,
  spring: SiSpringboot,
  python: SiPython,
  react: SiReact,
  javascript: SiJavascript,
  mysql: SiMysql,
  docker: SiDocker,
  node: SiNodedotjs,
  mongodb: SiMongodb,
  postgres: SiPostgresql,
};

const colorMap = {
  java: 'text-orange-400',
  spring: 'text-emerald-400',
  python: 'text-yellow-400',
  react: 'text-cyan-400',
  javascript: 'text-yellow-300',
  mysql: 'text-blue-400',
  docker: 'text-sky-400',
  node: 'text-green-400',
  mongodb: 'text-emerald-400',
  postgres: 'text-blue-300',
};

export default function Skills() {
  return (
    <section id="skills" className="relative z-10">
      <div className="section-padding">
        <SectionHeading
          tag="Skills"
          title="Technical Expertise"
          subtitle="Full-stack development, AI/ML, databases, and professional tools from my CV"
        />

        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-5"
            >
              <h3 className="mb-3 flex items-center gap-2 font-display text-base font-semibold text-white light:text-zinc-900">
                <span>{group.icon}</span>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-zinc-800/60 px-2.5 py-1 text-xs font-medium text-zinc-300 light:bg-zinc-100 light:text-zinc-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="mb-6 text-center font-display text-xl font-bold text-white light:text-zinc-900">
          Core Proficiencies
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass group rounded-2xl p-5 transition hover:border-cyan-500/30"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800/50 text-2xl light:bg-zinc-100 ${colorMap[skill.icon]}`}
                  >
                    {Icon && <Icon />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display font-semibold text-white light:text-zinc-900">
                      {skill.name}
                    </h4>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-800 light:bg-zinc-200">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 + i * 0.08 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-cyan-400">{skill.level}%</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
