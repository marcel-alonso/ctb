export const Container = ({
  className = '',
  children,
  size = 'default',
  ...props
}) => {
  const sizes = {
    sm: 'max-w-2xl',
    default: 'max-w-6xl',
    lg: 'max-w-7xl',
    full: 'max-w-none'
  };

  return (
    <div
      className={`
        mx-auto relative z-10
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
