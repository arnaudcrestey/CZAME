import Link from "next/link";
import {
  CopyList,
  Kicker,
  Surface,
} from "@/components/ContentBlocks";
import { PageHero } from "@/components/PageHero";
import { audienceCards, trustPages } from "@/lib/content";

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="À propos"
        title="C·ZAME aide à préparer des conversations qui comptent."
      >
        <p>
          C·ZAME est un assistant de clarification conçu pour accompagner les
          proches et les professionnels face à une situation d'addiction ou de
          consommation préoccupante, avec prudence, nuance et sans jugement.
        </p>
      </PageHero>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5">
          <Surface>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <Kicker>Notre intention</Kicker>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
                  Un assistant de dialogue, jamais un arbitre.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                  Les situations d'addiction sont rarement simples. Elles
                  mêlent émotions, inquiétudes, hésitations et parfois des
                  années de silence. C·ZAME aide à mettre de l'ordre dans un
                  récit pour préparer un dialogue plus serein.
                </p>
              </div>

              <CopyList
                items={[
                  "Comprendre sans conclure à la place de la personne.",
                  "Préparer une conversation respectueuse et réouvrable.",
                  "Orienter vers des ressources adaptées lorsque c'est nécessaire.",
                  "Rappeler les limites du rôle d'un proche ou d'un professionnel non spécialisé.",
                ]}
              />
            </div>
          </Surface>

          <Surface>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.4rem] border border-white/70 bg-white/60 p-5 backdrop-blur">
                <p className="font-semibold text-ink">
                  Une approche prudente
                </p>

                <p className="mt-2 text-sm leading-6 text-muted">
                  Des hypothèses plutôt que des certitudes, afin de respecter la
                  complexité des situations.
                </p>
              </div>

              <div className="rounded-[1.4rem] border border-white/70 bg-white/60 p-5 backdrop-blur">
                <p className="font-semibold text-ink">
                  Une approche humaine
                </p>

                <p className="mt-2 text-sm leading-6 text-muted">
                  Des formulations non jugeantes qui facilitent le dialogue sans
                  alimenter le conflit.
                </p>
              </div>

              <div className="rounded-[1.4rem] border border-white/70 bg-white/60 p-5 backdrop-blur">
                <p className="font-semibold text-ink">
                  Une approche concrète
                </p>

                <p className="mt-2 text-sm leading-6 text-muted">
                  Une prochaine étape claire et des ressources lorsque la
                  situation le nécessite.
                </p>
              </div>
            </div>
          </Surface>

          <div className="grid gap-4 lg:grid-cols-3">
            {audienceCards.map((card) => (
              <Surface key={card.title}>
                <div className="flex h-full flex-col">
                  <Kicker>Public</Kicker>

                  <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-ink">
                    {card.title}
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                    {card.text}
                  </p>

                  <Link
                    className="focus-ring mt-6 inline-flex items-center justify-center rounded-full border border-white/70 bg-white px-4 py-3 text-sm font-semibold text-primary-dark transition hover:-translate-y-0.5 hover:bg-white/90"
                    href={card.href}
                  >
                    Explorer
                  </Link>
                </div>
              </Surface>
            ))}
          </div>

          <Surface>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <Kicker>Fondations</Kicker>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
                  Les engagements de C·ZAME
                </h2>

                <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                  La première version de C·ZAME repose sur des principes simples
                  : prudence, transparence et complémentarité avec les
                  professionnels et les dispositifs existants.
                </p>
              </div>

              <div className="grid gap-4">
                {trustPages.map((page) => {
                  const Icon = page.icon;

                  return (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="focus-ring flex gap-4 rounded-[1.5rem] border border-white/70 bg-white/60 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/80"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Icon
                          className="h-5 w-5 text-primary-dark"
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-ink">
                          {page.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-muted">
                          {page.text}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Surface>
        </div>
      </section>
    </main>
  );
}