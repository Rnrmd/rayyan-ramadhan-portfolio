"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/content";
import MobileMenu from "./MobileMenu";
import { useSmoothScroll } from "./SmoothScroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { goTo, stop, start } = useSmoothScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) stop();
    else start();
  }, [open, stop, start]);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-[100] flex w-full items-center justify-between border-b px-[6vw] py-4 backdrop-blur-[15px] transition-all duration-300 sm:px-[5vw] sm:py-5 ${
          scrolled ? "border-line bg-paper/90" : "border-transparent bg-paper/70"
        }`}
      >
        <a
          href="#home"
          onClick={(event) => goTo(event, "#home")}
          className="group flex items-center gap-[10px] text-xs font-bold tracking-[.1em]"
        >
          <span className="grid h-[34px] w-[34px] place-items-center rounded-full border border-ink transition-all duration-300 group-hover:rotate-12 group-hover:bg-brand">
            R
          </span>
          <span>Rayyan Ramadhan</span>
        </a>

        <nav className="hidden gap-[18px] sm:flex lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => goTo(event, link.href)}
              className="group relative text-[11px] font-semibold uppercase tracking-[.08em]"
            >
              {link.label}
              <span className="absolute -bottom-[6px] left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((value) => !value)}
          className="h-[38px] w-[38px] sm:hidden"
        >
          <span className="mx-auto my-[5px] block h-px w-[21px] bg-ink" />
          <span className="mx-auto my-[5px] block h-px w-[21px] bg-ink" />
        </button>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
