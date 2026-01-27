import { useEffect, useState } from "react";
import "./ImageSlider.css";

import img1 from "../assets/blood1.jpg";
import img2 from "../assets/blood2.jpg";
import img3 from "../assets/blood3.jpg";
import img4 from "../assets/blood4.jpg";

const images = [img1, img2, img3, img4];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

 
  return (
  <div className="slider-container">
    <img src={images[index]} alt="Blood Camp" className="slider-image" />

    {/* Text Overlay */}
    <div className="slider-text">
      <h2>Community Blood Donation Camps</h2>
      <p>Join our regular community camps and make a difference</p>
    </div>
  </div>
);

}
