export default function LessonProgress() {

  const steps = [
    { completed: true, label: "Completed step 1" },
    { completed: false, label: "Incomplete step 2" },
    { completed: false, label: "Incomplete step 3" },
  ];

  return(
    <main
      aria-labelledby="lesson-progress-title"
      className="content-card flex w-full flex-col items-start gap-4"
    >
      <h2
        id="lesson-progress-title"
        className="text-xl font-bold text-black"
      >
        Lesson progress
      </h2>
      <p className="text-base text-body">
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
              step.completed ? "bg-orange" : "bg-border"
            }`}
          />
        ))}
      </div>
    </main>
  );
}
