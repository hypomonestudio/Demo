import { brand } from "@/lib/content";

/*
 * The client's wordmark, rebuilt from the supplied artwork: a yellow
 * field carrying DIANA / EVA / FURNITURE, each line stepped right so
 * the initials D, E and F read as a diagonal, with the registered mark
 * riding above DIANA.
 *
 * Proportions are measured off the artwork rather than guessed:
 * the remainder of each word sits at roughly 0.6 of the initial's
 * height, and each line steps right by about 1.35 initial-widths,
 * which is what gives the lockup its 2:1 landscape shape.
 *
 * This is a reconstruction. The letterforms are Plus Jakarta Sans at
 * 800 rather than the grotesque the printed logo uses, so swap in the
 * real file when it arrives. Nothing else on the page needs to change:
 * every other mention of the name reads from lib/content.ts.
 *
 * The whole lockup scales from one number, --u, set by the caller.
 */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label={brand.name}
      className={`inline-flex flex-col justify-center bg-yellow leading-none text-brand ${className}`}
      style={{ padding: "calc(var(--u) * 0.34)" }}
    >
      {brand.wordmark.map(([initial, rest], i) => (
        <span
          key={initial}
          className="flex items-baseline whitespace-nowrap"
          style={{ paddingLeft: `calc(var(--u) * ${i * 1.62})` }}
        >
          <span
            className="font-extrabold"
            style={{ fontSize: "calc(var(--u) * 1.72)", letterSpacing: "-0.05em" }}
          >
            {initial}
          </span>
          <span
            className="font-extrabold"
            style={{ fontSize: "calc(var(--u) * 1.03)", letterSpacing: "-0.02em" }}
          >
            {rest}
          </span>
          {i === 0 && (
            <span
              className="self-start font-bold"
              style={{
                fontSize: "calc(var(--u) * 0.62)",
                lineHeight: 1,
                marginLeft: "calc(var(--u) * 0.04)",
              }}
            >
              ®
            </span>
          )}
        </span>
      ))}
    </span>
  );
}
