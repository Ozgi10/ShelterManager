import { useParams } from "react-router-dom";
import useFetchDetail from "../hooks/useFetchDetails";
import "../App.css";

export default function PetsDetails() {
  const { id } = useParams();
  const petsDetail = useFetchDetail(id);

  if (!petsDetail) {
    return <div>Loading...</div>;
  }

  const { name, breed_group, bred_for, life_span, temperament, image } =
    petsDetail;

  return (
    <div className="pets-details-container">
      <div className="left-side">
        <h2>{name}</h2>
        <p>Breed Group: {breed_group}</p>
        <p>Breed For: {bred_for}</p>
        <p>Life Span: {life_span}</p>
        <p>Temperament: {temperament} </p>
      </div>
      <div className="right-side">
        <img className="pet-image" src={image.url} alt={name} />
      </div>
    </div>
  );
}
