"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { slides } from "@/lib/content";
import { Chevron } from "./icons";

/*
 * One full section, nothing beside it. The overlay card is the logo
 * composition itself: yellow field, blue action.
 *
 * Four text elements only, per hero discipline: eyebrow, headline,
 * subtext, one CTA.
 */
export function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (n: number) => setI((c) => (c + n + slides.length) % slides.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => go(1), 7000);
    return () => clearInterval(t);
  }, [go, paused]);

  const slide = slides[i];

  return (
    <section
      className="relative isolate flex min-h-[calc(100dvh-4rem)] items-end overflow-hidden bg-shell lg:min-h-[calc(100dvh-10.25rem)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Koleksi unggulan"
    >
      {slides.map((s, n) => (
        <Image
          key={s.image}
          src={s.image}
          alt={s.title}
          fill
          priority={n === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-[900ms] ${
            n === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Scrim only at the foot, so the photograph stays the subject. */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/45 to-transparent" />

      <div className="shell-pad relative mx-auto flex w-full max-w-[1600px] flex-col gap-8 pb-10 pt-24 sm:pb-14 lg:flex-row lg:items-end lg:justify-between">
        <div key={i} className="rise max-w-[min(38rem,100%)] bg-yellow p-7 sm:p-10">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-brand">
            {slide.eyebrow}
          </p>
          <h1 className="mt-3 text-[34px] font-extrabold leading-[1.04] text-ink sm:text-[46px] lg:text-[54px]">
            {slide.title}
          </h1>
          <p className="mt-4 max-w-[34ch] text-[15.5px] leading-relaxed text-ink/80 sm:text-[17px]">
            {slide.body}
          </p>
          <a
            href="#koleksi"
            className="mt-7 inline-flex h-12 items-center whitespace-nowrap bg-brand px-8 text-[15px] font-bold text-white transition hover:bg-brand-dark active:scale-[0.98]"
          >
            {slide.cta}
          </a>
        </div>

        <div className="flex items-center gap-3 lg:pb-2">
          <div className="flex gap-1.5">
            {slides.map((s, n) => (
              <button
                key={s.image}
                onClick={() => setI(n)}
                aria-label={`Tampilkan ${s.eyebrow}`}
                aria-current={n === i}
                className={`h-1.5 transition-all ${
                  n === i ? "w-8 bg-yellow" : "w-4 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(-1)}
            aria-label="Slide sebelumnya"
            className="flex h-10 w-10 items-center justify-center bg-white/90 text-ink transition hover:bg-white active:scale-95"
          >
            <Chevron size={18} weight="bold" className="rotate-180" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Slide berikutnya"
            className="flex h-10 w-10 items-center justify-center bg-white/90 text-ink transition hover:bg-white active:scale-95"
          >
            <Chevron size={18} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
}
