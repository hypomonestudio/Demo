import Image from "next/image";
import { categories } from "@/lib/content";

/*
 * The horizontal tile row both references put directly under the hero:
 * a photo on a grey square with the label beneath. It orients the
 * visitor in about three seconds.
 */
export function CategoryRail() {
  return (
    <div className="border-b border-line">
      <div className="shell-pad mx-auto max-w-[1600px] py-6">
        <div className="rail gap-3 sm:gap-4">
          {categories.map((c) => (
            <a
              key={c.label}
              href="#koleksi"
              className="group w-[124px] shrink-0 sm:w-[150px]"
            >
              <div className="relative aspect-square overflow-hidden bg-shell">
                <Image
                  src={c.image}
                  alt={c.label}
                  fill
                  sizes="150px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-2 text-center text-[13px] font-medium leading-snug group-hover:text-brand">
                {c.label}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
