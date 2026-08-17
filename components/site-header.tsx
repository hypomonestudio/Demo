"use client";

import { useState } from "react";
import { mainNav, utilityLinks } from "@/lib/content";
import { BrandMark } from "./brand-mark";
import { Bag, Close, Heart, Menu, Search, User } from "./icons";

/*
 * Three tiers, the way both references stack them: a dark utility bar,
 * the main bar with the wordmark and a wide search field, then the
 * category nav. On mobile the third tier collapses into a drawer.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper">
      {/* tier 1 - utility */}
      <div className="hidden bg-brand-dark text-white lg:block">
        <div className="shell-pad mx-auto flex h-9 max-w-[1600px] items-center justify-between text-[12.5px]">
          <div className="flex items-center gap-1">
            <button className="px-2 py-1 font-semibold text-white/90">ID</button>
            <span className="text-white/30">|</span>
            <button className="px-2 py-1 text-white/60 hover:text-white">EN</button>
          </div>
          <nav className="flex items-center gap-6">
            {utilityLinks.map((l) => (
              <a key={l} href="#" className="text-white/80 hover:text-white hover:underline">
                {l}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* tier 2 - wordmark, search, account */}
      <div className="border-b border-line">
        <div className="shell-pad mx-auto flex h-16 max-w-[1600px] items-center gap-4 lg:h-20 lg:gap-8">
          <button
            onClick={() => setOpen(true)}
            className="-ml-2 p-2 lg:hidden"
            aria-label="Buka menu"
          >
            <Menu size={24} weight="bold" />
          </button>

          <a href="#" className="flex shrink-0 items-center">
            <BrandMark className="h-9 w-[128px] lg:h-11 lg:w-[160px]" />
          </a>

          <form
            className="ml-auto hidden h-11 flex-1 items-center gap-3 border border-line-2 bg-shell px-4 focus-within:border-ink lg:flex lg:max-w-2xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <Search size={20} weight="bold" className="shrink-0 text-muted" />
            <input
              type="search"
              placeholder="Cari sofa, meja makan, lemari…"
              className="h-full w-full bg-transparent text-[15px] outline-none placeholder:text-muted"
            />
          </form>

          <div className="ml-auto flex items-center gap-1 lg:ml-0 lg:gap-2">
            <button className="p-2 lg:hidden" aria-label="Cari">
              <Search size={22} weight="bold" />
            </button>
            <button className="hidden flex-col items-center px-3 py-1.5 text-[11px] hover:bg-shell lg:flex" aria-label="Akun">
              <User size={20} weight="bold" />
              <span className="mt-0.5">Akun</span>
            </button>
            <button className="hidden flex-col items-center px-3 py-1.5 text-[11px] hover:bg-shell lg:flex" aria-label="Favorit">
              <Heart size={20} weight="bold" />
              <span className="mt-0.5">Favorit</span>
            </button>
            <button className="relative flex flex-col items-center px-2 py-1.5 text-[11px] hover:bg-shell lg:px-3" aria-label="Keranjang">
              <Bag size={22} weight="bold" />
              <span className="mt-0.5 hidden lg:block">Keranjang</span>
              <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center bg-sale px-1 text-[10px] font-bold text-white lg:right-1">
                2
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* tier 3 - categories */}
      <div className="hidden border-b border-line lg:block">
        <nav className="shell-pad mx-auto flex max-w-[1600px] items-center gap-7 overflow-x-auto">
          {mainNav.map((item, i) => (
            <a
              key={item}
              href="#"
              className={`relative whitespace-nowrap py-3.5 text-[14.5px] font-semibold hover:text-brand ${
                i === 0 ? "text-brand" : "text-ink"
              }`}
            >
              {item}
              {i === 0 && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-brand" />}
            </a>
          ))}
          <a href="#" className="ml-auto whitespace-nowrap py-3.5 text-[14.5px] font-bold text-sale">
            Turun Harga
          </a>
        </nav>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-ink/50" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 left-0 flex w-[82%] max-w-sm flex-col bg-paper">
            <div className="flex h-16 items-center justify-between border-b border-line px-5">
              <BrandMark className="h-9 w-[128px]" />
              <button onClick={() => setOpen(false)} className="p-2" aria-label="Tutup menu">
                <Close size={24} weight="bold" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-2">
              {mainNav.map((item) => (
                <a key={item} href="#" className="block border-b border-line px-5 py-3.5 text-[15px] font-semibold">
                  {item}
                </a>
              ))}
              {utilityLinks.map((item) => (
                <a key={item} href="#" className="block px-5 py-3 text-[14px] text-ink-2">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
