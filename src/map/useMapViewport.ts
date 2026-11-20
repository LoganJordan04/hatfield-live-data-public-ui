import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent, RefObject } from "react";
import { MAP_ASPECT_RATIO } from "./mapAnchors";

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;

type MapView = { x: number; y: number; zoom: number };
type ViewportSize = { width: number; height: number };

// Map panning, zooming, resizing, and bounds
export function useMapViewport(viewportRef: RefObject<HTMLElement | null>) {
  const [viewportSize, setViewportSize] = useState<ViewportSize>(() => ({
    width: window.innerWidth,
    height: window.innerHeight - 80,
  }));
  const [view, setView] = useState<MapView>({ x: 0, y: 0, zoom: 1 });
  const dragStart = useRef<{ x: number; y: number; viewX: number; viewY: number } | null>(null);
  const mapWidth = Math.max(viewportSize.width, viewportSize.height * MAP_ASPECT_RATIO);
  const mapHeight = mapWidth / MAP_ASPECT_RATIO;

  const clampView = useCallback(
    (x: number, y: number, zoom: number): MapView => {
      const maxX = Math.max(0, (mapWidth * zoom - viewportSize.width) / 2);
      const maxY = Math.max(0, (mapHeight * zoom - viewportSize.height) / 2);
      return {
        x: Math.min(maxX, Math.max(-maxX, x)),
        y: Math.min(maxY, Math.max(-maxY, y)),
        zoom,
      };
    },
    [mapHeight, mapWidth, viewportSize.height, viewportSize.width],
  );

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const observer = new ResizeObserver(() => {
      setViewportSize({ width: viewport.clientWidth, height: viewport.clientHeight });
    });
    observer.observe(viewport);
    setViewportSize({ width: viewport.clientWidth, height: viewport.clientHeight });
    return () => observer.disconnect();
  }, [viewportRef]);

  useEffect(() => {
    setView((current) => clampView(current.x, current.y, current.zoom));
  }, [clampView]);

  const changeZoom = useCallback(
    (amount: number) => {
      setView((current) =>
        clampView(current.x, current.y, Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, current.zoom + amount))),
      );
    },
    [clampView],
  );

  const resetView = useCallback(() => setView({ x: 0, y: 0, zoom: 1 }), []);

  const onPointerDown = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (event.button !== 0 || (event.target instanceof Element && event.target.closest("a, button"))) return;
      dragStart.current = { x: event.clientX, y: event.clientY, viewX: view.x, viewY: view.y };
      event.currentTarget.setPointerCapture(event.pointerId);
    },
    [view.x, view.y],
  );

  const onPointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const drag = dragStart.current;
      if (!drag) return;
      setView((current) =>
        clampView(drag.viewX + event.clientX - drag.x, drag.viewY + event.clientY - drag.y, current.zoom),
      );
    },
    [clampView],
  );

  const onPointerUp = useCallback(() => {
    dragStart.current = null;
  }, []);

  const zoomWithWheel = useCallback((deltaY: number) => changeZoom(deltaY < 0 ? 0.1 : -0.1), [changeZoom]);

  return {
    mapWidth,
    mapHeight,
    view,
    changeZoom,
    resetView,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel: onPointerUp,
    zoomWithWheel,
  };
}
