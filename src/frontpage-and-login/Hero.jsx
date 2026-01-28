import React from "react";
import App from "../App.jsx";
import "../App.css";
import { useNavigate } from "react-router-dom";
import ImageSlider from "./Imageslider";
import "./ImageSlider.css";
function Hero() {
  const navigate = useNavigate();

  const goTodonor = () => {
    navigate("/donor");
  };

  return (
    <div>
     

      {/* Hero Section */}
      <section className="hero" id = "home">
         <a href="home"></a>
        <p className="tag">Save Lives, Donate Blood</p>

        <h1>Every Drop Counts,</h1>
        <h1>Every Donor Matters</h1>

        <p>
          Join our comprehensive blood bank management system. Whether you're a
          donor, hospital, or administrator, we make blood donation and
          distribution seamless and efficient.
        </p>
      </section>

      {/* Hero Buttons */}
      <div className="hero-buttons">
        <button className="btn-primary" onClick={goTodonor}>
          Get Started →
        </button>
        <button className="btn-secondary">Learn More</button>
     
      </div>

      {/* Stats Section */}
      <section className="stats">
        <div>1,245+<br />Donors</div>
        <div>3,421<br />Lives Saved</div>
        <div>50+<br />Camps</div>
        <div>24/7<br />Service</div>
      </section>
    <section className="Imageslider">
       <h2 className="gallery-title">Blood Donation & Testing Lab</h2>

  <ImageSlider />
</section>
</div>

   
  );
}

export default Hero;
