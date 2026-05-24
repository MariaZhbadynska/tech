import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateProductById } from "../../slices/productSlice";
import "./Product.css";

export default function Product({ product }) {
  const [selectedColor, setSelectedColor] = useState("silver");
  const dispatch = useDispatch();
const handleAddToFav = (productId, isFav) => {
  console.log("CLICK");

  dispatch(
    updateProductById({
      id: productId,
      updatedData: { isFav: !isFav },
    })
  );
};

  const handleAddToCart = (productId, inCart) => {
  dispatch(
    updateProductById({
      id: productId,
      updatedData: { inCart: !inCart },
    })
  );
};

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>
      <div className="flex">
        <p className="product-price">${product.price}</p>
        <button
          className="fav-button"
          onClick={() => handleAddToFav(product.id, product.isFav)}
        >
          <img
            className="fav-icon"
            src={
              product.isFav ? "/icons/fullheart.png" : "/icons/likeBlack.svg"
            }
            alt="Favorite"
          />
        </button>
      </div>
      <h3 className="product-name">{product.name}</h3>

      <div className="product-colors">
        {Object.keys(product.colors).map((color) => (
          <span
            key={color}
            className={`product-color ${color} ${
              selectedColor === color ? "selected" : ""
            }`}
            onClick={() => handleColorSelect(color)}
            role="button"
            tabIndex={0}
            aria-label={`Select color ${color}`}
          ></span>
        ))}
      </div>
    </div>
  );
}
