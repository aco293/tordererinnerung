import Link from "next/link";
import { socialLinks } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gold/10 pb-12 pt-10 sm:pt-12">
      <div className="container-x">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          {/* Marke */}
          <div className="max-w-xs text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold">
                ⟡
              </span>
              <span className="font-heading text-lg text-soft-white">
                Tor<span className="text-gold">Der</span>Erinnerung
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Ein digitaler Raum für Bewusstsein, innere Klarheit und die
              Rückkehr zu dem, was in dir nie verloren ging.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-16">
            <nav className="flex flex-col items-center gap-3 sm:items-start">
              <span className="eyebrow mb-1">Seiten</span>
              <Link href="/impressum" className="footer-link">
                Impressum
              </Link>
              <Link href="/datenschutz" className="footer-link">
                Datenschutz
              </Link>
              <Link href="/kontakt" className="footer-link">
                Kontakt
              </Link>
            </nav>

            <nav className="flex flex-col items-center gap-3 sm:items-start">
              <span className="eyebrow mb-1">Folgen</span>
              <a
                href={socialLinks.tiktok}
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
              <a
                href={socialLinks.youtube}
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-12 gold-divider" />

        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-center text-xs text-muted/70 sm:flex-row sm:text-left">
          <p>© {year} TorDerErinnerung. Alle Rechte vorbehalten.</p>
          <p className="font-heading italic text-muted">
            Hier beginnt kein neuer Glaube. Hier beginnt Erinnerung.
          </p>
        </div>
      </div>
    </footer>
  );
}
