import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Datenschutz – TorDerErinnerung",
  description: "Datenschutzerklärung von TorDerErinnerung.",
};

export default function DatenschutzPage() {
  return (
    <PageShell
      eyebrow="Rechtliches"
      title="Datenschutz"
      description="Deine Daten bleiben geschützt. Die vollständige Datenschutzerklärung wird in Kürze ergänzt."
    >
      <Section spacing="pb-24 pt-4 sm:pb-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <div className="glass space-y-6 rounded-2xl p-8 leading-relaxed text-muted">
                <div>
                  <h2 className="text-xl text-soft-white">Überblick</h2>
                  <p className="mt-2">
                    Wir gehen mit deinen personenbezogenen Daten sorgsam und
                    vertraulich um – im Einklang mit der DSGVO. Diese Seite ist
                    ein Platzhalter und wird vor Veröffentlichung vervollständigt.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl text-soft-white">Newsletter</h2>
                  <p className="mt-2">
                    In der aktuellen Version werden über das Newsletter-Formular
                    noch keine Daten an einen Dienst übertragen oder dauerhaft
                    gespeichert.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl text-soft-white">Deine Rechte</h2>
                  <p className="mt-2">
                    Du hast jederzeit das Recht auf Auskunft, Berichtigung und
                    Löschung deiner Daten sowie auf Widerruf erteilter
                    Einwilligungen.
                  </p>
                </div>
                <p className="text-sm text-muted/70">
                  Dieser Platzhalter dient der Gestaltung. Vor Veröffentlichung
                  bitte durch eine rechtsgültige Datenschutzerklärung ersetzen.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
