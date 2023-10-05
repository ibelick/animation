const ComponentPlayground: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={`relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-md border border-neutral-300 p-8 ${className}`}
    >
      <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'></div>
      <div className='z-10'>{children}</div>
    </div>
  );
};

export default ComponentPlayground;
