import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WaterQuality from "./pages/WaterQuality";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WaterQuality" element={<WaterQuality />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;