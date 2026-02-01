import React from "react";
import { Carousel } from "react-bootstrap";
// Images
import img1 from "../../assets/blood1.jpg";
import img2 from "../../assets/blood2.jpg";
import img3 from "../../assets/blood3.jpg";
import img4 from "../../assets/blood4.jpg";

const images = [img1, img2, img3, img4];

export default function ImageSlider() {
  return (
    <Carousel className="shadow-sm rounded overflow-hidden">
      {images.map((img, idx) => (
        <Carousel.Item key={idx} interval={3000}>
          <img
            className="d-block w-100"
            src={img}
            alt={`Slide ${idx + 1}`}
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3 mb-4">
            <h3 className="fw-bold">Community Blood Donation Camps</h3>
            <p>Join our regular community camps and make a difference</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
