export type ModuleAnchor = {
  moduleName: string;
  moduleRoute: string;
  buildingId: string;
  // Offset from the building edge, in SVG viewBox units
  offsetX?: number;
  offsetY?: number;
};

// Assign modules to the SVG building groups here
export const MODULE_ANCHORS: ModuleAnchor[] = [
  {
    moduleName: "Yaquina Water Quality",
    moduleRoute: "/WaterQuality",
    buildingId: "Seawater-Support-1",
    offsetY: -50,
  },
  {
    moduleName: "Underwater Dock Webcam",
    moduleRoute: "/DockWebcam",
    buildingId: "Pumps-and-Webcam",
    offsetY: -50,
  },
  {
    moduleName: "Weather Data",
    moduleRoute: "/Weather",
    buildingId: "Weather-Station",
    offsetY: -50,
  },
];

export const MAP_VIEWBOX = { width: 1920, height: 1080 };
export const MAP_ASPECT_RATIO = MAP_VIEWBOX.width / MAP_VIEWBOX.height;
