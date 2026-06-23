import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Nimm Verbindung mit TorDerErinnerung auf.",
};

export default function KontaktPage() {
  return (
    <PageShell
      eyebrow="Kontakt"
      title="Verbindung aufnehmen"
      description="Manche Worte brauchen einen stillen Weg. Schreib uns – wir lesen jede Nachricht in Ruhe."
      symbol="✶"
    >
      <Section spacing="pb-24 pt-4 sm:pb-28">
        <div className="container-x">
          <div className="mx-auto max-w-xl">
            <Reveal>
              {/* TODO: Vor Veröffentlichung mit echter Kontakt-E-Mail und echten Kanälen ersetzen. */}
              <Card className="rounded-2xl p-8 text-center">
                <SectionLabel>E-Mail</SectionLabel>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="mt-4 block font-heading text-2xl text-gold transition-colors hover:text-soft-white"
                >
                  {siteConfig.contactEmail}
                </a>

                <div className="mx-auto my-8 h-px w-16 bg-gold-line opacity-60" />

                <SectionLabel>Folgen</SectionLabel>
                <div className="mt-4 flex justify-center gap-4">
                  <a
                    href={siteConfig.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    TikTok
                  </a>
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    YouTube
                  </a>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
