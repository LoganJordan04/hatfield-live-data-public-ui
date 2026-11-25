import { useEffect, useState } from "react";
import type { RefObject } from "react";
import type { ModuleAnchor } from "./mapAnchors";

export type AnchorPosition = { x: number; y: number };

// Finds configured SVG building groups and returns their button positions in map pixels
export function useBuildingAnchors(
  svgContainerRef: RefObject<HTMLDivElement | null>,
  anchors: ModuleAnchor[],
  mapWidth: number,
  mapHeight: number,
  viewBoxWidth: number,
  viewBoxHeight: number,
) {
  const [positions, setPositions] = useState<Record<string, AnchorPosition>>({});

  useEffect(() => {
    const svg = svgContainerRef.current?.querySelector("svg");
    if (!svg) return;

    const svgBounds = svg.getBoundingClientRect();
    const scaleX = svgBounds.width / mapWidth;
    const scaleY = svgBounds.height / mapHeight;
    if (!Number.isFinite(scaleX) || !Number.isFinite(scaleY) || scaleX === 0 || scaleY === 0) return;

    const next: Record<string, AnchorPosition> = {};
    for (const anchor of anchors) {
      const building = svg.querySelector<SVGGElement>(`#${CSS.escape(anchor.buildingId)}`);
      if (!building) {
        if (import.meta.env.DEV) console.warn(`Map anchor building not found: ${anchor.buildingId}`);
        continue;
      }

      // Use rendered bounds so nested SVG transforms match the visible building.
      const bounds = building.getBoundingClientRect();
      const x =
        (bounds.left + bounds.width / 2 - svgBounds.left) / scaleX + ((anchor.offsetX ?? 0) / viewBoxWidth) * mapWidth;
      const y = (bounds.bottom - svgBounds.top) / scaleY + ((anchor.offsetY ?? 0) / viewBoxHeight) * mapHeight;
      if (!Number.isFinite(x) || !Number.isFinite(y)) continue;

      next[anchor.moduleRoute] = { x, y };
    }
    setPositions(next);
  }, [anchors, mapHeight, mapWidth, svgContainerRef, viewBoxHeight, viewBoxWidth]);

  return positions;
}
