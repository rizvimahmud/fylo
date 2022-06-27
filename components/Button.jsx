export const Button = ({ children, width, ...props }) => {
  return (
    <button
      className="inline-flex justify-center items-center px-8 py-3 max-h-[64px] rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue text-sm  tracking-wide text-white font-semibold hover:opacity-80 transition-opacity duration-150 ease-in"
      style={{ width }}
      {...props}
    >
      {children}
    </button>
  );
};
