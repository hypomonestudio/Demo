import Image from "next/image";
import { materials } from "@/lib/content";
import { Band, SectionHead } from "./section";

/**
 * Not in either reference - this is the section that lets the demo be
 * specific without making a commercial claim. Material, not price.
 */
export function Materials() {
  return (
    <Band>
      <SectionHead
        title="Material yang dipakai"
        body="Setiap produk mencantumkan material dan finishing-nya."
        action="Panduan material"
      />
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {materials.map((m) => (
          <a key={m.label} href="#" className="group block">
            <div className="relative aspect-[5/4] overflow-hidden bg-shell">
              <Image
                src={m.image}
                alt={m.label}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-3 text-[15.5px] font-bold group-hover:text-brand">{m.label}</h3>
            <p className="mt-0.5 text-[13px] leading-snug text-ink-2">{m.body}</p>
          </a>
        ))}
      </div>
    </Band>
  );
}
