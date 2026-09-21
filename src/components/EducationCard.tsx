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
    <article className="grid grid-cols-[10.75rem_1fr_auto] items-center gap-7 border-t border-[#343a45] py-6 max-md:grid-cols-1 max-md:gap-3 max-md:py-6">
      <span className="text-xs leading-[1.5] text-[#7f8793]">{dateRange}</span>
      <div>
        <h3 className="mb-2 text-lg tracking-[-.035em] text-[#e9ecf1]">
          {degree}
        </h3>
        <p className="text-sm text-[#9da4af]">{universityName}</p>
      </div>
      <span className="text-xl text-[#9dc5ff] max-md:hidden">↗</span>
    </article>
  );
}
