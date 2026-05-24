import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./contacts.css";
export default function Contacts() {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Reach out to us through any of the
          channels below.
        </p>
      </header>

      <section className="contact-info">
        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Phone</h3>
          <p>+1 (234) 567-890</p>
        </div>
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>support@example.com</p>
        </div>
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Location</h3>
          <p>123 Main Street, Anytown, USA</p>
        </div>
      </section>

      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="form-input"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="form-input"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            required
            className="form-input"
          ></textarea>
          <button type="submit" className="form-button">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
