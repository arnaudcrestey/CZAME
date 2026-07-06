import { AlertTriangle, CheckCircle2, ShieldAlert } from "lucide-react";
import type { RiskLevel } from "@/lib/schema";

const badgeConfig = {
  green: {
    icon: CheckCircle2,
    className: "text-success",
  },
  amber: {
    icon: AlertTriangle,
    className: "text-warning",
  },
  red: {
    icon: ShieldAlert,
    className: "text-danger",
  },
};

export function RiskBadge({
  level,
  label,
}: {
  level: RiskLevel;
  label: string;
}) {
  const Icon = badgeConfig[level].icon;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/55 bg-white/38 px-4 py-2 text-sm font-semibold shadow-hairline backdrop-blur-xl ${badgeConfig[level].className}`}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      {label}
    </span>
  );
}