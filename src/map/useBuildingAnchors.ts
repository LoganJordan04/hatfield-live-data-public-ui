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

    const next: Record<string, AnchorPosition> = {};
    for (const anchor of anchors) {
      const building = svg.querySelector<SVGGElement>(`#${CSS.escape(anchor.buildingId)}`);
      if (!building) {
        if (import.meta.env.DEV) console.warn(`Map anchor building not found: ${anchor.buildingId}`);
        continue;
      }

      const bounds = building.getBBox();
      const transform = building.getCTM();
      if (!transform) continue;
      const corners = [
        new DOMPoint(bounds.x, bounds.y),
        new DOMPoint(bounds.x + bounds.width, bounds.y),
        new DOMPoint(bounds.x, bounds.y + bounds.height),
        new DOMPoint(bounds.x + bounds.width, bounds.y + bounds.height),
      ].map((point) => point.matrixTransform(transform));
      const left = Math.min(...corners.map((point) => point.x));
      const right = Math.max(...corners.map((point) => point.x));
      const bottom = Math.max(...corners.map((point) => point.y));

      next[anchor.moduleRoute] = {
        x: (left + right) / 2 + ((anchor.offsetX ?? 0) / viewBoxWidth) * mapWidth,
        y: bottom + ((anchor.offsetY ?? 0) / viewBoxHeight) * mapHeight,
      };
    }
    setPositions(next);
  }, [anchors, mapHeight, mapWidth, svgContainerRef, viewBoxHeight, viewBoxWidth]);

  return positions;
}
