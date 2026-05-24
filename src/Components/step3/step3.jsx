import React, { useEffect, useState } from "react";
import "./Step3.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, updateProductById } from "../../slices/productSlice";

export default function Step3() {
  const location = useLocation();
  const navigate = useNavigate();

  const address = location.state.address;
  const shipmentMethod = location.state.shipmentMethod;

  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  const discountProducts = products.filter(
    (product) => product.inCart === true
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const subtotal = discountProducts.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  let tax = 0;
  let shipping = 0;

  if (subtotal > 0) {
    tax = 50;
    shipping = 29;
  }

  const total = subtotal + tax + shipping;

  const [cardDetails, setCardDetails] = useState({
    cardholderName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment submitted:", cardDetails);
  };

  return (
    <div className="step3-container">
      <div className="summary-section">
        <h2>Order Summary</h2>
        <div className="cart-items">
          {discountProducts.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.activeColor}</p>
                <p>{item.activeStorage}</p>
              </div>
              <div className="item-price">${item.price}</div>
            </div>
          ))}
        </div>

        <div className="order-details">
          <div className="address-section">
            <h5>Shipping Address</h5>
            <p>
              {address.street}, {address.houseNumber}, {address.city},{" "}
              {address.postalCode}
            </p>
            <h5>Shipment Method</h5>
            <p>{shipmentMethod || "No shipment method selected"}</p>
          </div>

          <div className="pricing">
            <div className="sub">
              <h5>Subtotal</h5>
              <span>${subtotal}</span>
            </div>
            <div className="tax">
              <h5>Estimated Tax</h5>
              <span>${tax}</span>
            </div>
            <div className="handling">
              <h5>Shipping & Handling</h5>
              <span>${shipping}</span>
            </div>
            <div className="total">
              <h5>Total</h5>
              <span>${total}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="payment-section">
        <h3>Payment Details</h3>
        <img className="card" src="/img/card.svg" alt="" />

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="cardholderName">Cardholder Name</label>
            <input
              type="text"
              id="cardholderName"
              name="cardholderName"
              value={cardDetails.cardholderName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="row">
            <div className="input-group">
              <label htmlFor="expDate">Exp. Date</label>
              <input
                type="text"
                id="expDate"
                name="expDate"
                value={cardDetails.expDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="billingAddress" />
            <label htmlFor="billingAddress">
              {" "}
              Use the same billing address
            </label>
          </div>

          <div className="buttons">
            <button
              onClick={() => navigate(-1)}
              type="button"
              className="back-button"
            >
              Back
            </button>
            <button type="submit" className="pay-button">
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
