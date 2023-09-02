import useFetchAll from "../hooks/useFetchAll";
import { Link } from "react-router-dom";
import "../App.css";

export default function AllPets() {
  const { allPets, loading } = useFetchAll();

  if (loading) {
    return <div>Loading...</div>;
  }

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
