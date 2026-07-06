import { CopyList, Kicker, Surface } from "@/components/ContentBlocks";
import { PageHero } from "@/components/PageHero";

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Confidentialité"
        title="La confidentialité fait partie de la confiance."
      >
        <p>
          C·ZAME a été conçu pour accompagner des conversations sensibles.
          La protection des données, la transparence et la sobriété dans leur
          utilisation font partie intégrante du projet.
        </p>
      </PageHero>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">

          <Surface>
            <Kicker>Ce que nous faisons</Kicker>

            <h2 className="mt-3 text-2xl font-semibold text-ink">
              Une approche fondée sur la discrétion.
            </h2>

            <div className="mt-5">
              <CopyList
                items={[
                  "Le récit saisi a pour seule vocation de produire une aide à la réflexion et au dialogue.",
                  "C·ZAME ne cherche pas à établir un diagnostic ni à profiler les utilisateurs.",
                  "Les informations demandées sont limitées au strict nécessaire.",
                  "Chaque évolution du service privilégiera la transparence et le respect de la vie privée."
                ]}
              />
            </div>
          </Surface>

          <Surface>
            <Kicker>Nos engagements</Kicker>

            <h2 className="mt-3 text-2xl font-semibold text-ink">
              Une utilisation responsable des données.
            </h2>

            <div className="mt-5">
              <CopyList
                items={[
                  "Expliquer clairement quelles informations sont utilisées et pourquoi.",
                  "Informer les utilisateurs lorsqu'un service d'intelligence artificielle est sollicité.",
                  "Respecter les exigences du RGPD et les droits des personnes concernées.",
                  "Éviter toute utilisation des données à des fins commerciales ou publicitaires."
                ]}
              />
            </div>
          </Surface>

          <Surface className="lg:col-span-2">
            <Kicker>Notre philosophie</Kicker>

            <h2 className="mt-3 text-2xl font-semibold text-ink">
              Comprendre avant d'agir. Toujours.
            </h2>

            <p className="mt-5 max-w-4xl text-base leading-8 text-muted">
              C·ZAME accompagne des situations qui peuvent toucher à la santé,
              aux relations familiales, au travail ou à d'autres contextes de
              vulnérabilité. Cette responsabilité impose une approche simple :
              demander le moins d'informations possible, expliquer clairement
              leur utilisation et ne jamais transformer un récit personnel en
              outil d'évaluation ou de surveillance.
            </p>

            <p className="mt-5 max-w-4xl text-base leading-8 text-muted">
              Notre objectif n'est pas de collecter des données, mais d'aider à
              préparer un dialogue plus serein, dans un cadre respectueux,
              transparent et centré sur la personne.
            </p>
          </Surface>

        </div>
      </section>
    </main>
  );
}