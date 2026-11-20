export default function SiteHeader() {
  return (
    <header
      className="flex h-20 w-full px-5 py-4 items-center gap-5 border-b border-border bg-white"
      aria-label="Hatfield Marine Science Center"
    >
      <img className="h-12" src="/logos/osu-hatfield-horizontal.webp" alt="Hatfield Marine Science Center Logo" />
      <div className="flex min-w-0 flex-col items-start">
        <h1 className="text-lg font-bold text-black">Hatfield Marine Science Center</h1>
        <p className="w-fit whitespace-nowrap text-base font-normal text-body">Live data exploration</p>
      </div>
    </header>
  );
}
