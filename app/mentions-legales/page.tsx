import { CopyList, Kicker, Surface } from "@/components/ContentBlocks";
import { PageHero } from "@/components/PageHero";

export default function LegalPage() {
  return (
    <main>
      <PageHero
        eyebrow="Mentions légales"
        title="Un cadre clair pour un usage responsable."
      >
        <p>
          C·ZAME est un outil d'aide au dialogue conçu pour accompagner les
          situations sensibles. Son utilisation s'inscrit dans un cadre
          transparent, respectueux des personnes et conforme aux obligations
          légales applicables.
        </p>
      </PageHero>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5">

          <div className="grid gap-5 lg:grid-cols-2">

            <Surface>
              <Kicker>Éditeur</Kicker>

              <h2 className="mt-3 text-2xl font-semibold text-ink">
                Informations légales
              </h2>

              <p className="mt-5 text-base leading-8 text-muted">
                Les informations relatives à l'éditeur, au directeur de
                publication, à l'hébergement et aux moyens de contact seront
                précisées lors de la mise en ligne officielle du service.
              </p>
            </Surface>

            <Surface>
              <Kicker>Nature du service</Kicker>

              <h2 className="mt-3 text-2xl font-semibold text-ink">
                Aide à la réflexion, jamais au diagnostic.
              </h2>

              <p className="mt-5 text-base leading-8 text-muted">
                C·ZAME accompagne la préparation d'une conversation et propose
                des repères pour mieux comprendre une situation. Il ne remplace
                ni un professionnel de santé, ni un accompagnement spécialisé,
                ni une décision médicale, juridique ou sociale.
              </p>
            </Surface>

          </div>

          <Surface>
            <Kicker>Utilisation</Kicker>

            <h2 className="mt-3 text-2xl font-semibold text-ink">
              Ce qu'il est important de savoir.
            </h2>

            <div className="mt-5">
              <CopyList
                items={[
                  "C·ZAME fournit une aide à la réflexion et au dialogue, jamais un diagnostic.",
                  "Les contenus proposés doivent être interprétés comme des repères et non comme des certitudes.",
                  "En cas de danger immédiat ou d'urgence, il convient de contacter les services compétents.",
                  "Les ressources mentionnées sont données à titre informatif et peuvent évoluer dans le temps."
                ]}
              />
            </div>
          </Surface>

          <Surface>
            <Kicker>Propriété intellectuelle</Kicker>

            <h2 className="mt-3 text-2xl font-semibold text-ink">
              Respect des contenus et de la marque.
            </h2>

            <p className="mt-5 max-w-4xl text-base leading-8 text-muted">
              Les contenus, textes, éléments graphiques, identité visuelle et
              composants de C·ZAME sont protégés par les dispositions relatives
              à la propriété intellectuelle. Toute reproduction, diffusion ou
              réutilisation, totale ou partielle, sans autorisation préalable,
              est interdite.
            </p>
          </Surface>

        </div>
      </section>
    </main>
  );
}