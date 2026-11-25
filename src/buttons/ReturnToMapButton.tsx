import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ReturnToMapButton() {
  return (
    <Link
      to="/"
      className="ui-button ui-button-secondary"
    >
      <ArrowLeft aria-hidden="true" className="text-body" size={20} />
      <span className="whitespace-nowrap">
        Return to map
      </span>
    </Link>
  );
}
