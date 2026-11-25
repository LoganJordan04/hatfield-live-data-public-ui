import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WaterQuality from "./pages/WaterQuality";
import DockWebcam from "./pages/DockWebcam";
import Weather from "./pages/weather";
import ModulePage from "./components/ModulePage";
import LearningPage from "./components/LearningPage";
import WaterQualityLearning from "./pages/WaterQualityLearning";
import DockWebcamLearning from "./pages/DockWebcamLearning";
import WeatherLearning from "./pages/WeatherLearning";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WaterQuality" element={<WaterQuality />} />
        <Route path="/DockWebcam" element={<DockWebcam />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/WaterQuality/learning" element={<WaterQualityLearning />} />
        <Route path="/Weather/learning" element={<WeatherLearning />} />
        <Route path="/DockWebcam/learning" element={<DockWebcamLearning />} />
        <Route
          path="/ModulePage"
          element={<ModulePage title="Module Page" moduleDescription="Description of my module." dataPagePath="/ModulePage" learningPagePath="/LearningPage" />}
        />
        <Route
          path="/LearningPage"
          element={<LearningPage title="Module Page" description="Description of my module." />}
        />
      </Routes>
    </BrowserRouter>
  );
}
