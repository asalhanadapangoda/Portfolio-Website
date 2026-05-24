import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0f]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        className="relative h-16 w-16"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-blue-500" />
        <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-purple-500 border-l-cyan-400" />
      </motion.div>
      <motion.p
        className="mt-6 font-display text-lg font-semibold gradient-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Loading Portfolio...
      </motion.p>
    </motion.div>
  );
}
