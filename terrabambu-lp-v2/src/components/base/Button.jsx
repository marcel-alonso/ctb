import { motion } from "framer-motion";
import { useCallback } from "react";

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
    transition-all duration-200 ease-in-out
    cursor-pointer will-change-transform
    border-0 touch-manipulation
    flex items-center justify-center
    active:scale-[0.97] active:transition-transform
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-[var(--accent)] hover:bg-[var(--accent-dark)]
      text-[var(--bg)]
      shadow-[0_15px_30px_rgba(126,200,80,0.3)]
      hover:shadow-[0_20px_40px_rgba(126,200,80,0.4)]
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
    sm: 'px-4 py-2 text-[11px] gap-1',           /* ~32px — compact actions */
    md: 'px-5 py-2.5 text-xs gap-1.5',           /* ~36px — card CTAs */
    lg: 'px-7 py-3 text-xs gap-2',               /* ~40px — secondary prominence */
    xl: 'px-9 py-3.5 text-sm gap-2',             /* ~44px — hero / final CTA */
  };

  /* Haptic feedback on touch devices */
  const handleClick = useCallback((e) => {
    if (navigator.vibrate) navigator.vibrate(8);
    onClick?.(e);
  }, [onClick]);

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.97 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {Icon && <Icon size={size === 'xl' ? 20 : size === 'lg' ? 18 : 16} />}
      {children}
    </motion.button>
  );
};

export default Button;
