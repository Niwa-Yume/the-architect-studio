"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 17L17 7M17 7H7M17 7V17"
      />
    </svg>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  );
}

export function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      const cards = gridRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              end: "top 40%",
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="social-proof"
      className="bg-background py-24 lg:py-32"
    >
      <div className="3xl:max-w-550 mx-auto max-w-360 px-6 sm:px-12 lg:px-24 2xl:max-w-450">
        <div
          ref={headerRef}
          className="mb-12 flex items-center justify-between lg:mb-16"
        >
          <h2 className="text-foreground text-3xl font-medium tracking-tight lg:text-4xl">
            Trusted by industry leaders
          </h2>
          <Link
            href="#contact"
            className="bg-foreground text-background hidden items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-80 sm:inline-flex"
          >
            Work with us
          </Link>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[minmax(220px,auto)_minmax(220px,auto)_minmax(180px,auto)]"
        >
          <div className="row-span-2 flex flex-col gap-4">
            <div className="relative w-full flex-1 overflow-hidden rounded-2xl">
              <Image
                src="/img/mock-project1.webp"
                alt="Team member"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full flex-1 overflow-hidden rounded-full">
              <Image
                src="/img/mock-project2.webp"
                alt="Team member"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-muted/50 row-span-2 flex flex-col rounded-2xl p-8 lg:col-span-2">
            <div>
              <QuoteIcon className="text-foreground/20 mb-6 h-10 w-10" />
              <blockquote className="text-foreground text-2xl leading-snug font-medium lg:text-3xl">
                The Architect Studio's work output is superb, they could
                transform our input into dev-ready projects.
              </blockquote>
              <div className="mt-6">
                <p className="text-foreground font-semibold">Julien Castro</p>
              </div>
            </div>
            <div className="mt-auto flex items-center justify-between pt-8">
              <Link
                href="https://portfolio-julien-castro.vercel.app/"
                className="bg-foreground/10 hover:bg-foreground hover:text-background flex h-10 w-10 items-center justify-center rounded-full transition-colors"
              >
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="bg-muted/50 flex flex-col rounded-2xl p-6">
            <div className="flex-1">
              <p className="text-foreground text-3xl font-semibold">
                3x Faster
              </p>
              <p className="text-foreground/60 mt-1 text-sm">
                Time to Market Launch
              </p>
            </div>
            <div className="mt-auto flex items-center justify-between pt-4">
              <span className="text-foreground text-sm font-medium">
                novahq
              </span>
              <Link
                href="#"
                className="bg-foreground/10 hover:bg-foreground hover:text-background flex h-10 w-10 items-center justify-center rounded-full transition-colors"
              >
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="bg-muted/50 flex flex-col rounded-2xl p-6">
            <div className="flex-1">
              <p className="text-foreground text-3xl font-semibold">+280%</p>
              <p className="text-foreground/60 mt-1 text-sm">
                Increase in Engagement
              </p>
            </div>
            <div className="mt-auto flex items-center justify-between pt-4">
              <span className="text-foreground text-sm font-medium">
                arclight
              </span>
              <Link
                href="#"
                className="bg-foreground/10 hover:bg-foreground hover:text-background flex h-10 w-10 items-center justify-center rounded-full transition-colors"
              >
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="bg-muted/50 flex flex-col rounded-2xl p-8">
            <div className="flex-1">
              <p className="text-foreground text-3xl font-semibold lg:text-4xl">
                Top 1%
              </p>
              <p className="text-foreground/60 mt-2">
                Digital Experience
                <br />& Product Studios
              </p>
            </div>
            <div className="mt-auto pt-6">
              <p className="text-foreground text-sm font-medium">
                5.0 Rated On Trustpilot
              </p>
            </div>
          </div>

          <div className="bg-muted/50 flex flex-col rounded-2xl p-8 lg:col-span-3">
            <p className="text-foreground max-w-3xl flex-1 text-xl leading-relaxed font-medium lg:text-2xl">
              We helped Meridian rebrand and launch their new platform,
              resulting in 12M+ users within the first quarter.
            </p>
            <div className="mt-auto flex items-center justify-between pt-6">
              <span className="text-foreground text-xl font-semibold">
                Meridian
              </span>
              <Link
                href="#"
                className="bg-foreground/10 hover:bg-foreground hover:text-background flex h-10 w-10 items-center justify-center rounded-full transition-colors"
              >
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
