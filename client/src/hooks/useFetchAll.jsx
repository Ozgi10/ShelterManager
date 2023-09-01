import { useState, useEffect, useMemo } from "react";

const useFetchAll = () => {
  const [allPets, setAllPets] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/arturschaefer/abf8f94bcff14ace1b88c7977d651a74/raw/4c329530a24fe2e4b21029ed7a687a767aa9622a/breed_list.json"
    )
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
