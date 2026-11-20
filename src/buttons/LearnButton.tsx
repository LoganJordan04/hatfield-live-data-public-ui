import { BookOpen } from "lucide-react";

export default function LearnButton() {
  return (
    <button
      type="button"
      aria-label="Learn"
      className="inline-flex items-center justify-center gap-2 px-6 py-4 relative rounded-lg overflow-hidden border border-solid border-border focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-body"
    >
      <BookOpen aria-hidden="true" className="text-body" size={20} />
      <span className="relative w-fit -mt-px font-normal text-body text-xl tracking-normal leading-7.25 whitespace-nowrap">
        Learn
      </span>
    </button>
  );
}
