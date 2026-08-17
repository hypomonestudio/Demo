import Image from "next/image";
import { editorial } from "@/lib/content";

/*
 * IKEA's two-column editorial block: photo on one side, a solid tinted
 * panel with headline and pill button on the other. It carries a
 * message without stating a fact about the company.
 */
export function Editorial() {
  return (
    <div className="shell-pad mx-auto max-w-[1600px] py-10 sm:py-14">
      <div className="grid overflow-hidden lg:grid-cols-[1.35fr_1fr]">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[440px]">
          <Image
            src={editorial.image}
            alt={editorial.title}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center bg-yellow-tint p-8 sm:p-12">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-brand">
            {editorial.eyebrow}
          </p>
          <h2 className="mt-3 text-[28px] font-extrabold leading-[1.1] sm:text-[34px]">
            {editorial.title}
          </h2>
          <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-ink-2">{editorial.body}</p>
          <a
            href="#showroom"
            className="mt-7 inline-flex h-12 w-fit items-center whitespace-nowrap bg-brand px-7 text-[14.5px] font-bold text-white transition hover:bg-brand-dark active:scale-[0.98]"
          >
            {editorial.cta}
          </a>
        </div>
      </div>
    </div>
  );
}
