import { timeline } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Journey() {
  return (
    <section id="journey" className="section">
      <SectionHeader label="04 / JOURNEY" />

      <div className="grid gap-[45px] sm:grid-cols-[.85fr_1.15fr] sm:gap-[50px] lg:gap-[10vw]">
        <Reveal>
          <span className="label">MY JOURNEY</span>
          <h2 className="display mt-5">
            From <span>pesantren</span> to the next chapter
          </h2>
          <p className="mt-[25px] max-w-[420px] text-sm leading-[1.8] text-muted">
            Pengalaman organisasi, pendidikan, dan koordinasi menjadi bagian dari
            proses untuk terus belajar dan berkembang
          </p>
        </Reveal>

        <div className="border-t border-line">
          {timeline.map((item) => (
            <Reveal key={item.title}>
              <div
                className={`grid grid-cols-[60px_1fr] gap-[15px] py-7 sm:grid-cols-[90px_1fr] sm:gap-[25px] ${
                  item.future ? "" : "border-b border-line"
                }`}
              >
                <div
                  className={`whitespace-pre-line font-mono text-[10px] leading-[1.6] ${
                    item.future ? "text-brand" : ""
                  }`}
                >
                  {item.year}
                </div>
                <div>
                  <h3 className="mb-2 text-[19px] font-bold">{item.title}</h3>
                  <p className="text-[13px] leading-[1.7] text-muted">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
