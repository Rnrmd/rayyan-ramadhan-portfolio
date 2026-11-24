"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (dot.current) {
        dot.current.style.left = `${mouseX}px`;
        dot.current.style.top = `${mouseY}px`;
        dot.current.style.opacity = "1";
      }

      if (ring.current) {
        const hover = (event.target as HTMLElement).closest(
          "a, button, [data-hover]"
        );
        ring.current.dataset.hover = hover ? "1" : "0";
        ring.current.style.opacity = "1";
      }
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (ring.current) {
        ring.current.style.left = `${ringX}px`;
        ring.current.style.top = `${ringY}px`;
      }
      raf = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink opacity-0 sm:block"
      />
      <div
        ref={ring}
        data-hover="0"
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/40 opacity-0 transition-[width,height,background-color] duration-[250ms] data-[hover=1]:h-[54px] data-[hover=1]:w-[54px] data-[hover=1]:bg-brand/10 sm:block"
      />
    </>
  );
}
