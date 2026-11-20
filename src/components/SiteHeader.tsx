import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header
      className="flex h-20 w-full px-5 py-4 items-center gap-5 border-b border-border bg-white"
      aria-label="Hatfield Marine Science Center"
    >
      <Link
        to="/"
        aria-label="Hatfield Marine Science Center home"
        className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-body"
      >
        <img className="h-12" src="/logos/osu-hatfield-horizontal.webp" alt="" />
      </Link>
      <div className="flex min-w-0 flex-col items-start">
        <h1 className="text-lg font-bold text-black">Hatfield Marine Science Center</h1>
        <p className="w-fit whitespace-nowrap text-base font-normal text-body">Live data exploration</p>
      </div>
    </header>
  );
}
