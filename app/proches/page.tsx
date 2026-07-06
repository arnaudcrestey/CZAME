import Link from "next/link";
import { CopyList, Kicker, Surface } from "@/components/ContentBlocks";
import { PageHero } from "@/components/PageHero";
import { closeOnesGuides } from "@/lib/content";

export default function ProchesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Proches"
        title="Aider sans tout porter, parler sans abîmer le lien."
      >
        <p>
          Pour un parent, un conjoint, un ami ou un collègue inquiet, C·ZAME
          aide à transformer une situation confuse en préparation concrète de
          conversation.
        </p>
      </PageHero>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5">
          <div className="grid gap-4 lg:grid-cols-3">
            {closeOnesGuides.map((guide) => (
              <Surface key={guide.title}>
                <div className="flex h-full flex-col">
                  <Kicker>Repère</Kicker>

                  <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-ink">
                    {guide.title}
                  </h2>

                  <div className="mt-5">
                    <CopyList items={guide.items} />
                  </div>
                </div>
              </Surface>
            ))}
          </div>

          <Surface>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <Kicker>Préparer</Kicker>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
                  Une conversation utile commence souvent plus petit qu’on ne
                  l’imagine.
                </h2>

                <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                  Le but n’est pas d’obtenir immédiatement une reconnaissance du
                  problème. Une première conversation peut simplement permettre
                  de dire l’inquiétude, d’éviter l’escalade, de proposer une
                  disponibilité et de repérer si un danger impose d’agir
                  autrement.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/70 bg-white/62 p-5 shadow-[0_18px_60px_rgba(5,24,30,0.06)] backdrop-blur-xl sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  Phrase de départ possible
                </p>

                <p className="mt-4 text-lg font-medium leading-8 tracking-[-0.02em] text-primary-dark">
                  “Je ne veux pas te faire la morale. J’aimerais te parler de
                  ce que j’observe et de ce que ça me fait.”
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 rounded-[1.75rem] border border-white/70 bg-white/62 p-5 shadow-[0_18px_60px_rgba(5,24,30,0.06)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <p className="max-w-3xl text-sm leading-7 text-primary-dark sm:text-base">
                C·ZAME aide à poser les mots avant la conversation, pour parler
                plus clairement, moins brutalement et sans porter seul toute la
                situation.
              </p>

              <Link
                className="focus-ring inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_46px_rgba(33,70,77,0.28)] transition hover:-translate-y-0.5 hover:bg-primary-dark"
                href="/#analyse"
              >
                Écrire ma situation
              </Link>
            </div>
          </Surface>
        </div>
      </section>
    </main>
  );
}