import type { ReactNode } from "react";

type ModuleContentContainerProps = {
  DataTitle: string;
  content: ReactNode;
};
export default function ModuleContentContainer({ DataTitle, content }: ModuleContentContainerProps) {
  return (
    <main
      className="content-card flex min-h-128 w-full flex-col items-start gap-4 overflow-hidden"
      aria-labelledby="data-title"
    >
      <div className="relative flex w-full flex-[0_0_auto] items-center justify-around">
        <h2 id="data-title" className="w-full wrap-break-word text-3xl font-bold text-black">
          {DataTitle}
        </h2>
      </div>
      <div
        className="relative flex w-full flex-1 flex-col items-center justify-center gap-2 self-stretch overflow-hidden rounded-lg bg-bg"
        role="region"
        aria-label="Data content"
      >
        <div className="h-full min-h-0 w-full flex-1">{content}</div>
      </div>
    </main>
  );
}
