import Image from "next/image";
import { discount, priceDrop, rupiah } from "@/lib/content";
import { Band, SectionHead } from "./section";

/*
 * IKEA's asymmetric price-cut grid: one large photo carrying a badge
 * that sits on the image, and two smaller ones stacked beside it.
 */
export function PriceDrop() {
  const off = discount(priceDrop.hero.was, priceDrop.hero.now);

  return (
    <Band>
      <SectionHead title={priceDrop.title} body={priceDrop.body} action="Belanja sekarang" />

      <div className="grid gap-3 lg:grid-cols-[1.6fr_1fr]">
        <a href="#" className="group relative block aspect-[16/10] overflow-hidden bg-shell lg:aspect-auto lg:min-h-[420px]">
          <Image
            src={priceDrop.hero.image}
            alt={priceDrop.hero.name}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute bottom-5 left-5 max-w-[300px] bg-white/95 p-5">
            <span className="inline-block bg-sale px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
              Turun harga {off}%
            </span>
            <h3 className="mt-2.5 text-[19px] font-extrabold leading-tight">{priceDrop.hero.name}</h3>
            <p className="mt-1 text-[13px] text-ink-2">{priceDrop.hero.desc}</p>
            <div className="mt-2.5 flex items-baseline gap-2">
              <span className="was-price text-[13px]">{rupiah(priceDrop.hero.was)}</span>
              <span className="text-[24px] font-extrabold leading-none text-sale">
                {rupiah(priceDrop.hero.now)}
              </span>
            </div>
          </div>
        </a>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {priceDrop.side.map((s) => (
            <a key={s.name} href="#" className="group relative block aspect-[4/3] overflow-hidden bg-shell lg:aspect-auto">
              <Image
                src={s.image}
                alt={s.name}
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 p-4">
                <span className="inline-block bg-sale px-1.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wide text-white">
                  Turun harga
                </span>
                <h3 className="mt-2 text-[15px] font-extrabold leading-tight">{s.name}</h3>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="was-price text-[12px]">{rupiah(s.was)}</span>
                  <span className="text-[18px] font-extrabold leading-none text-sale">
                    {rupiah(s.now)}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Band>
  );
}
