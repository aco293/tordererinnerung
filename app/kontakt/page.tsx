import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { socialLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt – TorDerErinnerung",
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
              <div className="glass rounded-2xl p-8 text-center">
                <span className="eyebrow">E-Mail</span>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="mt-4 block font-heading text-2xl text-gold transition-colors hover:text-soft-white"
                >
                  {socialLinks.email}
                </a>

                <div className="mx-auto my-8 h-px w-16 bg-gold-line opacity-60" />

                <span className="eyebrow">Folgen</span>
                <div className="mt-4 flex justify-center gap-4">
                  <a
                    href={socialLinks.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    TikTok
                  </a>
                  <a
                    href={socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
