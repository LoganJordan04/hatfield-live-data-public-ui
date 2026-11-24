import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import ModulePage from "../components/ModulePage";

function renderModulePage() {
  return render(
    <MemoryRouter initialEntries={["/water-quality"]}>
      <Routes>
        <Route
          path="/water-quality"
          element={
            <ModulePage
              title="Water Quality"
              moduleDescription="Explore water quality readings."
              learningDescription="Consider how salinity affects estuary life."
              content={<p>Water quality chart</p>}
              dataPagePath="/water-quality"
              learningPagePath="/water-quality/learning"
            />
          }
        />
        <Route
          path="/water-quality/learning"
          element={<p>Water quality learning page</p>}
        />
      </Routes>
    </MemoryRouter>,
  );
}

describe("ModulePage", () => {
  it("renders the module descriptions and supplied content", () => {
    renderModulePage();

    expect(
      screen.getByRole("heading", { name: "Water Quality", level: 1 }),
    ).toBeInTheDocument();
    expect(screen.getByText("Explore water quality readings.")).toBeInTheDocument();
    expect(
      screen.getByText("Consider how salinity affects estuary life."),
    ).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Data content" })).toContainElement(
      screen.getByText("Water quality chart"),
    );
  });

  it("navigates to the learning page from the module header", () => {
    renderModulePage();

    fireEvent.click(screen.getByRole("button", { name: "Learn" }));

    expect(screen.getByText("Water quality learning page")).toBeInTheDocument();
  });
});
