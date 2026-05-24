import { motion } from 'framer-motion';
import { HiBadgeCheck } from 'react-icons/hi';
import { SiGoogle } from 'react-icons/si';
import SectionHeading from './SectionHeading';
import { certifications } from '../data/portfolio';

const issuerIcons = {
  Google: SiGoogle,
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative z-10">
      <div className="section-padding">
        <SectionHeading
          tag="Credentials"
          title="Certifications"
          subtitle="Professional certificates from Google, Coursera, Alison, and Simplilearn"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certifications.map((cert, i) => {
            const IssuerIcon = issuerIcons[cert.issuer];
            return (
              <motion.article
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.05, 0.4) }}
                className="glass group flex h-full flex-col rounded-2xl p-4 transition hover:border-cyan-500/30 sm:p-5"
              >
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-cyan-400">
                    {IssuerIcon ? (
                      <IssuerIcon className="h-5 w-5" />
                    ) : (
                      <HiBadgeCheck className="h-5 w-5" />
                    )}
                  </div>
                  <span className="shrink-0 rounded-full bg-zinc-800/80 px-2 py-0.5 text-[10px] font-medium text-zinc-400 light:bg-zinc-200 light:text-zinc-600">
                    {cert.date}
                  </span>
                </div>
                <h3 className="flex-1 text-sm font-semibold leading-snug text-white light:text-zinc-900">
                  {cert.name}
                </h3>
                <p className="mt-2 text-xs font-medium text-cyan-400">{cert.issuer}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
