"use client";

import Link from "next/link";

const socialLinks = [
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
];

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const footerLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-foreground text-background lg:sticky lg:bottom-0 lg:z-0"
    >
      <div className="3xl:max-w-550 mx-auto max-w-360 px-6 pt-24 pb-16 text-center sm:px-12 sm:text-left lg:px-24 lg:pt-32 lg:pb-24 2xl:max-w-450">
        <a
          href="mailto:julien.castro@protonmail.com"
          className="text-2xl font-medium tracking-tight break-all transition-opacity hover:opacity-80 sm:text-5xl sm:break-normal lg:text-7xl"
        >
          julien.castro@protonmail.com
        </a>

        <div className="mt-10">
          <Link
            href="mailto:hjulien.castro@protonmail.com"
            className="bg-background text-foreground hover:bg-background/90 inline-flex w-full items-center justify-center rounded-full px-8 py-4 text-lg font-medium transition-colors sm:w-auto"
          >
            Start New Project
          </Link>
        </div>
      </div>

      <div className="3xl:max-w-550 mx-auto max-w-360 px-6 sm:px-12 lg:px-24 2xl:max-w-450">
        <div className="border-background/10 border-t" />
      </div>

      <div className="3xl:max-w-550 mx-auto max-w-360 px-6 py-16 sm:px-12 lg:px-24 lg:py-24 2xl:max-w-450">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-8">
          <div>
            <span className="text-4xl font-medium tracking-tight">
              Architect Studio
            </span>
            <p className="text-background/60 mt-4 text-4xl">
              Built to evolve ideas.
            </p>
          </div>

          <div className="flex flex-col gap-16 sm:flex-row lg:gap-24">
            <div>
              <h4 className="text-background/60 mb-6 text-sm font-medium">
                Location
              </h4>
              <div className="mb-6">
                <p className="mb-1 font-medium">Worldwide</p>
                <p className="text-background/60 text-sm">100% Remote Team</p>
              </div>
              <div>
                <p className="mb-1 font-medium">Switzerland</p>
                <p className="text-background/60 text-sm">
                  Geneva, CH
                  <br />
                  Lausanne, CH
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-background/60 mb-6 text-sm font-medium">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-background">Web Design</span>
                </li>
                <li>
                  <span className="text-background">Development</span>
                </li>
                <li>
                  <span className="text-background">Branding</span>
                </li>
                <li>
                  <span className="text-background">Strategy</span>
                </li>
                <li>
                  <span className="text-background">Motion</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-background/60 mb-6 text-sm font-medium">
                Navigation
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-background hover:text-background/60 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-background/60 mb-6 text-sm font-medium">
                Social
              </h4>
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-background hover:text-background/60 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="3xl:max-w-550 mx-auto max-w-360 px-6 py-6 sm:px-12 lg:px-24 2xl:max-w-450">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-background/60 hover:text-background text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="text-background/40 text-sm">
            © 2026 Architect Studio - All rights reserved
          </p>

          <p className="text-background/40 text-sm">
            Created with passion by Architect Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
