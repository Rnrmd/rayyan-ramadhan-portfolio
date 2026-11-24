import { skills } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeader label="03 / SKILLS" />

      <Reveal className="mb-[60px]">
        <h2 className="display leading-none">
          Skills & <span>Strengths</span>
        </h2>
      </Reveal>

      <div className="grid border-l border-t border-line sm:grid-cols-3">
        {skills.map((skill, index) => (
          <Reveal key={skill.title}>
            <div
              data-hover
              className="h-full border-b border-r border-line p-[30px] transition-all duration-[350ms] hover:-translate-y-1 hover:bg-brand sm:min-h-[245px]"
            >
              <span className="font-mono text-[9px]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 text-[25px] font-bold tracking-[-.035em]">
                {skill.title}
              </h3>
              <p className="mt-3 text-[13px] leading-[1.7] text-[#60605b]">
                {skill.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
