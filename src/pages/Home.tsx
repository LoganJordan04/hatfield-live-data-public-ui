import ModuleLink from "../buttons/ModuleLink";

function Home() {
   return (
    <main
      aria-label="Hatfield seawater system map"
      className="min-h-screen w-full bg-white bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hatfield-seawater-system-map.webp')",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute left-[30%] top-[40%]">
        <ModuleLink moduleName="Yaquina Water Quality" moduleRoute="/WaterQuality" />
      </div>
      <div className="absolute left-[45%] top-[95%]">
        <ModuleLink moduleName="Underwater Dock Webcam" moduleRoute="/DockWebcam" />
      </div>
    </main>
  );
}

export default Home;