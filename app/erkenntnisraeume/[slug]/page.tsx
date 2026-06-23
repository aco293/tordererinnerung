import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/layout/PageShell";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { realms, getRealm } from "@/lib/content";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return realms.map((realm) => ({ slug: realm.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const realm = getRealm(params.slug);
  if (!realm) return { title: "Erkenntnisraum" };
  return {
    title: realm.title,
    description: realm.description,
  };
}

export default function ErkenntnisraumPage({ params }: PageProps) {
  const realm = getRealm(params.slug);
  if (!realm) notFound();

  return (
    <PageShell
      eyebrow="Erkenntnisraum"
      title={realm.title}
      description={realm.description}
      symbol={realm.symbol}
    >
      <Section spacing="pb-24 pt-4 sm:pb-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              {/* Platzhalter – echte Inhalte folgen in Phase 2 (siehe docs/KONZEPT.md). */}
              <Card className="rounded-2xl p-8 text-center">
                <p className="font-heading text-2xl font-light leading-snug text-soft-white">
                  Dieser Raum wird gerade vorbereitet.
                </p>
                <p className="mt-4 text-pretty leading-relaxed text-muted">
                  Bald findest du hier geführte Impulse, Texte und stille
                  Übungen rund um „{realm.title}“. Bis dahin: Atme. Was du suchst,
                  sucht dich bereits.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
