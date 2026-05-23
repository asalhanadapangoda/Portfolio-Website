import { motion } from 'framer-motion';

export default function SectionHeading({ tag, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="mb-10 text-center sm:mb-14"
    >
      <span className="mb-3 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-cyan-400 sm:px-4 sm:text-xs">
        {tag}
      </span>
      <h2 className="font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl light:text-zinc-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl px-2 text-sm text-zinc-400 sm:mt-4 sm:text-base light:text-zinc-600">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
