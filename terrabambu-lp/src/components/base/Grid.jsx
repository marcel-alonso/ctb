import { motion } from "framer-motion";

export const Grid = ({
  cols = { default: 1, md: 2, lg: 3 },
  gap = 'gap-6',
  className = '',
  children,
  ...props
}) => {
  const gridColsClass = `
    grid
    grid-cols-${cols.default}
    ${cols.sm ? `sm:grid-cols-${cols.sm}` : ''}
    ${cols.md ? `md:grid-cols-${cols.md}` : ''}
    ${cols.lg ? `lg:grid-cols-${cols.lg}` : ''}
    ${gap}
    ${className}
  `;

  return (
    <motion.div
      className={gridColsClass}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Grid;
