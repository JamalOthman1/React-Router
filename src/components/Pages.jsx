import { Routes, Route } from "react-router-dom";
import Red from "./Red";
import Blue from "./Blue";
import Home from "./Home";
import RandomColor from "./RandomColor";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blue" element={<Blue />} />
      <Route path="/red" element={<Red />} />
      <Route path="/:color" element={<RandomColor />} />
    </Routes>
  )
}

export default Pages