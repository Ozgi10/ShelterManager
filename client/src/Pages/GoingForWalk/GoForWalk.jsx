import { useState } from "react";
import "./GoForWalk.css";
import Navbar from "../../Components/Navbar";

const DogWalk = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [availability, setAvailability] = useState({});

  // Dummy data for availability
  const initialAvailability = {
    "2023-09-20": ["Dog 1", "Dog 2"],
    "2023-09-21": ["Dog 3"],
  };

  // Initialize availability
  useState(() => {
    setAvailability(initialAvailability);
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleReservation = () => {
    if (!selectedDate || !availability[selectedDate]) {
      alert("This date is not available for reservation.");
      return;
    }

    alert(
      `You have successfully reserved a walk with ${availability[
        selectedDate
      ].join(", ")} on ${selectedDate}.`
    );
    setSelectedDate("");
  };

  return (
    <div>
      <Navbar />
      <div className="reservation-container">
        <h2>Dog Walking Reservations</h2>
        <div className="reservation-form">
          <label>
            Select Date:
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </label>
          <button onClick={handleReservation}>Reserve</button>
        </div>
        <div className="availability-list">
          <h3>Availability:</h3>
          <ul>
            {Object.keys(availability).map((date) => (
              <li key={date}>
                {date}: {availability[date].join(", ")}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DogWalk;
