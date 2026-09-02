interface EducationCardProps {
  dateRange: string;
  universityName: string;
  degree: string;
}

export default function EducationCard({
  dateRange,
  universityName,
  degree
}: EducationCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-200 hover:border-white/20 md:p-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="text-lg font-semibold text-white/90 md:text-xl">
            {degree}
          </h3>
          <span className="hidden text-white/20 md:inline">·</span>
          <span className="text-[#60a5fa]">{universityName}</span>
        </div>

        <p className="text-sm text-white/40">{dateRange}</p>

      </div>
    </div>
  );
}
