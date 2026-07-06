import Link from "next/link";
import {
  CopyList,
  Kicker,
  Surface,
} from "@/components/ContentBlocks";
import { PageHero } from "@/components/PageHero";
import { professionalUseCases } from "@/lib/content";

export default function ProfessionnelsPage() {
  return (
    <main>
      <PageHero
  eyebrow="Professionnels"
  title="Parce que les conversations les plus difficiles méritent d'être préparées."
>
  <p>
    C·ZAME aide les professionnels à clarifier une situation, préparer un
    échange délicat et orienter avec discernement, sans jamais remplacer le
    jugement professionnel ni une expertise médicale.
  </p>
</PageHero>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5">
          <Surface>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <Kicker>Cadre d’usage</Kicker>

                <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
                  Aider à adopter la bonne posture, sans surinterpréter.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                  C·ZAME transforme un récit libre en repères lisibles : ce qui
                  semble préoccupant, ce qui mérite d'être exploré avec
                  prudence, ce qui peut être formulé et ce qui nécessite un
                  relais.
                </p>
              </div>

              <div className="grid gap-3">
                <div className="rounded-[1.4rem] border border-white/70 bg-white/60 p-5 backdrop-blur">
                  <p className="font-semibold text-ink">
                    Un récit libre comme point de départ
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    Le récit de la personne reste toujours la première source de
                    compréhension.
                  </p>
                </div>

                <div className="rounded-[1.4rem] border border-white/70 bg-white/60 p-5 backdrop-blur">
                  <p className="font-semibold text-ink">
                    Une vigilance graduée
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    C·ZAME aide à distinguer ce qui relève de l'observation,
                    d'une vigilance renforcée ou d'un relais vers des ressources
                    adaptées.
                  </p>
                </div>

                <div className="rounded-[1.4rem] border border-white/70 bg-white/60 p-5 backdrop-blur">
                  <p className="font-semibold text-ink">
                    Aucun diagnostic
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    L'outil accompagne la réflexion professionnelle sans se
                    substituer à une évaluation clinique ou spécialisée.
                  </p>
                </div>
              </div>
            </div>
          </Surface>

          <div className="grid gap-4 lg:grid-cols-3">
            {professionalUseCases.map((useCase) => (
              <Surface key={useCase.title}>
                <div className="flex h-full flex-col">
                  <Kicker>Cas d’usage</Kicker>

                  <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-ink">
                    {useCase.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {useCase.text}
                  </p>
                </div>
              </Surface>
            ))}
          </div>

          <Surface>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <Kicker>Méthode</Kicker>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
                  Ce que C·ZAME aide concrètement à préparer
                </h2>

                <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                  C·ZAME ne cherche pas à décider à la place du professionnel.
                  Il aide à clarifier la situation, préparer le dialogue et
                  orienter avec davantage de nuance.
                </p>
              </div>

              <CopyList
                items={[
                  "Une synthèse prudente de ce que le récit laisse apparaître.",
                  "Des points de vigilance et les situations qui nécessitent un relais.",
                  "Des formulations non jugeantes adaptées à un entretien.",
                  "Des ressources utiles pour poursuivre l'accompagnement.",
                ]}
              />
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-white/70 bg-white/62 p-5 shadow-[0_18px_60px_rgba(5,24,30,0.06)] backdrop-blur-xl sm:p-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <p className="max-w-3xl text-sm leading-7 text-primary-dark sm:text-base">
                  L'objectif n'est pas de convaincre, de confronter ou de
                  surveiller. Il est d'ouvrir un dialogue, préserver la relation
                  et mobiliser les bons relais lorsque la situation l'exige.
                </p>

                <Link
                  className="focus-ring inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_46px_rgba(33,70,77,0.28)] transition hover:-translate-y-0.5 hover:bg-primary-dark"
                  href="/accueil"
                >
                  Tester avec un récit
                </Link>
              </div>
            </div>
          </Surface>
        </div>
      </section>
    </main>
  );
}