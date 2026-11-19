import { Link } from "react-router-dom";

type ModuleLinkProps = {
  moduleName: string;
  moduleRoute: string;
};

export default function ModuleLink({ moduleName, moduleRoute }: ModuleLinkProps) {
  return (
    <Link to={moduleRoute} className="rounded-lg bg-orange-600 px-4 py-2 text-white">
      {moduleName}
    </Link>
  );
}

