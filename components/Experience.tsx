import { experiences, type ExperienceData } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

function ExperienceItem({ item, index }: { item: ExperienceData; index: number }) {
  return (
    <Reveal>
      <article
        data-hover
        className="group grid grid-cols-[35px_1fr] gap-3 border-b border-line px-[15px] py-10 transition-all duration-[350ms] hover:bg-brand sm:grid-cols-[70px_1fr_60px] sm:gap-[30px] sm:hover:px-7"
      >
        <div className="font-mono text-[10px]">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div>
          <div className="mb-[15px] flex flex-col gap-[7px] font-mono text-[8px] tracking-[.08em] sm:flex-row sm:justify-between sm:gap-5">
            <span>{item.year}</span>
            <span>{item.tag}</span>
          </div>

          <h3 className="text-[29px] font-bold leading-none tracking-[-.045em] sm:text-[clamp(25px,3vw,42px)]">
            {item.title}
          </h3>

          {item.text && (
            <p className="mt-[17px] max-w-[650px] text-sm leading-[1.7] text-[#595954]">
              {item.text}
            </p>
          )}

          {item.points && (
            <ul className="mt-5 max-w-[700px] list-disc pl-[18px]">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="mb-[6px] text-[13px] leading-[1.65] text-[#595954] sm:text-sm"
                >
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="hidden text-2xl transition-all duration-300 group-hover:translate-x-[7px] group-hover:-translate-y-[7px] sm:block">
          ↗
        </div>
      </article>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeader label="02 / WORK EXPERIENCE" />

      <div className="border-t border-line">
        {experiences.map((item, index) => (
          <ExperienceItem key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
