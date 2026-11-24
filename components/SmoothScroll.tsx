"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  type MouseEvent,
  type ReactNode,
} from "react";
import Lenis from "lenis";

/* Atur kekuatan efek velocity di sini */
const MAX_SKEW = 2; // derajat maksimum
const SENSITIVITY = 0.05; // makin besar makin miring

type SmoothScrollApi = {
  scrollTo: (target: string | number) => void;
  goTo: (event: MouseEvent, href: string) => void;
  stop: () => void;
  start: () => void;
};

const noop = () => {};

const SmoothScrollContext = createContext<SmoothScrollApi>({
  scrollTo: noop,
  goTo: noop,
  stop: noop,
  start: noop,
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    const sections = document.querySelectorAll<HTMLElement>("main > section");
    let skew = 0;
    let raf = 0;

    const loop = (time: number) => {
      lenis.raf(time);

      const target = Math.max(
        -MAX_SKEW,
        Math.min(MAX_SKEW, lenis.velocity * SENSITIVITY)
      );
      skew += (target - skew) * 0.1;
      if (Math.abs(skew) < 0.01 && Math.abs(target) < 0.01) skew = 0;

      sections.forEach((section) => {
        section.style.transform =
          skew === 0 ? "" : `skewY(${skew.toFixed(3)}deg)`;
      });

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
      sections.forEach((section) => {
        section.style.transform = "";
      });
    };
  }, []);

  const scrollTo = useCallback((target: string | number) => {
    const dest =
      typeof target === "string"
        ? document.querySelector<HTMLElement>(target)
        : target;
    if (dest === null) return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(dest);
    } else if (typeof dest === "number") {
      window.scrollTo({ top: dest, behavior: "smooth" });
    } else {
      dest.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const api = useMemo<SmoothScrollApi>(
    () => ({
      scrollTo,
      goTo: (event, href) => {
        event.preventDefault();
        scrollTo(href);
      },
      stop: () => lenisRef.current?.stop(),
      start: () => lenisRef.current?.start(),
    }),
    [scrollTo]
  );

  return (
    <SmoothScrollContext.Provider value={api}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
