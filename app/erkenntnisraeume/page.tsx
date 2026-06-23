import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { realms, cta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Erkenntnisräume",
  description:
    "Sechs Räume, sechs Wege nach innen – Bewusstsein, Frequenz, Erinnerung, Schatten, Zeichen und innere Reisen.",
};

export default function ErkenntnisraeumeOverviewPage() {
  return (
    <PageShell
      eyebrow="Erkenntnisräume"
      title="Sechs Wege, die nach innen führen"
      description="Jeder Raum ist ein Zugang. Du musst keinem Pfad folgen – wähle den, der dich gerade ruft."
    >
      <Section spacing="pb-24 pt-4 sm:pb-28">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {realms.map((realm, i) => (
              <Reveal key={realm.slug} delay={i * 80} className="h-full">
                <Card
                  as={Link}
                  href={`/erkenntnisraeume/${realm.slug}`}
                  interactive
                  className="group flex h-full flex-col rounded-2xl p-7"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 text-xl text-gold transition-all duration-500 group-hover:border-gold/60 group-hover:shadow-glow">
                    {realm.symbol}
                  </span>
                  <h2 className="mt-6 text-2xl">{realm.title}</h2>
                  <p className="mt-3 text-pretty text-[0.95rem] leading-[1.7] text-muted">
                    {realm.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm text-gold/70 transition-all duration-300 group-hover:gap-3 group-hover:text-gold">
                    {cta.enterRealm} <span aria-hidden>→</span>
                  </span>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
