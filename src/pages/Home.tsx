import ModuleLink from "../buttons/ModuleLink";

function Home() {
  return (
    <main
      aria-label="Hatfield seawater system map"
      className="min-h-screen w-full bg-white bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hatfield-map-draft1.svg')",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute left-[45%] top-[90%]">
        <ModuleLink moduleName="Yaquina Water Quality" moduleRoute="/WaterQuality" />
      </div>
    </main>
  );
}

export default Home;
