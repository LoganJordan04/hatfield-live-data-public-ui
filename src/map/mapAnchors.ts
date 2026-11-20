import { CloudSun, Droplets, Video } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ModuleAnchor = {
  moduleName: string;
  moduleRoute: string;
  buildingId: string;
  number: string;
  icon: LucideIcon;
  // Offset from the building edge, in SVG viewBox units
  offsetX?: number;
  offsetY?: number;
};

// Assign modules to the SVG building groups here
export const MODULE_ANCHORS: ModuleAnchor[] = [
  {
    moduleName: "Weather Data",
    moduleRoute: "/Weather",
    buildingId: "Weather-Station",
    number: "01",
    icon: CloudSun,
    offsetX: 6.5,
    offsetY: -45,
  },
  {
    moduleName: "Yaquina Water Quality",
    moduleRoute: "/WaterQuality",
    buildingId: "Seawater-Support-1",
    number: "02",
    icon: Droplets,
    offsetY: -45,
  },
  {
    moduleName: "Underwater Dock Webcam",
    moduleRoute: "/DockWebcam",
    buildingId: "Pumps-and-Webcam",
    number: "03",
    icon: Video,
    offsetX: 2,
    offsetY: -28,
  },
];

export const MAP_VIEWBOX = { width: 1920, height: 1080 };
export const MAP_ASPECT_RATIO = MAP_VIEWBOX.width / MAP_VIEWBOX.height;
