import { motion } from "framer-motion";

export const Section = ({
  id,
  variant = 'dark',
  className = '',
  children,
  ...props
}) => {
  const variants = {
    dark: 'bg-[var(--bg)]',
    light: 'bg-[var(--bg-light)] text-[var(--text-dark)]',
    gradient: 'bg-gradient-to-br from-[var(--bg)] via-[var(--bg-2)] to-[var(--bg)]'
  };

  return (
    <motion.section
      id={id}
      className={`
        w-full py-24 md:py-32 px-6 relative overflow-hidden
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default Section;
