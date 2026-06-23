import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { erkenntnisraeume, getErkenntnisraum } from "@/lib/content";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return erkenntnisraeume.map((raum) => ({ slug: raum.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const raum = getErkenntnisraum(params.slug);
  if (!raum) return { title: "Erkenntnisraum – TorDerErinnerung" };
  return {
    title: `${raum.title} – TorDerErinnerung`,
    description: raum.description,
  };
}

export default function ErkenntnisraumPage({ params }: PageProps) {
  const raum = getErkenntnisraum(params.slug);
  if (!raum) notFound();

  return (
    <PageShell
      eyebrow="Erkenntnisraum"
      title={raum.title}
      description={raum.description}
      symbol={raum.symbol}
    >
      <Section spacing="pb-24 pt-4 sm:pb-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <div className="glass rounded-2xl p-8 text-center">
                <p className="font-heading text-2xl font-light leading-snug text-soft-white">
                  Dieser Raum wird gerade vorbereitet.
                </p>
                <p className="mt-4 text-pretty leading-relaxed text-muted">
                  Bald findest du hier geführte Impulse, Texte und stille
                  Übungen rund um „{raum.title}“. Bis dahin: Atme. Was du suchst,
                  sucht dich bereits.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
