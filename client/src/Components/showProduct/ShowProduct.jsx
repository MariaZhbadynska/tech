import React, { useEffect, useState } from "react";
import "./ShowProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, updateProductById } from "../../slices/productSlice";

export default function ShowProduct() {
  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();
  const [selectedStorage, setSelectedStorage] = useState("1TB");
const [selectedColor, setSelectedColor] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  const product = products.find((product) => product.id === id);

 useEffect(() => {
  if (product) {
    const firstColor = Object.keys(product.colors)[0];
    setSelectedColor(firstColor);
    setSelectedImage(product.colors[firstColor]?.images[0]);
  }
}, [product]);

  if (!product) {
    return <div className="loading">Loading product details...</div>;
  }

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setSelectedImage(product.colors[color]?.images[0]);
  };

  const handleAddToCart = (productId, inCart) => {
    dispatch(
      updateProductById({
        id: productId,
        updatedData: {
          inCart: !inCart,
          activeColor: selectedColor,
          activeStorage: selectedStorage,
        },
      })
    );
  };

  return (
    <div className="container">
      <div className="product-container">
        <div className="product-images">
          <div className="thumbnail-images">
            {product.colors[selectedColor]?.images.map((imageSrc, index) => (
              <img
                key={index}
                src={imageSrc}
                alt={`Thumbnail ${selectedColor} ${index + 1}`}
                onClick={() => setSelectedImage(imageSrc)}
                className={selectedImage === imageSrc ? "selected" : ""}
              />
            ))}
          </div>

          <img className="main-image" src={selectedImage} alt={product.name} />
        </div>

        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>
          <div className="product-price_show">
            <span className="current-price">${product.price}</span>
            <span className="old-price">${parseInt(product.price) + 100}</span>
          </div>

          <div className="color-selection">
            <h3>Select color:</h3>
            <div className="colors">
              {Object.keys(product.colors).map((color) => (
                <span
                  key={color}
                  className={`color ${color} ${
                    selectedColor === color ? "selected" : ""
                  }`}
                  onClick={() => handleColorChange(color)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Select color ${color}`}
                ></span>
              ))}
            </div>
          </div>

          <div className="storage-selection">
            <h3>Storage:</h3>
            <div className="storage-b">
              {product.storageOptions &&
                product.storageOptions.map((storage) => (
                  <button
                    key={storage}
                    className={`storage ${
                      selectedStorage === storage ? "selected" : ""
                    }`}
                    onClick={() => setSelectedStorage(storage)}
                  >
                    {storage}
                  </button>
                ))}
            </div>
          </div>

          <div className="specifications">
            {product.specifications &&
              Object.entries(product.specifications).map(
                ([key, value], index) => (
                  <div key={index}>
                    <span>{key}:</span>
                    <br />
                    <span>
                      {Array.isArray(value) ? value.join(", ") : value}
                    </span>
                  </div>
                )
              )}
          </div>

          <p className="product-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            expedita doloribus ducimus eius officia distinctio dolor illo,
            quibusdam ex cum quas velit dolorum natus exercitationem animi vitae
            culpa veritatis deserunt!
          </p>

          <div className="product-buttons">
            <button
              onClick={() => handleAddToCart(product.id, product.inCart)}
              className="cart-button"
            >
              {product.inCart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>

          <div className="product-info">
            <span>
              Free Delivery: <strong>1-2 day</strong>
            </span>
            <span>
              In Stock: <strong>Today</strong>
            </span>
            <span>
              Guaranteed: <strong>1 year</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
