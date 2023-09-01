import { useState, useEffect, useMemo } from "react";

const useFetchAll = () => {
  const [allPets, setAllPets] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => {
        if (response.status === 200) {
          setAllPets(response.data);
        } else {
          throw new Error("Network response failed");
        }
      })
      .catch((error) => console.error("Failed to fetch all Pets: ", error));
  }, []);

  return useMemo(() => allPets, [allPets]);
};

export default useFetchAll;
