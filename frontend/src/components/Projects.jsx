import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaGitlab, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import {
  filterProjects,
  getProjectFilters,
  getProjectsByCategory,
  projectCategories,
} from '../data/projects';
import { personalInfo } from '../data/portfolio';

function getCodeUrl(project) {
  return project.github || project.gitlab;
}

function ProjectCard({ project, index }) {
  const codeUrl = getCodeUrl(project);
  const isGitlab = Boolean(project.gitlab && !project.github);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.4) }}
      className="glass group relative flex flex-col overflow-hidden rounded-2xl transition hover:border-cyan-500/30"
    >
      <div
        className={`relative flex h-36 items-center justify-center bg-gradient-to-br ${project.gradient}`}
      >
        <span className="text-5xl transition group-hover:scale-125">{project.icon}</span>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60 light:from-white" />

        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {project.type && (
            <span className="rounded-full bg-purple-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-purple-300">
              {project.type}
            </span>
          )}
          {project.featured && (
            <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-400">
              Featured
            </span>
          )}
          {project.language && (
            <span className="rounded-full bg-zinc-900/70 px-2 py-0.5 text-[10px] font-medium text-zinc-300 backdrop-blur">
              {project.language}
            </span>
          )}
        </div>

        <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-zinc-900/85 py-2 text-sm font-medium text-white backdrop-blur hover:bg-cyan-600"
            >
              {isGitlab ? <FaGitlab /> : <FaGithub />}
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-zinc-900/85 py-2 text-sm font-medium text-white backdrop-blur hover:bg-blue-600"
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold leading-snug text-white light:text-zinc-900">
          {project.name}
        </h3>
        {project.highlight && (
          <p className="mt-1 text-xs font-medium text-amber-400">{project.highlight}</p>
        )}
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-400 light:text-zinc-600">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-zinc-800/80 px-2 py-0.5 text-[11px] font-medium text-zinc-300 light:bg-zinc-100 light:text-zinc-700"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-md px-2 py-0.5 text-[11px] text-zinc-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-zinc-800 pt-3 light:border-zinc-200">
          {codeUrl ? (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-zinc-400 transition hover:text-cyan-400"
            >
              {isGitlab ? (
                <FaGitlab className="h-3.5 w-3.5" />
              ) : (
                <FaGithub className="h-3.5 w-3.5" />
              )}
              Repository
            </a>
          ) : (
            <span className="text-sm text-zinc-500">Private / Org repo</span>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-zinc-400 transition hover:text-blue-400"
            >
              <FaExternalLinkAlt className="h-3.5 w-3.5" />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function CategorySection({ group, startIndex }) {
  let idx = startIndex;
  return (
    <div className="mb-16 last:mb-0">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="flex items-center gap-2 font-display text-2xl font-bold text-white light:text-zinc-900">
            <span>{group.icon}</span>
            {group.label}
            <span className="text-sm font-normal text-zinc-500">({group.projects.length})</span>
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-zinc-400 light:text-zinc-600">
            {group.description}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {group.projects.map((project) => {
          const card = <ProjectCard key={project.id} project={project} index={idx} />;
          idx += 1;
          return card;
        })}
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const filters = useMemo(() => getProjectFilters(), []);
  const filtered = useMemo(() => filterProjects(filter), [filter]);
  const grouped = useMemo(() => getProjectsByCategory(filtered), [filtered]);
  const showGrouped = filter === 'all';

  const totalProjects = filters.find((f) => f.id === 'all')?.count ?? 0;

  return (
    <section id="projects" className="relative z-10">
      <div className="section-padding">
        <SectionHeading
          tag="Projects"
          title="GitHub Portfolio"
          subtitle={`${totalProjects} projects across full stack, AI/ML, frontend, and web development`}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex w-full flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="filter-scroll sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition ${
                  filter === f.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'glass text-zinc-400 hover:text-cyan-400 light:text-zinc-600'
                }`}
              >
                {f.label}
                <span
                  className={`ml-1.5 text-xs ${filter === f.id ? 'text-white/80' : 'text-zinc-500'}`}
                >
                  {f.count}
                </span>
              </button>
            ))}
          </div>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:text-cyan-400 sm:w-auto"
          >
            <FaGithub />
            View all on GitHub
          </a>
        </motion.div>

        {/* Category legend when filtered */}
        {filter !== 'all' && filter !== 'featured' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 text-center text-sm text-zinc-500"
          >
            {projectCategories.find((c) => c.id === filter)?.icon}{' '}
            {projectCategories.find((c) => c.id === filter)?.description}
          </motion.p>
        )}

        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 text-center text-zinc-500"
            >
              No projects in this category.
            </motion.p>
          ) : showGrouped ? (
            <motion.div
              key="grouped"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {grouped.map((group, gi) => (
                <CategorySection
                  key={group.id}
                  group={group}
                  startIndex={grouped
                    .slice(0, gi)
                    .reduce((sum, g) => sum + g.projects.length, 0)}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={filter}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {filter === 'featured' && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center text-sm text-zinc-500"
          >
            <FaStar className="mr-1 inline text-amber-400" />
            Featured projects include Smart Diet SL (live demo), analytics systems, and ML work.
          </motion.p>
        )}
      </div>
    </section>
  );
}
