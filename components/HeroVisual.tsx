"use client";

import Image from "next/image";
import { useRef, useState, type MouseEvent } from "react";
import Reveal from "./Reveal";

const tagClass =
  "absolute z-[5] border border-ink bg-white px-3 py-[9px] font-mono text-[8px] tracking-[.08em] shadow-[4px_4px_0_#181818]";

export default function HeroVisual() {
  const photoRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  const move = (event: MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth <= 700) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    if (photoRef.current)
      photoRef.current.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    if (orbitRef.current)
      orbitRef.current.style.transform = `translate(${x * -16}px, ${y * -16}px)`;
  };

  const reset = () => {
    if (photoRef.current) photoRef.current.style.transform = "translate(0,0)";
    if (orbitRef.current) orbitRef.current.style.transform = "translate(0,0)";
  };

  return (
    <Reveal className="w-full">
      <div
        onMouseMove={move}
        onMouseLeave={reset}
        className="relative flex min-h-[500px] items-center justify-center lg:min-h-[610px]"
      >
        <div className={`${tagClass} -right-[3px] top-[70px] sm:-right-[10px]`}>
          PORTFOLIO
        </div>
        <div className={`${tagClass} -left-[3px] top-[48%] sm:-left-[10px]`}>
          EDUCATOR
        </div>
        <div className={`${tagClass} -right-[3px] bottom-[65px] sm:-right-[10px]`}>
          2026
        </div>

        <div className="absolute -right-[15px] bottom-0 z-[1] h-[65%] w-[55px] bg-brand sm:-right-[25px] sm:w-[85px]" />

        <div
          ref={photoRef}
          data-hover
          className="relative z-[3] h-[500px] w-[88vw] bg-ink p-[27px] transition-transform duration-[800ms] sm:h-[570px] sm:w-[min(100%,470px)] sm:p-[42px]"
        >
          <div className="group relative h-full w-full overflow-hidden">
            {failed ? (
              <div className="grid h-full w-full place-items-center bg-[#2a2a2a] text-[120px] font-extrabold text-brand">
                R
              </div>
            ) : (
              <Image
                src="/profil.jpg"
                alt="Rayyan"
                fill
                priority
                sizes="(max-width: 700px) 88vw, 470px"
                onError={() => setFailed(true)}
                className="object-cover saturate-[.7] transition-transform duration-1000 hover:scale-105"
              />
            )}
          </div>

          <div className="pointer-events-none absolute inset-[27px] bg-gradient-to-b from-transparent from-55% to-black/70 sm:inset-[42px]" />

          <div className="absolute bottom-[27px] left-[47px] z-[4] flex flex-col text-white sm:bottom-8 sm:left-[65px]">
            <span className="mb-[5px] font-mono text-[8px] tracking-[.12em] text-brand">
              PROFILE
            </span>
            <strong className="text-[19px]">Rayyan Ramadhan</strong>
          </div>
        </div>

        <div
          ref={orbitRef}
          className="absolute left-0 top-[45px] transition-transform duration-300"
        >
          <div className="h-[300px] w-[300px] animate-orbit rounded-full border border-ink/30 sm:h-[390px] sm:w-[390px]" />
        </div>
      </div>
    </Reveal>
  );
}
