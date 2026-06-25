// Shared max-width wrapper so every section lines up with the header and footer.
export default function Container({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl ${className}`}>{children}</div>
  );
}
