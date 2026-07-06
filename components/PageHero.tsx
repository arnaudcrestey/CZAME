import type { ReactNode } from "react";
import { PageBackground } from "./PageBackground";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <PageBackground variant="page" />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="kicker">{eyebrow}</p>

        <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-ink sm:text-6xl lg:text-7xl">
          {title}
        </h1>

        <div className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-7 text-primary-dark/76 sm:text-xl sm:leading-9">
          {children}
        </div>
      </div>
    </section>
  );
}