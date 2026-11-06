import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Seawater from "./pages/Seawater";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seawater" element={<Seawater />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;