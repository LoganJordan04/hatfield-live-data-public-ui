import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WaterQuality from "./pages/WaterQuality";
import DockWebcam from "./pages/DockWebcam";
import Weather from "./pages/weather";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WaterQuality" element={<WaterQuality />} />
        <Route path="/DockWebcam" element={<DockWebcam />} />
        <Route path="/Weather" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
