import { brand } from "@/lib/content";

/*
 * Placeholder slot for the client's logo.
 *
 * The real mark exists but the file was never supplied, and the colours
 * currently in the palette were read off a screenshot rather than the
 * artwork. Rendering a labelled empty slot keeps that honest and shows
 * the client exactly how much room the lockup has, the same way the
 * showroom address and opening hours stay bracketed.
 *
 * Drop the asset in and replace this component in one place.
 */
export function BrandMark({
  className = "h-10 w-[148px]",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "onBrand";
}) {
  const skin =
    tone === "onBrand"
      ? "border-white/45 bg-white/10 text-white/80"
      : "border-line-2 bg-shell text-muted";

  return (
    <span
      role="img"
      aria-label={brand.name}
      className={`inline-flex items-center justify-center border border-dashed text-[11px] font-bold uppercase tracking-[0.14em] ${skin} ${className}`}
    >
      [logo]
    </span>
  );
}
