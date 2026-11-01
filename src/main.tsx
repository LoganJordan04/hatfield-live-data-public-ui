import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Weather from "./pages/weather.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Weather />
  </StrictMode>,
);
