
type ModuleTitleProps = {
  title: string;
  description: string;
};

export default function ModuleTitle({ title, description }: ModuleTitleProps) {
  return (
    <main
      aria-labelledby="location-title"
      className="flex flex-col items-start gap-2 relative"
    >
      <h1
        id="location-title"
        className="relative self-stretch [font-family:'Open_Sans-Bold',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-10"
      >
        {title}
      </h1>
      <p className="relative w-fit [font-family:'Open_Sans-Regular',Helvetica] font-normal text-[#423e3c] text-xl tracking-[0] leading-[29.0px] whitespace-nowrap">
        {description}
      </p>
      <p className="relative w-fit [font-family:'Open_Sans-Regular',Helvetica] font-normal text-[#423e3c] text-xl tracking-[0] leading-[29.0px] whitespace-nowrap">
        Choose what you want to explore
      </p>
    </main>
  );
};
