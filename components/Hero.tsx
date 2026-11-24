"use client";

import { profile } from "@/data/content";
import HeroVisual from "./HeroVisual";
import Reveal from "./Reveal";
import { useSmoothScroll } from "./SmoothScroll";

export default function Hero() {
  const { goTo } = useSmoothScroll();

  return (
    <section
      id="home"
      className="section flex min-h-screen flex-col justify-center pb-[70px] pt-[120px] sm:pt-[150px]"
    >
      <div className="grid items-center gap-[9vw] lg:grid-cols-[1fr_.9fr]">
        <Reveal className="max-w-[750px]">
          <div className="mb-[30px] flex items-center gap-[9px] font-mono text-[10px] tracking-[.1em]">
            <span className="h-[7px] w-[7px] rounded-full bg-brand" />
            RAYYAN / PORTFOLIO
          </div>

          <h1 className="max-w-[760px] text-[clamp(50px,15vw,78px)] font-extrabold leading-[.9] tracking-[-.065em] sm:text-[clamp(55px,7vw,105px)]">
            {profile.name}
            <span className="block text-brand">{profile.surname}</span>
          </h1>

          <p className="mt-7 font-mono text-[11px] tracking-[.06em]">
            {profile.role}
          </p>

          <p className="mt-5 max-w-[520px] text-sm leading-[1.8] text-[#5b5b56] sm:text-[15px]">
            {profile.description}
          </p>

          <div className="mt-[35px] flex flex-wrap items-center gap-[25px]">
            <a
              href="#experience"
              onClick={(event) => goTo(event, "#experience")}
              className="btn-arrow bg-ink text-white"
            >
              Lihat pengalaman
              <span className="text-base">↗</span>
            </a>

            <a
              href="#about"
              onClick={(event) => goTo(event, "#about")}
              className="border-b border-ink pb-1 text-[10px] uppercase tracking-[.08em]"
            >
              Tentang saya <span>↓</span>
            </a>
          </div>
        </Reveal>

        <HeroVisual />
      </div>

      <div className="mt-[55px] flex items-center gap-[14px] font-mono text-[8px] tracking-[.08em]">
        <span>SCROLL TO EXPLORE</span>
        <div className="h-px w-20 overflow-hidden bg-line">
          <span className="block h-px w-[30px] animate-scrollMove bg-ink" />
        </div>
      </div>
    </section>
  );
}
