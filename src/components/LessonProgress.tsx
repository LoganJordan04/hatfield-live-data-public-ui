export default function LessonProgress() {

  const steps = [
    { completed: true, label: "Completed step 1" },
    { completed: false, label: "Incomplete step 2" },
    { completed: false, label: "Incomplete step 3" },
  ];

  return(
    <main
      aria-labelledby="lesson-progress-title"
      className="flex flex-col w-[420px] items-start gap-4 p-6 relative bg-white rounded-2x1 border border-solid border-[#e9e5e4]"
    >
      <h2
        id="lesson-progress-title"
        className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-black text-xl tracking-[0] leading-[29.0px] whitespace-nowrap"
      >
        Lesson progress
      </h2>
      <p className="relative w-fit [font-family:'Open_Sans-Regular',Helvetica] font-normal text-[#423e3c] text-base tracking-[0] leading-[23.2px] whitespace-nowrap">
        Step 1 of 3
      </p>
      <div
        aria-label="Lesson progress: step 1 of 3"
        aria-valuemax={3}
        aria-valuemin={0}
        aria-valuenow={1}
        role="progressbar"
        className="flex items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]"
      >
        {steps.map((step, index) => (
          <div
            key={`lesson-step-${index + 1}`}
            aria-hidden="true"
            className={`relative flex-1 grow h-1.5 rounded-[3px] ${
              step.completed ? "bg-[#d73f09]" : "bg-[#e9e5e4]"
            }`}
          />
        ))}
      </div>
    </main>
  );
}