"use client";

interface CategorySectionProps {
  categories: string[];
  active: string;
  onChange: (c: string) => void;
}

export function CategorySection({ categories, active, onChange }: CategorySectionProps) {
  return (
    <div className="px-4 md:px-6 mt-4 flex gap-2 overflow-x-auto pb-1 border-b border-black/5">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`shrink-0 px-4 py-2 text-sm font-semibold transition-colors border-b-2 -mb-px ${
            active === c
              ? "text-azul border-azul"
              : "text-black/45 border-transparent hover:text-ink"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
