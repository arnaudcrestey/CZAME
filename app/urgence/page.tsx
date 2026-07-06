import { ResourceCard } from "@/components/ResourceCard";
import { CopyList, Kicker, Surface } from "@/components/ContentBlocks";
import { PageHero } from "@/components/PageHero";
import { emergencyResources } from "@/lib/resources";

export default function UrgencePage() {
  return (
    <main>
      <PageHero eyebrow="Urgence" title="Quand il faut sécuriser avant de parler.">
        <p>Si une personne est en danger immédiat, très intoxiquée, violente, confuse, suicidaire ou si un mineur est exposé à un risque, la priorité n’est plus de trouver la bonne phrase.</p>
      </PageHero>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5">
          <Surface className="border-danger/25 bg-danger-soft/80">
            <Kicker>Priorité sécurité</Kicker>
            <h2 className="mt-3 text-2xl font-semibold text-danger">Ne restez pas seul avec un risque actuel.</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {emergencyResources.map((resource) => (
                <ResourceCard resource={resource} key={resource.title} />
              ))}
            </div>
          </Surface>

          <div className="grid gap-4 lg:grid-cols-2">
            <Surface>
              <Kicker>Signaux d’alerte</Kicker>
              <h2 className="mt-3 text-xl font-semibold text-ink">La conversation peut attendre</h2>
              <div className="mt-4">
                <CopyList
                  items={[
                    "Respiration anormale, malaise, perte de connaissance, intoxication sévère.",
                    "Idées suicidaires, propos de mort, mise en danger volontaire.",
                    "Violence, menace, hallucinations, délire, confusion importante.",
                    "Mineur ou personne vulnérable exposé à une situation dangereuse."
                  ]}
                />
              </div>
            </Surface>
            <Surface>
              <Kicker>Posture</Kicker>
              <h2 className="mt-3 text-xl font-semibold text-ink">Ce qu’il vaut mieux faire</h2>
              <div className="mt-4">
                <CopyList
                  items={[
                    "Appeler un service d’urgence ou une ligne de crise selon la situation.",
                    "Se rapprocher d’un adulte, d’un professionnel ou d’un tiers fiable.",
                    "Éviter la confrontation si elle augmente le danger.",
                    "Revenir au dialogue de fond seulement lorsque la sécurité est revenue."
                  ]}
                />
              </div>
            </Surface>
          </div>
        </div>
      </section>
    </main>
  );
}
