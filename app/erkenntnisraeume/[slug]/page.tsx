import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageShell from "@/components/layout/PageShell";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import RealmHero from "@/components/realm/RealmHero";
import RealmIntro from "@/components/realm/RealmIntro";
import RealmWhy from "@/components/realm/RealmWhy";
import RealmKeys from "@/components/realm/RealmKeys";
import RealmPractice from "@/components/realm/RealmPractice";
import RealmQuotes from "@/components/realm/RealmQuotes";
import RealmNextSteps from "@/components/realm/RealmNextSteps";
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
    description: realm.content?.heroDescription ?? realm.description,
  };
}

export default function ErkenntnisraumPage({ params }: PageProps) {
  const realm = getRealm(params.slug);
  if (!realm) notFound();

  const { content } = realm;

  // Platzhalterseite, solange noch kein voller Inhalt gepflegt ist.
  if (!content) {
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
                {/* Platzhalter – echte Inhalte folgen in einer späteren Phase. */}
                <Card className="rounded-2xl p-8 text-center">
                  <p className="font-heading text-2xl font-light leading-snug text-soft-white">
                    Dieser Raum wird gerade vorbereitet.
                  </p>
                  <p className="mt-4 text-pretty leading-relaxed text-muted">
                    Bald findest du hier geführte Impulse, Texte und stille
                    Übungen rund um „{realm.title}“. Bis dahin: Atme. Was du
                    suchst, sucht dich bereits.
                  </p>
                </Card>
              </Reveal>
            </div>
          </div>
        </Section>
      </PageShell>
    );
  }

  // Vollständige Inhaltsseite (Pilot-Räume).
  return (
    <>
      <Header />
      <main>
        <RealmHero
          symbol={realm.symbol}
          title={realm.title}
          subtitle={content.subtitle}
          description={content.heroDescription}
          next={content.next}
        />
        <RealmIntro
          title={content.intro.title}
          paragraphs={content.intro.paragraphs}
        />
        <RealmWhy title={content.why.title} cards={content.why.cards} />
        <RealmKeys title={content.keys.title} items={content.keys.items} />
        <RealmPractice {...content.practice} />
        <RealmQuotes title={content.quotes.title} items={content.quotes.items} />
        <RealmNextSteps
          title={content.outro.title}
          text={content.outro.text}
          next={content.next}
        />
      </main>
      <Footer />
    </>
  );
}
