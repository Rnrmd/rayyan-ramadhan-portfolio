"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (progress >= 100) {
      const done = setTimeout(() => setHidden(true), 400);
      return () => clearTimeout(done);
    }

    const tick = setTimeout(() => {
      setProgress((p) => Math.min(100, p + Math.floor(Math.random() * 10) + 5));
    }, 100);
    return () => clearTimeout(tick);
  }, [progress]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-ink text-white transition-all duration-[800ms] ${
        hidden ? "invisible opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-[280px]">
        <div className="mb-[14px] font-mono text-xs">
          {String(progress).padStart(2, "0")}%
        </div>

        <div className="h-px w-full overflow-hidden bg-white/25">
          <span
            className="block h-full bg-brand transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-3 font-mono text-[9px] tracking-[.1em] text-white/55">
          RAYYAN / PORTFOLIO
        </div>
      </div>
    </div>
  );
}
