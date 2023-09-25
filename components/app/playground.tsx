const ComponentPlayground: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={`relative flex min-h-[200px] items-center justify-center overflow-hidden rounded-md border border-neutral-400 p-8 ${className}`}
    >
      <div className="z-10">{children}</div>
    </div>
  );
};

export default ComponentPlayground;
