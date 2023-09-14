import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllPets from "./Routes/AllPets";
import PetsDetails from "./Routes/PetsDetails";
import Homepage from "./Pages/HomePage/HomePage";
import Donation from "./Pages/Donation/Donation";
import LostAndFound from "./Pages/Lost&Found/Lost&Found";
import Adopt from "./Pages/Adoption/Adoption";
import DogWalk from "./Pages/GoingForWalk/GoForWalk";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pets/" element={<AllPets />} />
          <Route path="/pets/:id" element={<PetsDetails />} />
          <Route path="/donate" element={<Donation />} />
          <Route path="/lostpage" element={<LostAndFound />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/goforwalk" element={<DogWalk />} />
        </Routes>
      </div>
    </Router>
  );
}
