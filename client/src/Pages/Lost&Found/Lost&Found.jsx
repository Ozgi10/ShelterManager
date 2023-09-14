import { useState } from "react";
import "./Lost&Found.css";
import Navbar from "../../Components/Navbar";

const LostAndFound = () => {
  const [ownerName, setOwnerName] = useState("");
  const [petName, setPetName] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGenderClick = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a loading delay
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);

      // Reset form fields
      setOwnerName("");
      setPetName("");
      setGender("");
      setDate("");
      setContactNumber("");
      setSelectedFile(null);
    }, 4000);
  };

  return (
    <div>
      <Navbar />
      <div className="lost-and-found-container">
        <h1>Lost & Found Pet Report</h1>
        <form onSubmit={handleSubmit} className="report-form">
          <label>
            Owner&apos;s Name (if know):
            <input
              type="text"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
            />
          </label>
          <label>
            Type and Pet&apos;s Name (if know):
            <input
              type="text"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              required
            />
          </label>
          <label>
            Gender:
            <div className="gender-buttons">
              <button
                type="button"
                className={`gender-button ${
                  gender === "Male" ? "selected-gender" : ""
                }`}
                onClick={() => handleGenderClick("Male")}
              >
                Male
              </button>
              <button
                type="button"
                className={`gender-button ${
                  gender === "Female" ? "selected-gender" : ""
                }`}
                onClick={() => handleGenderClick("Female")}
              >
                Female
              </button>
            </div>
          </label>
          <label>
            Date of Found/Lost:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <label>
            Contact Number:
            <input
              type="tel"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
          </label>
          <label>
            Upload a Photo:
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </label>
          <button
            type="submit"
            className="report-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Report"}
          </button>
          {isSubmitting && (
            <div className="confirmation-message">
              <p>Report Submitted Successfully!</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LostAndFound;
