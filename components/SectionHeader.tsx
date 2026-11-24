import Reveal from "./Reveal";

export default function SectionHeader({ label }: { label: string }) {
  return (
    <Reveal className="mb-[75px] flex items-center gap-[18px]">
      <span className="label whitespace-nowrap text-[10px]">{label}</span>
      <div className="h-px flex-1 bg-line" />
    </Reveal>
  );
}
