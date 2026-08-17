import Image from "next/image";
import { showroom } from "@/lib/content";

/*
 * The one full-brand-blue field on the page. Address, hours and phone
 * stay as visible bracketed placeholders: inventing them would assert a
 * fact about the real company, and the client should be able to see
 * exactly what is still missing.
 */
export function Showroom() {
  return (
    <section id="showroom" className="bg-brand text-white">
      <div className="shell-pad mx-auto grid max-w-[1600px] items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-3/2 overflow-hidden">
          <Image
            src={showroom.image}
            alt="Showroom Diana Eva"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-yellow">
            {showroom.eyebrow}
          </p>
          <h2 className="mt-3 text-[28px] font-extrabold leading-[1.1] sm:text-[34px]">
            {showroom.title}
          </h2>
          <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-white/80">
            {showroom.body}
          </p>

          <dl className="mt-8 grid gap-px border border-white/20 bg-white/20 sm:grid-cols-3">
            {showroom.details.map((d) => (
              <div key={d.label} className="bg-brand p-4">
                <dt className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-yellow/80">
                  {d.label}
                </dt>
                <dd className="mt-1 text-[14px] text-white/90">{d.value}</dd>
              </div>
            ))}
          </dl>

          <a
            href="#"
            className="mt-8 inline-flex h-12 items-center whitespace-nowrap bg-yellow px-7 text-[14.5px] font-bold text-ink transition hover:bg-yellow-dark active:scale-[0.98]"
          >
            Buat janji temu
          </a>
        </div>
      </div>
    </section>
  );
}
