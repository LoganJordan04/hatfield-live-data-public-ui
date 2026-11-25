import QuizField from "./QuizField";

export default function LearningInfo() {
  return (
    <main className="flex flex-col w-full min-w-0 items-start gap-6 p-6 relative bg-white rounded-2xl border border-solid border-border">
      <header className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
        <h1 className="relative self-stretch font-bold text-black text-2xl">Step title</h1>
        <p className="relative self-stretch text-body text-base leading-6">
          Instructions or introduction or some sort of text goes here
        </p>
      </header>
      <figure
        className="flex flex-col h-50 items-center justify-center gap-2 relative self-stretch w-full bg-bg rounded-lg overflow-hidden border border-solid border-border"
        aria-label="Step illustration"
      >
        <div className="relative w-fit text-body text-base whitespace-nowrap">Image or something here</div>
      </figure>

      <QuizField />
    </main>
  );
}
