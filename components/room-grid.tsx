import Image from "next/image";
import { rooms } from "@/lib/content";
import { SectionHead } from "./section";

/** IKEA's "Ruangan" browse - the whole catalogue entered by room. */
export function RoomGrid() {
  return (
    <section className="bg-shell">
      <div className="shell-pad mx-auto max-w-[1600px] py-10 sm:py-14">
        <SectionHead
          id="koleksi"
          title="Belanja per ruangan"
          body="Mulai dari ruangan yang sedang Anda tata."
          action="Semua ruangan"
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {rooms.map((r) => (
            <a key={r.label} href="#" className="group relative block aspect-[4/3] overflow-hidden bg-line">
              <Image
                src={r.image}
                alt={r.label}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent p-4 pt-12">
                <h3 className="text-[16px] font-extrabold text-white sm:text-[18px]">{r.label}</h3>
                <p className="text-[12.5px] text-white/75">{r.count}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
