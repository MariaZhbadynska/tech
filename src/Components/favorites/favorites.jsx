import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, updateProductById } from "../../slices/productSlice";
import { Link } from "react-router-dom";
import "./favorites.css";

const ProductCard = ({ product, onRemove }) => (
  <div className="product-card">
    <Link to={`/product/${product.id}`} className="product-link">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
    </Link>
    <div className="product-actions">
      <p className="product-price">${product.price}</p>
      <button className="remove-fav-btn" onClick={() => onRemove(product.id)}>
        Remove
      </button>
    </div>
  </div>
);

export default function Favorites() {
  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  const favoriteProducts = products.filter((product) => product.isFav === true);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleRemoveFromFavs = (itemId) => {
    dispatch(
      updateProductById({
        id: itemId,
        updatedData: { isFav: false },
      })
    );
  };

  return (
    <div className="page-container">
      <div className="favorites-container">
        <h2>Favorites</h2>
        {favoriteProducts.length > 0 ? (
          <div className="favorites-grid">
            {favoriteProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onRemove={handleRemoveFromFavs}
              />
            ))}
          </div>
        ) : (
          <p className="no-favorites">No favorite products found.</p>
        )}
      </div>
    </div>
  );
}
