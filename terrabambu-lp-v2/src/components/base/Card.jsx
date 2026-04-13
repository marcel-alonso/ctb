import { motion } from "framer-motion";

export const Card = ({
  elevated = false,
  interactive = false,
  hoverable = true,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = `
    bg-white/[0.03] backdrop-blur-sm
    border border-white/10
    rounded-[2.5rem]
    transition-all duration-300
    overflow-hidden touch-manipulation
    flex flex-col h-full
  `;

  const interactiveStyles = interactive || hoverable ? `
    hover:bg-white/[0.05]
    hover:border-[var(--accent)]/50
    hover:shadow-lg
    active:scale-[0.98]
  ` : '';

  const shadowStyles = elevated ? 'shadow-xl' : 'shadow-sm';

  return (
    <motion.div
      whileHover={hoverable ? { y: -4 } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`${baseStyles} ${interactiveStyles} ${shadowStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
