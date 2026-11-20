import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

type ModuleLinkProps = {
  moduleName: string;
  moduleRoute: string;
  number: string;
  icon: LucideIcon;
};

export default function ModuleLink({ moduleName, moduleRoute, number, icon: Icon }: ModuleLinkProps) {
  return (
    <Link to={moduleRoute} aria-label={`${number}: ${moduleName}`} className="flex w-fit flex-col items-center">
      <span className="inline-flex min-h-12 items-center gap-2 rounded-lg border-2 border-orange bg-white px-3 py-2 hover:bg-gray-100">
        <span className="text-base font-bold text-orange">{number}</span>
        <Icon aria-hidden="true" className="text-orange" size={20} />
      </span>
      <span className="h-4 w-0.75 bg-orange" aria-hidden="true" />
      <span className="-mt-px h-2.5 w-2.5 rounded-full bg-orange" aria-hidden="true" />
    </Link>
  );
}
