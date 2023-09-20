export default function LinkFromPage({ children }) {
  return (
    <a
      href={children}
      target="_blank"
      className="text-zinc-950 cursor-pointer  "
    >
      {children}
    </a>
  );
}
