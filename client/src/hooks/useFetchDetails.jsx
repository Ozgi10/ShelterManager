import { useState, useEffect } from "react";

export default function useFetchDetail(id) {
  const [petsDetail, setPetsDetail] = useState({});

  useEffect(() => {
    if (!id) {
      return;
    }
    fetch(`https://petsdata.onrender.com/pets/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Loading failed");
        }
        return response.json();
      })
      .then((data) => {
        setPetsDetail(data);
      })
      .catch((error) => console.error(`Fetching Pets failed`, error));
  }, [id]);

  return petsDetail;
}
