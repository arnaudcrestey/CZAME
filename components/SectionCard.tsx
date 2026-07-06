import type { ReactNode } from "react";

export function SectionCard({
  title,
  eyebrow,
  children,
  tone = "default",
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  tone?: "default" | "danger";
}) {
  return (
    <section
      className={`glass-surface rounded-xl2 p-6 transition duration-500 hover:bg-white/34 sm:p-7 ${
        tone === "danger" ? "border-danger/20 bg-white/46" : ""
      }`}
    >
      {eyebrow ? <p className="kicker mb-3">{eyebrow}</p> : null}
      <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink">{title}</h2>
      <div className="mt-5 text-sm leading-7 text-muted">{children}</div>
    </section>
  );
}