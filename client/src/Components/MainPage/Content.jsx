import { useState, useEffect } from "react";
import "./MainPage.css";

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Slide 1",
      text: "This is slide 1 content.",
      image: "/src/Components/MainPage/img/photos/photo1.jpg",
    },
    {
      title: "Slide 2",
      text: "This is slide 2 content.",
      image: "/src/Components/MainPage/img/photos/photo2.jpg",
    },
    {
      title: "Slide 3",
      text: "This is slide 3 content.",
      image: "/src/Components/MainPage/img/photos/photo3.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <div className="slideshow">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <h2>{slide.title}</h2>

          <img src={slide.image} alt={`Slide ${index + 1}`} />

          <p>{slide.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
