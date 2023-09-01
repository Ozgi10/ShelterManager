import useFetchAll from "../hooks/useFetchAll";
import { Link } from "react-router-dom";

export default function AllPets() {
  const allPets = useFetchAll();

  return (
    <div>
      <h2>All Pets</h2>
      <ul>
        {allPets.map((pets) => (
          <li key={pets.id}>
            <Link to={`/pets/${pets.id}`}>{pets.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
