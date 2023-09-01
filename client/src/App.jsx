import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import './App.css'
import AllPets from "./Routes/AllPets.jsx";
//import PetsDetails from "./components/PetsDetails.jsx";
import Homepage from "./components/HomePage.jsx";

/*export default function App() {
  const petsDetails = useFetch();

  return (
    <Router>
      <div>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/pets" element={<AllPets petsDetails={petsDetails} />} />
        </Routes>
      </div>
    </Router>
  );
}
*/

//import Homepage from "./components/HomePage";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pets/" element={<AllPets />} />
        </Routes>
      </div>
    </Router>
  );
}
