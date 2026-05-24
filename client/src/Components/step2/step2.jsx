import React, { useState } from "react";
import "./step2.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Step2() {
  const navigate = useNavigate();
  const location = useLocation();
  const freeShipDate = new Date();
  const earlyShipDate = new Date();
  freeShipDate.setDate(freeShipDate.getDate() + 10);
  earlyShipDate.setDate(earlyShipDate.getDate() + 3);

  const freeShip = freeShipDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  earlyShipDate.setDate(earlyShipDate.getDate() + 1);

  const earlyShip = earlyShipDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const address = location.state.address;

  const [selectedOption, setSelectedOption] = useState("free");
  const [scheduleDate, setScheduleDate] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    if (e.target.value !== "schedule") {
      setScheduleDate("");
    }
  };

  const handleDateChange = (e) => {
    setScheduleDate(e.target.value);
  };

  const handleNext = () => {
    const shipmentMethod = selectedOption;
    navigate("/step3", { state: { address, shipmentMethod } });
  };

  return (
    <div className="step2-container">
      <div className="step-header">
        <span className="step-inactive">Step 1</span>
        <span className="step-active">Step 2</span>
        <span className="step-inactive">Step 3</span>
      </div>
      <h2>Shipment Method</h2>
      <form className="shipment-options">
        <label
          className={`option ${selectedOption === "free" ? "active" : ""}`}
        >
          <input
            id="free-option"
            type="radio"
            name="shipment"
            value="Free shipping (7-10 days)"
            checked={selectedOption === "Free shipping (7-10 days)"}
            onChange={handleOptionChange}
          />
          <div className="option-content">
            <span>Free</span>
            <span>Regular shipment</span>
            <span className="option-date">{freeShip}</span>
          </div>
        </label>
        <label
          className={`option ${selectedOption === "express" ? "active" : ""}`}
        >
          <input
            id="express-option"
            type="radio"
            name="shipment"
            value="Express Shipping (1-3 days)"
            checked={selectedOption === "Express Shipping (1-3 days)"}
            onChange={handleOptionChange}
          />
          <div className="option-content">
            <span>$8.50</span>
            <span>Get your delivery as soon as possible</span>
            <span className="option-date">{earlyShip}</span>
          </div>
        </label>
        <label
          className={`option ${selectedOption === "schedule" ? "active" : ""}`}
        >
          <input
            id="schedule-option"
            type="radio"
            name="shipment"
            value="schedule"
            checked={selectedOption === "schedule"}
            onChange={handleOptionChange}
          />
          <div className="option-content">
            <span>Schedule</span>
            <span>Pick a date when you want to get your delivery</span>
            <input
              type="date"
              className="schedule-date"
              value={scheduleDate}
              onChange={handleDateChange}
              disabled={selectedOption !== "schedule"}
            />
          </div>
        </label>
      </form>
      <div className="navigation-buttons">
        <button onClick={() => navigate(-1)} className="back-btn">
          Back
        </button>
        <button onClick={handleNext} className="next-btn">
          Next
        </button>
      </div>
    </div>
  );
}
