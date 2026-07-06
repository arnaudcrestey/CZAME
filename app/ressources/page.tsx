import { ResourceCard } from "@/components/ResourceCard";
import { CopyList, Kicker, Surface } from "@/components/ContentBlocks";
import { PageHero } from "@/components/PageHero";
import { emergencyResources, guidanceResources } from "@/lib/resources";
import { resourceGroups } from "@/lib/content";

export default function RessourcesPage() {
  return (
    <main className="relative overflow-hidden">
      <PageHero
        eyebrow="Ressources"
        title="Mieux comprendre, mieux orienter."
      >
        <p className="mx-auto max-w-2xl text-center">
          Retrouvez une sélection de ressources nationales reconnues pour mieux comprendre une situation et savoir vers qui vous tourner.
        </p>
      </PageHero>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6">
          <div className="grid gap-4 md:grid-cols-3">
            {resourceGroups.map((group) => {
              const Icon = group.icon;

              return (
                <Surface key={group.title}>
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                      <Icon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>

                    <h2 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-ink">
                      {group.title}
                    </h2>

                    <div className="mt-4 max-w-sm text-left">
                      <CopyList items={group.items} />
                    </div>
                  </div>
                </Surface>
              );
            })}
          </div>

          <Surface>
            <div className="mx-auto max-w-3xl text-center">
              <Kicker>Urgence</Kicker>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
                Quand la sécurité passe avant la conversation
              </h2>
            </div>

            <div className="mt-7 grid gap-3 md:grid-cols-3">
              {emergencyResources.map((resource) => (
                <ResourceCard resource={resource} key={resource.title} />
              ))}
            </div>
          </Surface>

          <Surface>
            <div className="mx-auto max-w-3xl text-center">
              <Kicker>Orientation</Kicker>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
                Ressources nationales utiles
              </h2>
            </div>

            <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {guidanceResources.map((resource) => (
                <ResourceCard resource={resource} key={resource.title} />
              ))}
            </div>
          </Surface>
        </div>
      </section>
    </main>
  );
}