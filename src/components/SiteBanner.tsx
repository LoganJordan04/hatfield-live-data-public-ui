export default function SiteBanner() {
  return (
    <header
      className="flex h-[100px] w-[100%] items-center gap-[22px] border-b [border-bottom-style:solid] border-[#e9e5e4] bg-white px-5 py-4"
      aria-label="Hatfield Marine Science Center"
      >
        <img
          className="relative h-[60px] w-[202px] object-cover"
          src="/logos/osu-hatfield-horizontal.webp"
          alt="Hatfield Marine Science Center Logo"
        />
      <div className="flex min-w-0 flex-1 grow flex-col items-start gap-[5px]">
        <h1 className="relative self-stretch mt-[-1px] [font-family:'Open_Sans-Bold',Helvetica] text-xl font-bold leading-[normal] tracking-[0] text-black">
          Hatfield Marine Science Center
        </h1>
        <p className="relative w-fit whitespace-nowrap [font-family:'Open_Sans-Regular',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-[#423e3c]">
          Live data exploration
        </p>
      </div>
    </header>
  );
}