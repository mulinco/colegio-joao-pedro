import { ReactNode } from "react";

export function PaperSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`relative overflow-hidden bg-white py-24 clip-paper paper-shadow ${className}`}
    >
      {/* Camada das Linhas */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage: `linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #ff3b30 1.5px, transparent 1.5px)`,
          backgroundSize: "100% 2.8rem, 100% 100%",
          backgroundPosition: "0 3.5rem, 5rem 0",
          opacity: 0.12,
        }}
      />
      <div className="container relative z-10 mx-auto px-4">{children}</div>
    </section>
  );
}
