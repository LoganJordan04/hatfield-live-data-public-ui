import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";


export default function ReturnToDataButton() {
  return (
    <Link
      to="/ModulePage"
      className="ui-button ui-button-secondary"
    >
      <ArrowLeft aria-hidden="true" className="text-body" size={20} />
      <span className="whitespace-nowrap">
        Return to data
      </span>
    </Link>
  );
}
