export const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-primary-blue-1">
      <main className="relative">{children}</main>
    </div>
  );
};
