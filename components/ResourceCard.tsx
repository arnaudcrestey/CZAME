import { ExternalLink, Phone } from "lucide-react";
import type { HelperResource } from "@/lib/schema";

export function ResourceCard({ resource }: { resource: HelperResource }) {
  return (
    <article className="glass-surface rounded-c p-5 transition duration-500 hover:-translate-y-0.5 hover:bg-white/38">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold tracking-[-0.02em] text-ink">
            {resource.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted">{resource.reason}</p>
        </div>

        {resource.isEmergency ? (
          <span className="rounded-full border border-white/50 bg-white/44 px-3 py-1 text-xs font-semibold text-danger shadow-hairline backdrop-blur-xl">
            Urgent
          </span>
        ) : null}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {resource.phone ? (
          <a
            className="button-glass focus-ring px-4 py-2 text-sm font-medium"
            href={`tel:${resource.phone.replaceAll(" ", "")}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {resource.phone}
          </a>
        ) : null}

        {resource.url ? (
          <a
            className="button-glass focus-ring px-4 py-2 text-sm font-medium"
            href={resource.url}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Ouvrir
          </a>
        ) : null}
      </div>
    </article>
  );
}