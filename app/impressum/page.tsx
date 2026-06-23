import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von TorDerErinnerung.",
};

export default function ImpressumPage() {
  return (
    <PageShell
      eyebrow="Rechtliches"
      title="Impressum"
      description="Angaben gemäß § 5 TMG. Die vollständigen Inhalte werden in Kürze ergänzt."
    >
      <Section spacing="pb-24 pt-4 sm:pb-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              {/* TODO: Vor Veröffentlichung mit echten Angaben ersetzen (Platzhalter). */}
              <Card className="space-y-6 rounded-2xl p-8 leading-relaxed text-muted">
                <div>
                  <h2 className="text-xl text-soft-white">Anbieter</h2>
                  <p className="mt-2">
                    TorDerErinnerung
                    <br />
                    [Name / Verantwortliche Person]
                    <br />
                    [Straße &amp; Hausnummer]
                    <br />
                    [PLZ Ort]
                  </p>
                </div>
                <div>
                  <h2 className="text-xl text-soft-white">Kontakt</h2>
                  <p className="mt-2">E-Mail: [E-Mail-Adresse eintragen]</p>
                </div>
                <div>
                  <h2 className="text-xl text-soft-white">
                    Verantwortlich für den Inhalt
                  </h2>
                  <p className="mt-2">[Name], Anschrift wie oben.</p>
                </div>
                <p className="text-sm text-muted/70">
                  Platzhalter – vor Veröffentlichung durch rechtsgültige Angaben
                  ersetzen.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
