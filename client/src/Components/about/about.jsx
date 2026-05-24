import React from "react";
import { FaUsers, FaRocket, FaHandshake } from "react-icons/fa";
import "./about.css";

export default function About() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our journey, mission, and values.</p>
      </header>

      <section className="about-section">
        <div className="about-card">
          <FaUsers className="about-icon" />
          <h3>Who We Are</h3>
          <p>
            We are a dedicated team of professionals passionate about providing
            top-quality products and services.
          </p>
        </div>
        <div className="about-card">
          <FaRocket className="about-icon" />
          <h3>Our Mission</h3>
          <p>
            To innovate and deliver exceptional value to our customers through
            creativity and commitment.
          </p>
        </div>
        <div className="about-card">
          <FaHandshake className="about-icon" />
          <h3>Our Values</h3>
          <p>
            We prioritize integrity, innovation, and customer satisfaction in
            everything we do.
          </p>
        </div>
      </section>
    </div>
  );
}
