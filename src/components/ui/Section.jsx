export default function Section ({ children, className = "" }) {
  return (
    <section className={`shadow-md border bg-white ${className}`}>
      {children}
    </section>
  );
}