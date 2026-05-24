import React, { useState, useEffect } from "react";
import "./ProductTabs.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../slices/productSlice";
import Product from "../Product/Product";
import { Link } from "react-router-dom";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("Phones");
  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  const tabs = products
    ? [...new Set(products.map((product) => product.tab))]
    : [];

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="product-tabs">
        <div className="container">
          <div className="tabs-header">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="tab-content">
            <div className="product-grid-tabs">
              {products
                .filter((product) => product.tab === activeTab)
                .map((product) => (
                  <Product key={product.id} product={product} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="products-catalog">
        <div className="product-catalog-card popular-p">
          <img
            src="./img/Group 1.png"
            alt="Huawei Watch"
            className="product-catalog-image"
          />
          <h3 className="product-catalog-title">Popular Products</h3>
          <p className="product-catalog-description">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking, and ease of use.
          </p>
          <Link to="/catalog" className="product-catalog-button">
            Shop Now
          </Link>
        </div>

        <div className="product-catalog-card ipad-p">
          <img
            src="./img/image 64.png"
            alt="Ipad Pro"
            className="product-catalog-image"
          />
          <h3 className="product-catalog-title">Ipad Pro</h3>
          <p className="product-catalog-description">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking, and ease of use.
          </p>

          <Link to="/catalog" className="product-catalog-button">
            Shop Now
          </Link>
        </div>

        <div className="product-catalog-card samsung-p">
          <img
            src="./img/image 41.png"
            alt="Samsung Galaxy"
            className="product-catalog-image"
          />
          <h3 className="product-catalog-title">Samsung Galaxy</h3>
          <p className="product-catalog-description">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking, and ease of use.
          </p>
          <Link to="/catalog" className="product-catalog-button">
            Shop Now
          </Link>
        </div>

        <div className="product-catalog-card macbook-p">
          <img
            src="./img/Macbook 1.png"
            alt="Macbook Pro"
            className="product-catalog-image"
          />
          <h3 className="product-catalog-title">Macbook Pro</h3>
          <p className="product-catalog-description">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking, and ease of use.
          </p>
          <Link to="/catalog">
            <button className="product-catalog-button">Shop Now</button>
          </Link>
        </div>
      </div>

      <div className="bigSale">
        <h1>
          Big Summer <span>Sale</span>
        </h1>
        <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
        <Link to="/catalog">
          <button className="product-catalog-button">Shop Now</button>
        </Link>
      </div>
    </>
  );
}
