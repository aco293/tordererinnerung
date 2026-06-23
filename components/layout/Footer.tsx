import Link from "next/link";
import { discoverLinks, legalLinks, siteConfig } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gold/10 pb-12 pt-10 sm:pt-12">
      <div className="container-x">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
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
          <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-3 sm:gap-12 md:text-left">
            <nav className="flex flex-col items-center gap-3 sm:items-start">
              <span className="eyebrow mb-1">Entdecken</span>
              {discoverLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </nav>

            <nav className="flex flex-col items-center gap-3 sm:items-start">
              <span className="eyebrow mb-1">Seiten</span>
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </nav>

            <nav className="col-span-2 flex flex-col items-center gap-3 sm:col-span-1 sm:items-start">
              <span className="eyebrow mb-1">Folgen</span>
              <a
                href={siteConfig.social.tiktok}
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
              <a
                href={siteConfig.social.youtube}
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
