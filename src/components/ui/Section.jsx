export default function Section ({ children, className = "" }) {
  return (
    <section className={`shadow-md border bg-white p-10 ${className}`}>
      {children}
    </section>
  );
}