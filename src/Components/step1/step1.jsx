import React, { useState } from "react";
import "./step1.css";
import { useNavigate } from "react-router-dom";

export default function Step1() {
  const [formData, setFormData] = useState({
    street: "",
    houseNumber: "",
    city: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.street.trim()) newErrors.street = "Street name is required";
    if (!formData.houseNumber.trim())
      newErrors.houseNumber = "House number is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.postalCode.trim())
      newErrors.postalCode = "Postal code is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      navigate("/step2", { state: { address: formData } });
    }
  };

  return (
    <div className="step1-container">
      <div className="step-header">
        <span className="step-active">Step 1</span>
        <span className="step-inactive">Step 2</span>
        <span className="step-inactive">Step 3</span>
      </div>
      <form className="address-form">
        <div className="form-group">
          <label htmlFor="street">Street Name</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            placeholder="Enter street name"
          />
          {errors.street && <p className="error-text">{errors.street}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="houseNumber">House Number</label>
          <input
            type="text"
            id="houseNumber"
            name="houseNumber"
            value={formData.houseNumber}
            onChange={handleChange}
            placeholder="Enter house number"
          />
          {errors.houseNumber && (
            <p className="error-text">{errors.houseNumber}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter city"
          />
          {errors.city && <p className="error-text">{errors.city}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="Enter postal code"
          />
          {errors.postalCode && (
            <p className="error-text">{errors.postalCode}</p>
          )}
        </div>
        <button type="button" className="submit-btn" onClick={handleSubmit}>
          Save Address
        </button>
      </form>
    </div>
  );
}
