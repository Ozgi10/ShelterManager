import { useState, useEffect, useMemo } from "react";

const useFetchAll = () => {
  const [allPets, setAllPets] = useState([]);

  useEffect(() => {
    fetch("https://gist.github.com/abf8f94bcff14ace1b88c7977d651a74.git")
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
