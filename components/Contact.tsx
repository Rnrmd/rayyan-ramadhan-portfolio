import { profile } from "@/data/content";
import Reveal from "./Reveal";

const meta = "relative z-[2] flex font-mono text-[8px] tracking-[.1em]";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <Reveal className="relative flex min-h-[450px] flex-col justify-between overflow-hidden bg-ink p-7 text-white sm:min-h-[500px] sm:p-[45px]">
        <div className="pointer-events-none absolute -bottom-[150px] -right-[120px] h-[300px] w-[300px] rounded-full bg-brand" />

        <div className={`${meta} justify-between`}>
          <span>05 / CONTACT</span>
          <span>INDONESIA / 2026</span>
        </div>

        <div className="relative z-[2]">
          <span className="label">LET’S CONNECT</span>

          <h2 className="mt-5 text-[50px] font-bold leading-[.9] tracking-[-.07em] sm:text-[clamp(55px,7vw,95px)]">
            Let’s <span className="block text-brand">connect.</span>
          </h2>

          <p className="mt-[22px] max-w-[450px] text-sm leading-[1.7] text-white/60">
            Terbuka untuk terhubung, berdiskusi, dan mengenal kesempatan baru
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="btn-arrow mt-[30px] bg-white text-ink hover:bg-brand"
          >
            Contact me
            <span>↗</span>
          </a>
        </div>

        <div className={`${meta} flex-col gap-2 sm:flex-row sm:justify-between`}>
          <span>RAYYAN RAMADHAN</span>
          <span>PORTFOLIO © 2026</span>
        </div>
      </Reveal>
    </section>
  );
}
