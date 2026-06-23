"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { cta } from "@/lib/content";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Vor Veröffentlichung mit echter Newsletter-Anbindung ersetzen.
    // v1: keine Backend-Anbindung – nur Validierung und sanftes Feedback.
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError("Bitte gib eine gültige E-Mail-Adresse ein.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <Section
      id="newsletter"
      className="relative overflow-hidden"
      spacing="pt-10 pb-10 sm:pt-12 sm:pb-14 lg:pt-16 lg:pb-20"
    >
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/40 blur-[120px]"
      />

      <div className="container-x relative">
        <Card className="mx-auto max-w-2xl rounded-3xl px-7 py-12 text-center sm:px-14 sm:py-16">
          <Reveal>
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-xl text-gold">
              ✶
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 text-balance text-3xl leading-tight sm:text-4xl">
              Empfange Impulse aus dem Tor
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted">
              Stille Worte, neue Erkenntnisräume und ein Hinweis, sobald das Buch
              erscheint. Kein Lärm, keine Werbung – nur Erinnerung.
            </p>
          </Reveal>

          <Reveal delay={300}>
            {submitted ? (
              <div className="mt-9" role="status">
                <span
                  aria-hidden
                  className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold"
                >
                  ⟡
                </span>
                <p className="font-heading text-2xl font-light leading-snug text-gold">
                  Danke. Deine Verbindung zum Tor wurde vorgemerkt.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="mx-auto mt-9 max-w-md"
              >
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Deine E-Mail-Adresse"
                    aria-label="E-Mail-Adresse"
                    aria-invalid={Boolean(error)}
                    className={`w-full rounded-full border bg-background/60 px-5 py-3.5 text-soft-white placeholder:text-muted/60 outline-none transition-colors focus:border-gold/60 ${
                      error ? "border-red-400/60" : "border-gold/20"
                    }`}
                  />
                  <Button type="submit" className="w-full shrink-0 sm:w-auto">
                    {cta.newsletterSubmit}
                  </Button>
                </div>
                {error && (
                  <p className="mt-3 text-sm text-red-300/80" role="alert">
                    {error}
                  </p>
                )}
              </form>
            )}
          </Reveal>

          <Reveal delay={400}>
            <p className="mt-5 text-xs text-muted/70">
              Du kannst dich jederzeit wieder abmelden. Deine Daten bleiben bei
              uns geschützt.
            </p>
          </Reveal>
        </Card>
      </div>
    </Section>
  );
}
