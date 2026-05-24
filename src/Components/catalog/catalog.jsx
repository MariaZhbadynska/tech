import React, { useEffect, useState } from "react";
import "./Catalog.css";
import { Link } from "react-router-dom";
import { fetchProducts, updateProductById } from "../../slices/productSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Catalog() {
  const handleAddToFav = (productId, isFav) => {
    dispatch(
      updateProductById({
        id: productId,
        updatedData: { isFav: !isFav },
      })
    );
  };

  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  const catalogProducts = products
    ? products.filter((product) => product.catalog === true)
    : [];

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const filteredProducts = catalogProducts.filter((product) => {
    const modeltype = product.modeltype?.toLowerCase();

    if (
      selectedBrand &&
      !product.brandtype.toLowerCase().includes(selectedBrand.toLowerCase())
    ) {
      return false;
    }
    if (selectedType === "Watch" && modeltype !== "watch") {
      return false;
    }
    if (selectedType === "Phone" && modeltype !== "phone") {
      return false;
    }
    if (selectedType === "Headphone" && modeltype !== "headphone") {
      return false;
    }
    return true;
  });

  return (
    <div className="container">
      <span className="homeCatalog">Home &gt; Catalog</span>
      <h3 className="SelectedProducts">
        Selected Products: {filteredProducts.length}
      </h3>
      <div className="catalog">
        <div className="filters">
          <h3 className="brandTitle">Brand</h3>
          <hr />
          <ul>
            {["Apple", "Samsung"].map((brand) => (
              <li key={brand}>
                <label>
                  <input
                    type="radio"
                    name="brand"
                    checked={selectedBrand === brand}
                    onChange={() => handleBrandChange(brand)}
                  />{" "}
                  {brand}
                </label>
              </li>
            ))}
          </ul>

          <h3 className="brandTitle">Type</h3>
          <hr />
          <ul>
            {["Watch", "Phone", "Headphone"].map((type) => (
              <li key={type}>
                <label>
                  <input
                    type="radio"
                    name="type"
                    checked={selectedType === type}
                    onChange={() => handleTypeChange(type)}
                  />{" "}
                  {type}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="product-list">
          {filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="product-card"
            >
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>${product.price}</p>
              <button
                onClick={() => handleAddToFav(product.id, product.isFav)}
              >
                {product.isFav ? "Remove from Favorites" : "Add to Favorites"}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
