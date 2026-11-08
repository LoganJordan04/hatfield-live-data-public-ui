import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WaterQuality from "./pages/WaterQuality";
import DockWebcam from "./pages/DockWebcam";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WaterQuality" element={<WaterQuality />} />
        <Route path="/DockWebcam" element={<DockWebcam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;