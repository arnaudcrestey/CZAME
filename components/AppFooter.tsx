import Image from "next/image";
import Link from "next/link";

import { mainNavigation, trustNavigation } from "@/lib/navigation";

const footerNavigation = mainNavigation.filter(
  (item) => item.href !== "/urgence"
);

export function AppFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#3f4d51] text-white lg:backdrop-blur-3xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(214,226,226,0.12),transparent_24rem)] lg:bg-[radial-gradient(circle_at_18%_8%,rgba(128,170,181,0.18),transparent_27rem)]" />

      <div className="relative mx-auto grid max-w-7xl gap-3 px-6 py-3 sm:gap-7 sm:px-8 sm:py-8 lg:grid-cols-[minmax(430px,560px)_auto] lg:items-center lg:gap-10 lg:py-9 xl:grid-cols-[minmax(500px,620px)_auto]">
        {/* LOGO */}
        <div className="flex justify-center lg:justify-start lg:-ml-8 xl:-ml-10">
          <Link href="/" className="block">
            <Image
              src="/czame-logo.png"
              alt="CZAME"
              width={900}
              height={260}
              priority
              className="
                h-auto
                w-[350px]
                max-w-[92vw]
                select-none
                sm:w-[410px]
                md:w-[470px]
                lg:w-[540px]
                xl:w-[600px]
              "
            />
          </Link>
        </div>

        {/* MENUS */}
        <div className="mx-auto grid w-full max-w-[520px] grid-cols-2 gap-10 sm:gap-14 lg:mx-0 lg:w-auto lg:max-w-none lg:justify-self-end lg:gap-16 xl:gap-20">
          <nav aria-label="Application">
            <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-white/60 lg:text-white/42">
              Application
            </p>

            <div className="mt-1.5 flex flex-col gap-2.5 sm:mt-3 lg:mt-3 lg:gap-1.5">
              {footerNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base leading-7 text-white/86 transition hover:text-white lg:text-sm lg:leading-5 lg:text-white/66"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Informations">
            <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-white/60 lg:text-white/42">
              Informations
            </p>

            <div className="mt-1.5 flex flex-col gap-2.5 sm:mt-3 lg:mt-3 lg:gap-1.5">
              {trustNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base leading-7 text-white/86 transition hover:text-white lg:text-sm lg:leading-5 lg:text-white/66"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>

      <div className="relative border-t border-white/10">
  <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr] items-center gap-4 px-6 py-3 text-[10px] leading-4 text-white/40 sm:px-8 lg:grid-cols-3 lg:text-[11px]">

    <div className="justify-self-start whitespace-nowrap">
      © {new Date().getFullYear()} C·ZAME
    </div>

    <div className="justify-self-end text-right lg:justify-self-center lg:text-center">
      <Link
        href="https://arnaudcrestey.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/60 transition hover:text-white"
      >
        Conçu et développé par Arnaud Crestey
      </Link>
    </div>

    <div className="hidden justify-self-end text-right lg:block">
      Parler juste. Ouvrir une issue.
    </div>

  </div>
</div>
    </footer>
  );
}