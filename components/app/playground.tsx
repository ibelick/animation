const ComponentPlayground: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={`min-h-[200px] overflow-hidden relative rounded-md border border-neutral-400 p-8 flex items-center justify-center ${className}`}
    >
      <div className="z-10">{children}</div>
    </div>
  );
};

export default ComponentPlayground;
