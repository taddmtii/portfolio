interface EducationCardProps {
  dateRange: string;
  universityName: string;
  degree: string;
}

export default function EducationCard({
  dateRange,
  universityName,
  degree,
}: EducationCardProps) {
  return (
    <article className="flex flex-col gap-3 border-t border-[#343a45] px-4 py-7 transition-colors duration-200 hover:border-blue-300/40 hover:bg-blue-300/5 motion-reduce:transition-none md:flex-row md:gap-7 md:px-6">
      <span className="shrink-0 text-xs text-[#7f8793] md:w-40">{dateRange}</span>
      <div>
        <h3 className="mb-2 text-lg text-[#e9ecf1]">
          {degree}
        </h3>
        <p className="text-sm text-[#9da4af]">{universityName}</p>
      </div>
      <span className="ml-auto hidden text-xl text-[#9dc5ff] md:block" aria-hidden="true">↗</span>
    </article>
  );
}
