import type { ReactNode } from "react";

export function Surface({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/56 p-6 shadow-[0_18px_60px_rgba(5,24,30,0.08),inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur-2xl transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/90 hover:bg-white/72 hover:shadow-[0_28px_90px_rgba(5,24,30,0.13),inset_0_1px_0_rgba(255,255,255,0.92)] sm:p-7 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-white/45 blur-3xl" />
        <div className="absolute -bottom-28 left-10 h-52 w-52 rounded-full bg-accent/12 blur-3xl" />
      </div>

      <div className="relative">{children}</div>
    </section>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return <p className="kicker">{children}</p>;
}

export function CopyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4 text-sm leading-7 text-muted">
      {items.map((item) => (
        <li className="flex gap-3" key={item}>
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_0_5px_rgba(128,170,181,0.12)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function StatStrip({
  items,
}: {
  items: Array<{ value: string; label: string }>;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {items.map((item) => (
        <div
          className="rounded-[1.5rem] border border-white/60 bg-white/48 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.76)] backdrop-blur-2xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/64"
          key={item.label}
        >
          <p className="text-3xl font-semibold tracking-[-0.04em] text-ink">
            {item.value}
          </p>
          <p className="mt-2 text-sm leading-5 text-muted">{item.label}</p>
        </div>
      ))}
    </div>
  );
}