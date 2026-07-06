"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShieldAlert, X } from "lucide-react";

import { mainNavigation } from "@/lib/navigation";
import { BrandMark } from "./BrandMark";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

const headerNavigation = mainNavigation.filter(
  (item) => item.href !== "/urgence"
);

export function AppHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d8e7ea] bg-[#eef7f8] px-4 py-3 shadow-[0_14px_46px_rgba(5,24,30,0.08)] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Retour à l'accueil CZAME"
          className="focus-ring block w-[178px] shrink-0 rounded-c sm:w-[200px] lg:w-[220px]"
        >
          <BrandMark />
        </Link>

        <nav className="hidden flex-1 justify-center gap-1 lg:flex">
          {headerNavigation.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition duration-300 ${
                isActive(pathname, item.href)
                  ? "border-white bg-white text-ink shadow-hairline"
                  : "border-transparent text-muted hover:bg-white/70 hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-2 sm:flex">
          <Link
            href="/urgence"
            className="button-glass focus-ring px-4 py-2 text-sm font-medium text-danger"
          >
            <ShieldAlert className="h-4 w-4" />
            Urgence
          </Link>

          <Link
            href="/accueil"
            className="button-primary focus-ring px-5 py-2 text-sm font-medium"
          >
            Écrire
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-[#d2e1e4] bg-white text-[#0b3036] shadow-[0_10px_28px_rgba(5,24,30,0.10)] transition duration-300 hover:scale-[1.03] hover:bg-[#f8fcfc] lg:hidden"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 top-[76px] z-40 bg-[#071114]/30 transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <div
        className={`fixed inset-x-0 top-[76px] z-50 origin-top border-b border-[#d8e7ea] bg-[#f7fbfb] shadow-[0_28px_80px_rgba(5,24,30,0.18)] transition-all duration-300 ease-out lg:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#7a9196]">
            Navigation
          </p>

          <div className="grid gap-1.5">
            {mainNavigation.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`focus-ring rounded-2xl px-4 py-3.5 text-base font-medium transition duration-300 ${
                  isActive(pathname, item.href)
                    ? "bg-[#0b3036] text-white shadow-[0_14px_34px_rgba(5,24,30,0.18)]"
                    : "text-[#536b70] hover:bg-white hover:text-[#0b3036]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:hidden">
            <Link
              href="/urgence"
              onClick={() => setIsMenuOpen(false)}
              className="focus-ring flex items-center justify-center gap-2 rounded-full border border-[#d7e5e8] bg-white px-4 py-3 text-sm font-semibold text-danger"
            >
              <ShieldAlert className="h-4 w-4" />
              Urgence
            </Link>

            <Link
              href="/accueil"
              onClick={() => setIsMenuOpen(false)}
              className="button-primary focus-ring justify-center rounded-full px-4 py-3 text-sm font-semibold"
            >
              Écrire
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}