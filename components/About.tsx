import { about } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeader label="01 / ABOUT" />

      <div className="grid gap-[45px] sm:grid-cols-2 sm:gap-[50px] lg:gap-[10vw]">
        <Reveal>
          <span className="label">PROFILE</span>
          <h2 className="display mt-5">
            Belajar, <span>Memimpin dan</span> Berkembang
          </h2>
        </Reveal>

        <Reveal className="max-w-[560px]">
          {about.map((text) => (
            <p key={text} className="mb-[22px] text-sm leading-[1.8] text-[#5a5a55] sm:text-[15px]">
              {text}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
