import { useId, useState } from "react";

export default function QuizField() {
    const options = ["Option A", "Option B", "Option C"];
    const questionId = useId();
    const [selectedOption, setSelectedOption] = useState("");

    return (
        <fieldset className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <legend className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-black text-xl tracking-[0] leading-[29.0px] whitespace-nowrap">
                Question
            </legend>
            <p
                id={`${questionId}-description`}
                className="relative w-fit [font-family:'Open_Sans-Regular',Helvetica] font-normal text-[#423e3c] text-base tracking-[0] leading-[23.2px] whitespace-nowrap"
            >
                Choose one
            </p>
            {options.map((option) => {
                const optionId = `${questionId}-${option
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`;
                return (
                    <label
                        key={option}
                        htmlFor={optionId}
                        className="flex h-12 items-center gap-3 px-4 py-0 relative self-stretch w-full rounded-lg overflow-hidden border border-solid border-[#e9e5e4] cursor-pointer"
                    >
                        <input
                            id={optionId}
                            name={questionId}
                            type="radio"
                            value={option}
                            checked={selectedOption === option}
                            onChange={(event) => setSelectedOption(event.target.value)}
                            aria-describedby={`${questionId}-description`}
                            className="relative w-5 h-5 rounded-[10px] border-[1.5px] border-solid border-{#423e3c] appearance-none checked:border-[#423e3c] checked:bg-[#423e3c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#423e3c]"
                        />
                        <span className="relative w-fit [font-family:'Open_Sans-Regular',Helvetica] font-normal text-[#423e3c] text-base tracking-[0] leading-[23.2px] whitespace-nowrap">
                            {option}
                        </span>
                    </label>
                );
            })}
        </fieldset>
    );
}