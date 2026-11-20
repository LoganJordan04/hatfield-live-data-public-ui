type ModuleContentContainerProps = {
  DataTitle: string;
};
export default function ModuleContentContainer({ DataTitle }: ModuleContentContainerProps) {
  return (
    <main
      className="flex min-h-[32rem] w-full flex-col items-start gap-4 overflow-hidden rounded-2xl bg-white p-6 lg:min-h-[calc(100vh-148px)]"
      aria-labelledby="data-title"
    >
      <div className="relative flex w-full flex-[0_0_auto] items-center justify-around">
        <h2
          id="data-title"
          className="relative mt-[-1.00px] w-fit whitespace-nowrap [font-family:'Open_Sans-Bold',Helvetica] text-[32px] font-bold leading-[45px] tracking-[0] text-black"
        >
          {DataTitle}
        </h2>
      </div>
      <div
        className="relative flex w-full flex-1 flex-col items-center justify-center gap-2 self-stretch overflow-hidden rounded-lg bg-[#f7f5f5]"
        role="region"
        aria-label="Data content"
      >
        <p>Graph or other content will go here</p>
      </div>
    </main>
  );
}