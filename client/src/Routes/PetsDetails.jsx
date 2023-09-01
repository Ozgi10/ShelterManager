import useFetchAll from "../hooks/useFetchAll";
import { useParams } from "react-router-dom";

export default function PetsDetail() {
  const { id } = useParams();
  const petsDetail = useFetchAll(id - 1);

  return (
    <div>
      <h2>Pet Detailed View</h2>
      <p>Name: {petsDetail[id - 1]?.name}</p>{" "}
      <p>Breed Group: {petsDetail[id - 1]?.breed_group?.join(",")}</p>{" "}
      <p>Life Span: {petsDetail[id - 1]?.life_span?.join(",")}</p>{" "}
      <p>Photo: {petsDetail[id - 1]?.url}</p>{" "}
    </div>
  );
}
