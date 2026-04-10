import { motion } from "framer-motion";

export const Badge = ({
  icon: Icon,
  label,
  variant = 'dark',
  className = '',
  ...props
}) => {
  const variants = {
    dark: 'bg-black/40 border-white/10 text-white',
    light: 'bg-white/10 border-white/20 text-white',
    accent: 'bg-[var(--accent)]/10 border-[var(--accent)]/30 text-white',
    gold: 'bg-[var(--gold)]/10 border-[var(--gold)]/30 text-[var(--gold)]'
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`
        inline-flex items-center gap-2
        px-4 py-2 rounded-full
        text-[10px] font-bold uppercase tracking-widest
        border backdrop-blur-md
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {Icon && <Icon size={14} className={variant === 'gold' ? 'text-[var(--gold)]' : 'text-[var(--accent)]'} />}
      {label}
    </motion.span>
  );
};

export default Badge;
