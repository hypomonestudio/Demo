"use client";

import Image from "next/image";
import { useState } from "react";
import { styles } from "@/lib/content";
import { Band } from "./section";

/*
 * Informa's "Shop By Style", which is the single most useful pattern
 * for a showcase: it browses by look rather than by offer, so it needs
 * no price, no badge, and no claim to work.
 */
export function StyleTabs() {
  const [tab, setTab] = useState(0);
  const s = styles[tab];

  return (
    <Band>
      <h2 className="text-[22px] font-extrabold sm:text-[26px]">Belanja per gaya</h2>

      <div className="mt-4 border-b border-line">
        <div
          className="no-scrollbar -mb-px flex gap-6 overflow-x-auto"
          role="tablist"
          aria-label="Gaya ruangan"
        >
          {styles.map((t, i) => (
            <button
              key={t.label}
              role="tab"
              aria-selected={i === tab}
              onClick={() => setTab(i)}
              className={`shrink-0 whitespace-nowrap border-b-2 pb-3 text-[14.5px] transition ${
                i === tab
                  ? "border-brand font-bold text-brand"
                  : "border-transparent font-medium text-ink-2 hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3 lg:grid-cols-[1.5fr_1fr]">
        <div className="relative aspect-[16/10] overflow-hidden bg-shell lg:aspect-auto lg:min-h-[400px]">
          <Image
            src={s.image}
            alt={s.label}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 max-w-sm bg-paper p-6">
            <h3 className="text-[21px] font-extrabold">{s.label}</h3>
            <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">{s.body}</p>
            <a
              href="#"
              className="mt-4 inline-flex h-10 items-center border border-ink px-5 text-[13.5px] font-bold transition hover:bg-ink hover:text-white"
            >
              Lihat gaya ini
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {s.picks.map((src) => (
            <a key={src} href="#" className="group relative block aspect-square overflow-hidden bg-shell">
              <Image
                src={src}
                alt={`Pilihan ${s.label}`}
                fill
                sizes="(max-width: 1024px) 50vw, 22vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </Band>
  );
}
