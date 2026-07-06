import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#edf7f8] text-[#071114]">
      <Image
        src="/czame-architecture.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#edf7f8]/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.86),transparent_36%),linear-gradient(180deg,rgba(237,247,248,0.30),rgba(237,247,248,0.76))]" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-[58rem] overflow-hidden rounded-[1.8rem] border border-white/80 bg-[#f8fcfc]/84 px-5 py-7 text-center shadow-[0_32px_100px_rgba(5,24,30,0.15)] backdrop-blur-[10px] sm:rounded-[2.4rem] sm:px-10 sm:py-12 lg:px-16 lg:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.56),rgba(255,255,255,0.22))]" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-white/90" />

          <div className="relative mx-auto flex max-w-4xl flex-col items-center">
            <p className="max-w-[16rem] text-[0.56rem] font-semibold uppercase leading-5 tracking-[0.32em] text-[#6f878c] sm:max-w-none sm:text-[0.68rem] sm:tracking-[0.42em]">
              Confidentialité · Clarté · Orientation
            </p>

            <Image
              src="/czame-logo.png"
              alt="CZAME"
              width={760}
              height={230}
              priority
              className="mt-7 h-auto w-[min(70vw,340px)] object-contain sm:mt-10 sm:w-[min(58vw,470px)]"
            />

            <h1 className="mt-7 max-w-3xl text-balance text-[1.82rem] font-semibold leading-[1.02] tracking-[-0.06em] text-[#071114] sm:mt-9 sm:text-5xl lg:text-[4.3rem]">
              Préparer une conversation
              <br className="hidden sm:block" />
              <span className="sm:block"> quand les mots comptent.</span>
            </h1>

            <p className="mt-4 max-w-[29rem] text-pretty text-[0.88rem] leading-6 text-[#5d7378] sm:mt-6 sm:text-base sm:leading-8">
              C-ZAME aide à clarifier une situation sensible liée à une conduite
              addictive, pour préparer un échange plus calme, plus juste et plus
              utile.
            </p>

            <Link
  href="/accueil"
  className="mt-6 inline-flex h-12 min-w-[154px] items-center justify-center rounded-full bg-[#21464d] px-7 text-sm font-semibold text-white shadow-[0_18px_46px_rgba(33,70,77,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2a565e] focus:outline-none focus:ring-2 focus:ring-[#21464d]/25 focus:ring-offset-2 focus:ring-offset-[#edf7f8] sm:mt-8 sm:h-[3.25rem] sm:min-w-[172px]"
>
  Entrer
</Link>
          </div>
        </div>
      </section>
    </main>
  );
}