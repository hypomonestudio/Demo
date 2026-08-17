import Image from "next/image";
import { discount, rupiah, type Product } from "@/lib/content";
import { Star } from "./icons";

/*
 * Card anatomy is lifted from Informa: photo, optional variant note,
 * two-line name, struck price with a red percentage badge, then the
 * live price, then a rating with review count.
 *
 * Two things keep a row of these aligned rather than ragged:
 *
 *   h-full          the card fills the grid row, so every card in a
 *                   row ends on the same line
 *   reserved slots  the variant note, the name's second line and the
 *                   cut-price row hold their height even when the
 *                   product has no variants, a short name or no
 *                   discount. Without them the live price lands at a
 *                   different height on every card.
 *
 * NEEDS CLIENT DATA - the rating and review count are invented.
 */
export function ProductCard({ p }: { p: Product }) {
  const off = p.was ? discount(p.was, p.now) : null;

  return (
    <article className="group flex h-full w-full flex-col border border-line bg-paper transition hover:border-line-2 hover:shadow-[0_2px_18px_-8px_rgba(46,49,146,.32)]">
      <div className="relative aspect-square shrink-0 overflow-hidden bg-shell">
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="(max-width: 640px) 60vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        {p.tag && (
          <span className="absolute left-0 top-0 bg-brand px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            {p.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-3.5">
        <p className="h-4 text-[11.5px] leading-4 text-muted">{p.variants ?? " "}</p>

        <h3 className="mt-1 line-clamp-2 min-h-[2.75em] text-[14px] font-semibold leading-snug">
          {p.name}
        </h3>
        <p className="mt-0.5 line-clamp-1 text-[12.5px] leading-tight text-muted">{p.desc}</p>

        <div className="mt-2.5 flex h-5 items-center gap-2">
          {p.was && (
            <>
              <span className="was-price text-[12.5px]">{rupiah(p.was)}</span>
              <span className="bg-sale px-1.5 py-0.5 text-[11px] font-bold leading-none text-white">
                {off}%
              </span>
            </>
          )}
        </div>

        <p className="text-[17px] font-extrabold leading-tight">{rupiah(p.now)}</p>

        <div className="mt-auto flex items-center gap-1.5 pt-3 text-[12px] text-ink-2">
          <Star size={14} weight="fill" className="shrink-0 text-star" />
          <span className="font-semibold">{p.rating}</span>
          <span className="text-muted">| {p.reviews} ulasan</span>
        </div>
      </div>
    </article>
  );
}
