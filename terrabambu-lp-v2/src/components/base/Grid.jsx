import { motion } from "framer-motion";

/* Tailwind purge-safe class maps — never interpolate grid-cols dynamically */
const colMap = {
  1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-3', 4: 'grid-cols-4',
};
const smMap = {
  1: 'sm:grid-cols-1', 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-3', 4: 'sm:grid-cols-4',
};
const mdMap = {
  1: 'md:grid-cols-1', 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4',
};
const lgMap = {
  1: 'lg:grid-cols-1', 2: 'lg:grid-cols-2', 3: 'lg:grid-cols-3', 4: 'lg:grid-cols-4',
};

export const Grid = ({
  cols = { default: 1, md: 2, lg: 3 },
  gap = 'gap-6',
  className = '',
  children,
  ...props
}) => {
  const gridColsClass = [
    'grid',
    colMap[cols.default],
    cols.sm && smMap[cols.sm],
    cols.md && mdMap[cols.md],
    cols.lg && lgMap[cols.lg],
    gap,
    className,
  ].filter(Boolean).join(' ');

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
