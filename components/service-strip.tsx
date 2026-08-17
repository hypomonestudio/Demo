import { services } from "@/lib/content";
import { serviceIcons } from "./icons";

/*
 * Informa runs a promise strip near the top. Kept here, but the three
 * claims that depend on real operations render as visible bracketed
 * placeholders instead of invented specifics.
 */
export function ServiceStrip() {
  return (
    <div className="bg-shell">
      <div className="shell-pad mx-auto grid max-w-[1600px] grid-cols-2 gap-x-6 gap-y-5 py-6 lg:grid-cols-4">
        {services.map((s) => {
          const Icon = serviceIcons[s.icon];
          return (
            <div key={s.title} className="flex items-start gap-3">
              <Icon size={24} weight="bold" className="shrink-0 text-brand" />
              <div>
                <p className="text-[13.5px] font-bold leading-tight">{s.title}</p>
                <p className="mt-0.5 text-[12.5px] leading-snug text-muted">{s.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
