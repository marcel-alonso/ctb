import { motion } from "framer-motion";

export const Divider = ({
  variant = 'light',
  animated = true,
  className = ''
}) => {
  const variants = {
    light: 'bg-white/10',
    accent: 'bg-[var(--accent)]/30',
    gold: 'bg-[var(--gold)]/20'
  };

  return (
    <motion.div
      initial={animated ? { scaleX: 0 } : {}}
      whileInView={animated ? { scaleX: 1 } : {}}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`h-px ${variants[variant]} origin-left ${className}`}
    />
  );
};

export default Divider;
