import { motion } from "framer-motion";

export const Button = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  children,
  disabled = false,
  onClick,
  className = '',
  ...props
}) => {
  const baseStyles = `
    font-bold tracking-wider uppercase
    transition-all duration-300 ease-in-out
    cursor-pointer
    border-0
    flex items-center justify-center gap-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-[var(--accent)] hover:bg-[var(--accent-dark)]
      text-[var(--bg)]
      shadow-[0_15px_30px_rgba(126,200,80,0.3)]
      hover:shadow-[0_20px_40px_rgba(126,200,80,0.4)]
      active:scale-95
      rounded-full
    `,
    secondary: `
      bg-white/10 hover:bg-white/20
      text-white border border-white/20 hover:border-white/40
      backdrop-blur-md
      shadow-sm hover:shadow-md
      rounded-2xl
    `,
    ghost: `
      bg-transparent hover:bg-white/5
      text-white border border-white/20 hover:border-[var(--accent)]
      rounded-2xl
    `,
    accent: `
      bg-[var(--accent)]/10 hover:bg-[var(--accent)]/20
      text-[var(--accent)] border border-[var(--accent)]/30
      rounded-xl
    `
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-10 py-5 text-base gap-3',
    xl: 'px-12 py-6 text-lg gap-3'
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {Icon && <Icon size={16} />}
      {children}
    </motion.button>
  );
};

export default Button;
