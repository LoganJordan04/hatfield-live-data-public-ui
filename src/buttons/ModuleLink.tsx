import { Link, } from "react-router-dom";

type ModuleLinkProps = {
  moduleName: string;
};

function ModuleLink({ moduleName}: ModuleLinkProps) {
  return (
      <Link to={`/${moduleName.toLowerCase()}`}>{moduleName}</Link>
  )
}

export default ModuleLink;