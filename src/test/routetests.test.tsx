import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import DockWebcam from "../pages/DockWebcam";
import Home from "../pages/Home";
import WaterQuality from "../pages/WaterQuality";
import Weather from "../pages/weather";


function renderRoute(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WaterQuality" element={<WaterQuality />} />
        <Route path="/DockWebcam" element={<DockWebcam />} />
        <Route path="/Weather" element={<Weather />} />
      </Routes>
    </MemoryRouter>,
  );
}

vi.mock("../util/fetchWeather", () => ({
  fetchLatestWeather: vi.fn().mockResolvedValue(null),
}));

describe("Route Tests", () => {
  it("renders Home page for / route", () => {
    renderRoute("/");
    expect(screen.getByText(/Yaquina Water Quality/i)).toBeInTheDocument();
    expect(screen.getByText(/Underwater Dock Webcam/i)).toBeInTheDocument();
    expect(screen.getByText(/Weather Data/i)).toBeInTheDocument();
  });

  it("renders Water Quality page for /WaterQuality route", () => {
    renderRoute("/WaterQuality");
    expect(screen.getByText(/Water Quality/i)).toBeInTheDocument();
  });

  it("renders Dock Webcam page for /DockWebcam route", () => {
    renderRoute("/DockWebcam");
    expect(screen.getByText(/Dock Webcam/i)).toBeInTheDocument();
  });

  it("renders Weather page for /Weather route", () => {
    renderRoute("/Weather");
    expect(
      screen.getByRole("heading", { name: "Weather Data" }),
  ).toBeInTheDocument();
  });
});