import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type OpenLearningModuleButtonProps = {
  learningPagePath: string;
};

export default function OpenLearningModuleButton({ learningPagePath }: OpenLearningModuleButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      aria-label="Open Learning Module"
      onClick={() => navigate(learningPagePath)}
      className="ui-button ui-button-primary"
    >
      <ArrowRight aria-hidden="true" className="text-white" size={20} />
      <span className="whitespace-normal">Open Learning Module</span>
    </button>
  );
}
