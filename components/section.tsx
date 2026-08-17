import type { ReactNode } from "react";

/** Section header used across the page: title left, optional action right. */
export function SectionHead({
  title,
  body,
  action,
  id,
}: {
  title: string;
  body?: string;
  action?: string;
  id?: string;
}) {
  return (
    <div id={id} className="flex flex-wrap items-end justify-between gap-4 pb-5">
      <div>
        <h2 className="text-[22px] font-extrabold sm:text-[26px]">{title}</h2>
        {body && <p className="mt-1 text-[14.5px] text-ink-2">{body}</p>}
      </div>
      {action && (
        <a
          href="#"
          className="inline-flex h-10 shrink-0 items-center border border-ink px-5 text-[13.5px] font-bold transition hover:bg-ink hover:text-white"
        >
          {action}
        </a>
      )}
    </div>
  );
}

export function Band({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`shell-pad mx-auto max-w-[1600px] py-10 sm:py-14 ${className}`}>
      {children}
    </section>
  );
}
