import { useState } from "react";
import { ChartNoAxesCombined } from "lucide-react";

export default function LiveDataButton() {
  const [selected, setSelected] = useState(true);

  return (
    <button
      type="button"
      aria-label="Live data"
      aria-pressed={selected}
      onClick={() => setSelected(true)}
      className="inline-flex items-center justify-center gap-2 px-6 py-4 relative bg-orange rounded-lg overflow-hidden"
    >
      <ChartNoAxesCombined aria-hidden="true" className="text-white" size={20} />
      <span className="relative w-fit -mt-0.75 font-bold text-white text-xl tracking-normal leading-7.25 whitespace-nowrap">
        Live data
      </span>
    </button>
  );
}
