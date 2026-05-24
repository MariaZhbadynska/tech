import React, { useEffect } from "react";
import "./ShoppingCart.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, updateProductById } from "../../slices/productSlice";
import { Link } from "react-router-dom";

export default function ShoppingCart() {
  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  const discountProducts = products.filter(
    (product) => product.inCart === true
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleRemoveFromCart = (itemId) => {
    dispatch(
      updateProductById({
        id: itemId,
        updatedData: { inCart: false },
      })
    );
  };

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

  const isCartEmpty = discountProducts.length === 0;

  return (
    <div className="shopping-cart-container">
      <div className="cart-items">
        <h2>Shopping Cart</h2>
        {discountProducts.length === 0 ? (
          <p>Your cart is empty. Please add items to the cart.</p>
        ) : (
          discountProducts.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.activeColor}</p>
                <p>{item.activeStorage}</p>
              </div>
              <div className="item-price">${item.price}</div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="remove-button"
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="promo-code">
          <input type="text" placeholder="Discount code / Promo code" />
          <input type="text" placeholder="Your bonus card number" />
          <button>Apply</button>
        </div>
        <div className="summary-details">
          <div>
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div>
            <span>Estimated Tax</span>
            <span>${tax}</span>
          </div>
          <div>
            <span>Estimated shipping & Handling</span>
            <span>${shipping}</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
        <Link
          to={`/step1`}
          className="checkout-button"
          style={{
            pointerEvents: isCartEmpty ? "none" : "auto",
            opacity: isCartEmpty ? 0.5 : 1,
          }}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
