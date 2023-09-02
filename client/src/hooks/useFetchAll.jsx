/*import { useState, useEffect, useMemo } from "react";

const useFetchAll = () => {
  const [allPets, setAllPets] = useState([]);

  useEffect(() => {
    fetch("https://petsdata.onrender.com/pets")
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
*/

// useFetchAll.jsx
import { useState, useEffect } from "react";

const useFetchAll = () => {
  const [allPets, setAllPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://petsdata.onrender.com/pets")
      .then((response) => {
        if (response.status === 200) {
          return response.json(); // Parse the response data
        } else {
          throw new Error("Network response failed");
        }
      })
      .then((data) => {
        setAllPets(data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Failed to fetch all Pets: ", error);
        setLoading(false); // Set loading to false on error
      });
  }, []);

  return { allPets, loading };
};

export default useFetchAll;
