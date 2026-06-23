"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/content";
import SectionLink from "./ui/SectionLink";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile-Menü beim Wechsel auf Desktop schließen.
  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gold/10 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[4.5rem] items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="TorDerErinnerung – zur Startseite"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-500 group-hover:border-gold/80">
            <span className="text-base leading-none">⟡</span>
          </span>
          <span className="font-heading text-lg tracking-wide text-soft-white sm:text-xl">
            Tor<span className="text-gold">Der</span>Erinnerung
          </span>
        </Link>

        {/* Desktop-Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <SectionLink
              key={link.section}
              section={link.section}
              className="text-sm tracking-wide text-muted transition-colors duration-300 hover:text-soft-white"
            >
              {link.label}
            </SectionLink>
          ))}
          <SectionLink section="intro" className="btn-primary text-sm">
            Das Tor betreten
          </SectionLink>
        </div>

        {/* Mobile-Toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 text-soft-white lg:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={`h-px w-5 bg-current transition-all duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-current transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-current transition-all duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile-Menü */}
      <div
        className={`overflow-hidden border-t border-gold/10 bg-background/95 backdrop-blur-md transition-all duration-500 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-x flex flex-col gap-1 py-5">
          {navLinks.map((link) => (
            <SectionLink
              key={link.section}
              section={link.section}
              onNavigate={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base text-muted transition-colors hover:bg-violet/30 hover:text-soft-white"
            >
              {link.label}
            </SectionLink>
          ))}
          <SectionLink
            section="intro"
            onNavigate={() => setOpen(false)}
            className="btn-primary mt-3 w-full"
          >
            Das Tor betreten
          </SectionLink>
        </div>
      </div>
    </header>
  );
}
