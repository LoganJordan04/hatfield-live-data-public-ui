import { Link, } from "react-router-dom";

type ModuleLinkProps = {
  moduleName: string;
  moduleRoute: string;
};

function ModuleLink({ moduleName, moduleRoute }: ModuleLinkProps) {
  return (
      <Link to={moduleRoute}>{moduleName}</Link>
  )
}

export default ModuleLink;