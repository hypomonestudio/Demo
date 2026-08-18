import { brand, footerColumns } from "@/lib/content";
import { BrandMark } from "./brand-mark";
import { Newsletter } from "./newsletter";

/*
 * Both references end with the same furniture: link columns, a
 * newsletter, payment and shipping logos, then legal. The payment
 * marks here are typographic placeholders rather than real logos -
 * the demo should not imply partnerships that are not confirmed.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="shell-pad mx-auto max-w-[1600px] py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <BrandMark className="[--u:13px]" />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-ink-2">{brand.tagline}</p>

            <Newsletter />
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[13px] font-bold uppercase tracking-[0.1em]">{col.title}</h3>
                <ul className="mt-3 space-y-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-[14px] text-ink-2 hover:text-brand hover:underline">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line pt-6">
          <div>
            <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-muted">
              Metode pembayaran
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Transfer Bank", "Kartu Kredit", "Cicilan 0%", "E-Wallet"].map((m) => (
                <span key={m} className="border border-line px-2.5 py-1 text-[11.5px] text-ink-2">
                  {m}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-muted">Pengiriman</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["[mitra logistik]", "Armada sendiri"].map((m) => (
                <span key={m} className="border border-line px-2.5 py-1 text-[11.5px] text-ink-2">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line bg-shell">
        <div className="shell-pad mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 py-4 text-[12px] text-muted">
          <p>
            Demo pitch oleh Hypomone Studio. Seluruh produk, harga, dan ulasan di halaman ini adalah
            data contoh.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-ink">Kebijakan Privasi</a>
            <a href="#" className="hover:text-ink">Syarat &amp; Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
