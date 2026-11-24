"use client";

import { useSmoothScroll } from "./SmoothScroll";

export default function Footer() {
  const { scrollTo } = useSmoothScroll();

  return (
    <footer className="mx-auto flex w-[min(1380px,90vw)] flex-col gap-3 border-t border-line py-7 font-mono text-[8px] tracking-[.08em] sm:flex-row sm:justify-between">
      <span>RAYYAN</span>
      <span>EDUCATOR · COORDINATOR · LEARNER</span>
      <button onClick={() => scrollTo(0)} className="cursor-pointer tracking-[.08em]">
        BACK TO TOP ↑
      </button>
    </footer>
  );
}
