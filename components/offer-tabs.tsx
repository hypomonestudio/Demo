"use client";

import { useState } from "react";
import { offerTabs } from "@/lib/content";
import { ProductCard } from "./product-card";
import { Band } from "./section";

/*
 * Informa's most transferable pattern: one section, several tabbed
 * filters, a promo panel pinned to the left of the product rail.
 */
export function OfferTabs() {
  const [tab, setTab] = useState(0);

  return (
    <Band className="pt-2">
      <h2 className="text-[22px] font-extrabold sm:text-[26px]">Penawaran Spesial</h2>

      {/* The rule lives on the wrapper; the strip itself only scrolls sideways. */}
      <div className="mt-4 border-b border-line">
        <div
          className="no-scrollbar -mb-px flex gap-6 overflow-x-auto"
          role="tablist"
          aria-label="Kategori penawaran"
        >
          {offerTabs.map((t, i) => (
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

      <div className="mt-6 grid gap-4 lg:grid-cols-[280px_1fr]">
        <div className="relative flex flex-col justify-between bg-yellow p-7 text-ink">
          <div>
            <p className="text-[38px] font-extrabold leading-[0.95]">
              Hemat
              <br />
              hingga 40%
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-ink/75">
              Berlaku untuk koleksi ruang tamu dan ruang makan terpilih, 15 sampai 30 Agustus.
            </p>
          </div>
          <a
            href="#"
            className="mt-7 inline-flex h-11 w-fit items-center whitespace-nowrap bg-brand px-6 text-[14px] font-bold text-white transition hover:bg-brand-dark active:scale-[0.98]"
          >
            Lihat selengkapnya
          </a>
        </div>

        <div className="rail items-stretch gap-4 lg:grid lg:grid-cols-4 lg:overflow-visible xl:grid-cols-5">
          {offerTabs[tab].items.map((p) => (
            <div
              key={p.name + p.now}
              className="h-full w-[64vw] max-w-[240px] lg:w-auto lg:max-w-none"
            >
              <ProductCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </Band>
  );
}
