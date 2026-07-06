"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clipboard,
  Loader2,
  LockKeyhole,
  MessagesSquare,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { requestDialogueAnalysis } from "@/lib/ai";
import { analyzeNarrative } from "@/lib/analyze";
import { ResourceCard } from "./ResourceCard";
import { RiskBadge } from "./RiskBadge";
import { SectionCard } from "./SectionCard";

const starterText =
  "Je m'inquiète pour mon frère. Depuis quelques mois, il boit presque tous les soirs. Quand on lui en parle, il se ferme ou s'énerve. Sa compagne ne sait plus comment réagir.";

type AnalysisResult = ReturnType<typeof analyzeNarrative>;

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li className="flex gap-3 text-sm leading-6 text-muted" key={item}>
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Reveal({
  show,
  delay = 0,
  children,
}: {
  show: boolean;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className="transition-all duration-700 ease-out"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0px)" : "translateY(18px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function AnalyzingOverlay() {
  const steps = [
    "Lecture du récit",
    "Repérage des signaux",
    "Formulation des pistes",
  ];
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setActiveStep(0);
    const interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % steps.length);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-16 text-center">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-primary/15" />
        <span className="absolute inset-2 animate-pulse rounded-full bg-primary/10" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_18px_46px_rgba(33,70,77,0.35)]">
          <Loader2 className="h-6 w-6 animate-spin" aria-hidden="true" />
        </span>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          Analyse en cours
        </p>
        <p className="text-base font-medium text-ink transition-opacity duration-500">
          {steps[activeStep]}
        </p>
      </div>

      <div className="flex items-center gap-2">
        {steps.map((step, index) => (
          <span
            key={step}
            className="h-1.5 rounded-full transition-all duration-500"
            style={{
              width: index === activeStep ? "2.25rem" : "0.5rem",
              backgroundColor:
                index === activeStep
                  ? "var(--color-primary, #21464d)"
                  : "rgba(33,70,77,0.18)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function CzameApp() {
  const [narrative, setNarrative] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "analyzing" | "complete">(
    "idle"
  );
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [revealed, setRevealed] = useState(false);
  const resultRef = useRef<HTMLDivElement | null>(null);

  const characterCount = narrative.length;
  const canAnalyze = characterCount >= 80 && characterCount <= 4000;

  async function handleAnalyze() {
    if (!canAnalyze) return;

    setStatus("analyzing");
setRevealed(false);

requestAnimationFrame(() => {
  resultRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});



    const nextNarrative = narrative.trim();
    const nextAnalysis = await requestDialogueAnalysis(nextNarrative);

    setSubmitted(nextNarrative);
    setAnalysis(nextAnalysis);
    setStatus("complete");

  

    window.setTimeout(() => {
      setRevealed(true);
    }, 120);
  }

  function loadExample() {
    setNarrative(starterText);
  }

  return (
  <main className="relative min-h-screen overflow-hidden bg-canvas text-ink">
    <div className="pointer-events-none absolute inset-0">
      <Image
        src="/czame-architecture.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-[0.22]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,252,252,0.95)_0%,rgba(237,244,246,0.93)_42%,rgba(237,244,246,1)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.94),transparent_34rem)]" />
    </div>

    <section className="relative px-4 pb-10 pt-10 sm:px-6 sm:pt-16 lg:px-8 lg:pb-14 lg:pt-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Préparer le dialogue
        </div>

        <Link
          href="/a-propos"
          className="group mt-7 inline-block w-fit"
          aria-label="Découvrir C·ZAME"
        >
          <h1 className="text-[3rem] font-extrabold leading-[0.92] tracking-[-0.07em] text-primary sm:text-6xl lg:text-7xl">
            C<span className="mx-[0.06em] text-primary/70">·</span>ZAME
          </h1>
        </Link>

        <p className="mt-5 max-w-xl text-base leading-7 text-primary-dark/80 sm:text-lg sm:leading-8">
          Préparer une conversation autour d’une conduite addictive, avec calme,
          nuance et sans jugement.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_46px_rgba(33,70,77,0.28)] transition hover:-translate-y-0.5 hover:bg-primary-dark"
            href="#analyse"
          >
            Commencer
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <Link
            className="focus-ring inline-flex items-center justify-center rounded-full border border-white/70 bg-white/70 px-6 py-3 text-sm font-semibold text-primary-dark backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
            href="/urgence"
          >
            Situation urgente
          </Link>
        </div>
      </div>
    </section>

    <section
      id="analyse"
      className="relative px-4 pb-16 sm:px-6 lg:px-8"
      aria-label="Analyse CZAME"
    >
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/70 bg-white/58 p-3 shadow-ambient backdrop-blur-2xl sm:p-4">
        <div className="rounded-[1.55rem] border border-white/70 bg-white/80 p-5 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                Votre récit
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
                Qu’est-ce qui vous inquiète ?
              </h2>
            </div>

            <button
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-primary-dark transition hover:-translate-y-0.5"
              type="button"
              onClick={() => setNarrative("")}
              aria-label="Réinitialiser"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="group relative mt-6">
            <div className="pointer-events-none absolute -inset-px rounded-[1.5rem] bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-focus-within:opacity-100" />
            <textarea
              className="focus-ring relative min-h-[20rem] w-full resize-none rounded-[1.5rem] border border-primary/15 bg-white p-6 text-base leading-7 text-ink shadow-[0_12px_40px_rgba(33,70,77,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-300 placeholder:text-muted/50 focus:border-primary/40 focus:shadow-[0_24px_60px_rgba(33,70,77,0.14),0_0_0_4px_rgba(33,70,77,0.05)] sm:min-h-[22rem] sm:p-7 sm:text-lg sm:leading-8"
              value={narrative}
              onChange={(event) => setNarrative(event.target.value)}
              placeholder="Décrivez librement la situation : ce que vous observez, ce qui a changé, ce qui vous inquiète, ce que vous avez déjà tenté..."
              minLength={80}
              maxLength={4000}
            />
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p
              className={`text-sm ${
                characterCount > 4000 ||
                (characterCount > 0 && characterCount < 80)
                  ? "text-warning"
                  : "text-muted"
              }`}
            >
              {characterCount} / 4000 caractères · minimum 80
            </p>

            <button
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_46px_rgba(33,70,77,0.28)] transition hover:-translate-y-0.5 hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-muted/45 disabled:shadow-none"
              type="button"
              onClick={handleAnalyze}
              disabled={!canAnalyze || status === "analyzing"}
            >
              {status === "analyzing" ? (
                <>
                  Analyse
                  <Loader2
                    className="h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                </>
              ) : (
                <>
                  Commencer
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </>
              )}
            </button>
          </div>

          <p className="mt-5 flex items-start gap-3 rounded-[1.25rem] border border-line/80 bg-white/70 p-4 text-sm leading-6 text-muted">
  <LockKeyhole
    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
    aria-hidden="true"
  />

  <span>
  <span className="block">
    Vos&nbsp;informations&nbsp;restent&nbsp;confidentielles.
  </span>

  <span className="block">
    C·ZAME ne pose pas de diagnostic.
  </span>
</span>
</p>
        </div>
      </div>
    </section>

    {status === "analyzing" ? (
      <section
  ref={resultRef}
  className="relative px-4 pb-20 sm:px-6 lg:px-8"
>
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/70 bg-white/72 shadow-quiet backdrop-blur-xl">
          <AnalyzingOverlay />
        </div>
      </section>
    ) : null}

    {status === "complete" && analysis && submitted ? (
      <section
        id="resultat"
        ref={resultRef}
        className="relative px-4 pb-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <Reveal show={revealed} delay={0}>
              <div className="rounded-[2rem] border border-white/70 bg-white/72 p-5 shadow-quiet backdrop-blur-xl sm:p-6">
                <RiskBadge level={analysis.riskLevel} label={analysis.label} />

                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-ink">
                  Analyse de la situation
                </h2>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {analysis.summary}
                </p>

                <div className="mt-5 rounded-[1.25rem] bg-canvas-soft p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    Prochaine étape
                  </p>
                  <p className="mt-2 text-sm leading-6 text-primary-dark">
                    {analysis.nextStep}
                  </p>
                </div>
              </div>
            </Reveal>
          </aside>

          <div className="grid gap-4">
            {analysis.riskLevel === "red" ? (
              <Reveal show={revealed} delay={80}>
                <SectionCard
                  title="Avant de parler, sécuriser"
                  eyebrow="Garde-fou"
                  tone="danger"
                >
                  <p>
                    Si le risque est actuel ou si vous craignez un passage à
                    l’acte, ne cherchez pas la formulation parfaite. Appelez une
                    aide d’urgence, rapprochez-vous d’un adulte/professionnel
                    fiable et évitez de rester seul avec la situation.
                  </p>
                </SectionCard>
              </Reveal>
            ) : null}

            <Reveal show={revealed} delay={140}>
              <SectionCard
                title="Ce que le récit laisse apparaître"
                eyebrow="Comprendre"
              >
                <BulletList items={analysis.whatSeemsAtStake} />
              </SectionCard>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-2">
  <Reveal show={revealed} delay={200}>
    <SectionCard title="Préparer la conversation" eyebrow="Plan proposé">
      <BulletList items={analysis.conversationPlan} />
    </SectionCard>
  </Reveal>

  <Reveal show={revealed} delay={240}>
    <SectionCard title="Questions qui peuvent aider" eyebrow="Questions ouvertes">
      <BulletList items={analysis.questionsToAsk} />
    </SectionCard>
  </Reveal>
</div>

<Reveal show={revealed} delay={280}>
  <SectionCard title="Ce que vous pouvez faire maintenant" eyebrow="Actions concrètes">
    <BulletList items={analysis.nextActions} />
  </SectionCard>
</Reveal>

<div className="grid gap-4 md:grid-cols-2">
  <Reveal show={revealed} delay={320}>
    <SectionCard title="À garder en tête" eyebrow="Vigilance">
      <BulletList items={analysis.pointsOfVigilance} />
    </SectionCard>
  </Reveal>

  <Reveal show={revealed} delay={360}>
    <SectionCard title="Ce que cette analyse ne dit pas" eyebrow="Limites">
      <BulletList items={analysis.whatNotToConclude} />
    </SectionCard>
  </Reveal>
</div>

            <div className="grid gap-4 md:grid-cols-2">
              <Reveal show={revealed} delay={300}>
                <SectionCard
                  title="Formulations à essayer"
                  eyebrow="Dire sans accuser"
                >
                  <BulletList items={analysis.phrasesToTry} />
                </SectionCard>
              </Reveal>

              <Reveal show={revealed} delay={340}>
                <SectionCard
                  title="Formulations à éviter"
                  eyebrow="Éviter le blocage"
                >
                  <BulletList items={analysis.phrasesToAvoid} />
                </SectionCard>
              </Reveal>
            </div>

            <Reveal show={revealed} delay={400}>
              <p className="rounded-[1.5rem] border border-white/70 bg-white/64 p-4 text-sm leading-6 text-muted backdrop-blur">
                {analysis.disclaimer}
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    ) : null}
  </main>
);
}