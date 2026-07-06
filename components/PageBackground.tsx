import Image from "next/image";

type PageBackgroundProps = {
  variant?: "global" | "home" | "page";
  className?: string;
};

const imageOpacity = {
  global: "opacity-[0.72]",
  home: "opacity-[0.96]",
  page: "opacity-[0.84]",
};

export function PageBackground({
  variant = "page",
  className = "",
}: PageBackgroundProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/czame-architecture.png"
        alt=""
        fill
        priority={variant === "home"}
        sizes="100vw"
        className={`object-cover object-center contrast-[1.08] saturate-[1.06] ${imageOpacity[variant]}`}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-canvas/10 to-canvas/58" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(237,244,246,0.54)_0%,rgba(237,244,246,0.24)_42%,rgba(237,244,246,0.06)_100%)]" />
      <div className="light-breathe absolute inset-0 bg-[radial-gradient(circle_at_16%_8%,rgba(223,244,248,0.28),transparent_30rem),radial-gradient(circle_at_82%_10%,rgba(8,39,47,0.10),transparent_30rem)]" />
      <div className="ambient-lines absolute inset-x-0 top-0 h-[42rem] opacity-55" />
    </div>
  );
}