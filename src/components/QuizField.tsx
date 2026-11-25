import { useId, useState } from "react";

export default function QuizField() {
  const options = ["Option A", "Option B", "Option C"];
  const questionId = useId();
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <fieldset className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
      <legend className="relative w-fit font-bold text-black text-xl whitespace-nowrap">Question</legend>
      <p id={`${questionId}-description`} className="relative mt-2 w-fit text-body text-base whitespace-nowrap">
        Choose one
      </p>
      {options.map((option) => {
        const optionId = `${questionId}-${option.toLowerCase().replace(/\s+/g, "-")}`;
        return (
          <label
            key={option}
            htmlFor={optionId}
            className="flex h-12 items-center gap-3 px-4 py-0 relative self-stretch w-full rounded-lg overflow-hidden border border-solid border-border cursor-pointer"
          >
            <input
              id={optionId}
              name={questionId}
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={(event) => setSelectedOption(event.target.value)}
              aria-describedby={`${questionId}-description`}
              className="relative w-5 h-5 rounded-full border border-solid border-body appearance-none checked:border-body checked:bg-body focus-visible:outline focus-visible:outline-offset-2"
            />
            <span className="relative w-fit text-body text-base whitespace-nowrap">{option}</span>
          </label>
        );
      })}
    </fieldset>
  );
}
