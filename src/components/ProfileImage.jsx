import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

export default function ProfileImage({ size = 'lg', className = '' }) {
  const sizes = {
    sm: 'h-20 w-20 sm:h-24 sm:w-24',
    md: 'h-28 w-28 sm:h-32 sm:w-32',
    lg: 'h-44 w-44 sm:h-56 sm:w-56 md:h-64 md:w-64',
    xl: 'h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={`relative ${className}`}
    >
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 blur-md opacity-60 ${sizes[size]}`}
        aria-hidden="true"
      />
      <div
        className={`relative overflow-hidden rounded-full border-2 border-cyan-500/40 p-1 ${sizes[size]}`}
      >
        <img
          src={personalInfo.profileImage}
          alt={personalInfo.name}
          className="h-full w-full rounded-full object-cover object-top"
          loading="eager"
        />
      </div>
    </motion.div>
  );
}
