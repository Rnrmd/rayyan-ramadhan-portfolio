"use client";

import { navLinks } from "@/data/content";
import { useSmoothScroll } from "./SmoothScroll";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { goTo } = useSmoothScroll();

  return (
    <div
      className={`fixed inset-0 z-[90] bg-ink text-white transition-transform duration-[650ms] ease-[cubic-bezier(.77,0,.18,1)] sm:hidden ${
        open ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex h-full flex-col justify-center p-[30px]">
        {navLinks.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(event) => {
              onClose();
              goTo(event, link.href);
            }}
            className="flex items-center gap-[25px] border-b border-white/15 py-[17px] text-[34px] font-bold"
          >
            <span className="font-mono text-[10px] text-brand">
              {String(index + 1).padStart(2, "0")}
            </span>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
