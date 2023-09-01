import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllPets from "./Routes/AllPets";
import PetsDetails from "./Routes/PetsDetails";
import Homepage from "./components/HomePage";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pets/" element={<AllPets />} />
          <Route path="/pets/:id" element={<PetsDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
