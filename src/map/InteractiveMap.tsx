import { useEffect, useRef } from "react";
import { Maximize, Minus, Plus } from "lucide-react";
import mapSvg from "./assets/hatfield-map.svg?raw";
import ModuleLink from "../buttons/ModuleLink";
import { MAP_VIEWBOX, MAP_ASPECT_RATIO, MODULE_ANCHORS } from "./mapAnchors";
import { useBuildingAnchors } from "./useBuildingAnchors";
import { useMapViewport } from "./useMapViewport";

// Renders the map SVG, configured module links, and map nav controls
function InteractiveMap() {
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const mapSurfaceRef = useRef<HTMLDivElement>(null);
  const map = useMapViewport();
  const anchors = useBuildingAnchors(
    svgContainerRef,
    MODULE_ANCHORS,
    map.mapWidth,
    map.mapHeight,
    MAP_VIEWBOX.width,
    MAP_VIEWBOX.height,
  );

  useEffect(() => {
    const mapSurface = mapSurfaceRef.current;
    if (!mapSurface) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      map.zoomWithWheel(event.deltaY);
    };
    mapSurface.addEventListener("wheel", handleWheel, { passive: false });
    return () => mapSurface.removeEventListener("wheel", handleWheel);
  }, [map.zoomWithWheel]);

  return (
    <main aria-label="Hatfield seawater system map" className="relative h-screen w-full overflow-hidden bg-white">
      <div
        ref={mapSurfaceRef}
        className="absolute left-1/2 top-1/2 cursor-grab touch-none active:cursor-grabbing"
        style={{
          width: map.mapWidth,
          height: map.mapHeight,
          transform: `translate(${map.view.x}px, ${map.view.y}px) scale(${map.view.zoom})`,
          transformOrigin: "center",
          marginLeft: -map.mapWidth / 2,
          marginTop: -map.mapHeight / 2,
        }}
        onPointerDown={map.onPointerDown}
        onPointerMove={map.onPointerMove}
        onPointerUp={map.onPointerUp}
        onPointerCancel={map.onPointerCancel}
        role="application"
        aria-label="Drag to move the map. Use the map controls to zoom or reset."
      >
        <div
          ref={svgContainerRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          dangerouslySetInnerHTML={{ __html: mapSvg }}
        />
        {MODULE_ANCHORS.map((anchor) => {
          const position = anchors[anchor.moduleRoute];
          if (!position) return null;
          return (
            <div
              key={anchor.moduleRoute}
              className="absolute z-[1] -translate-x-1/2 -translate-y-full"
              style={{ left: position.x, top: position.y }}
            >
              <ModuleLink moduleName={anchor.moduleName} moduleRoute={anchor.moduleRoute} />
            </div>
          );
        })}
      </div>

      <div aria-label="Map controls" className="absolute left-5 bottom-5 z-10 flex flex-col gap-2">
        <button
          type="button"
          onClick={() => map.changeZoom(0.2)}
          aria-label="Zoom in"
          className="flex h-12 w-12 items-center justify-center bg-bg rounded-lg border border-border hover:bg-gray-200"
        >
          <Plus aria-hidden="true" className="text-body" size={20} />
        </button>
        <button
          type="button"
          onClick={() => map.changeZoom(-0.2)}
          aria-label="Zoom out"
          className="flex h-12 w-12 items-center justify-center bg-bg rounded-lg border border-border hover:bg-gray-200"
        >
          <Minus aria-hidden="true" className="text-body" size={20} />
        </button>
        <button
          type="button"
          onClick={map.resetView}
          aria-label="Reset map"
          className="flex h-12 w-12 items-center justify-center bg-bg rounded-lg border border-border hover:bg-gray-200"
        >
          <Maximize aria-hidden="true" className="text-body" size={20} />
        </button>
        <span className="sr-only" aria-live="polite">
          Zoom {Math.round(map.view.zoom * 100)}%
        </span>
      </div>
    </main>
  );
}

export default InteractiveMap;
