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
    transition-all duration-500
    overflow-hidden
  `;

  const interactiveStyles = interactive || hoverable ? `
    hover:bg-white/[0.05]
    hover:border-[var(--accent)]/50
    hover:shadow-lg
  ` : '';

  const shadowStyles = elevated ? 'shadow-xl' : 'shadow-sm';

  return (
    <motion.div
      whileHover={hoverable ? { y: -4 } : {}}
      transition={{ duration: 0.3 }}
      className={`${baseStyles} ${interactiveStyles} ${shadowStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
