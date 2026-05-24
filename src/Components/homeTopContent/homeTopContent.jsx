import React from "react";
import "./HomeTopContent.css";
import { Link } from "react-router-dom";

export default function HomeTopContent() {
  const categories = [
    { icon: "/icons/Phones.svg", name: "Phones" },
    { icon: "/icons/Smart Watches.svg", name: "Smart Watches" },
    { icon: "/icons/Cameras.svg", name: "Cameras" },
    { icon: "/icons/Headphones.svg", name: "Headphones" },
    { icon: "/icons/Computers.svg", name: "Computers" },
    { icon: "/icons/Gaming.svg", name: "Gaming" },
  ];
  return (
    <div className="home-top-content">
      <section className="hero-section">
        <div className="hero-text">
          <h2>Pro.Beyond.</h2>
          <h1>
            iPhone 14 <span className="pro">Pro</span>
          </h1>
          <p>Created to change everything for the better. For everyone.</p>
          <Link to="/catalog">
            <button className="shop-now-button">Shop Now</button>
          </Link>
        </div>
        <div className="hero-image">
          <img src="./img/IpImage.svg" alt="iPhone 14 Pro" />
        </div>
      </section>

      <section className="product-grid">
        <div className="left">
          <div className="product playstation">
            <img src="./img/PlayStation.svg" alt="PlayStation 5" />
            <div className="card-content">
              <h2>PlayStation 5</h2>
              <p>
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>

          <div className="flex-products">
            <div className="product airpods-card">
              <img src="./img/Iphone 14 pro 1-4.png" alt="Apple AirPods Max" />
              <div className="card-content">
                <h2>
                  Apple AirPods <span>Max</span>
                </h2>
                <p>Computational audio. Listen, it’s powerful.</p>
              </div>
            </div>

            <div className="product glasses-card">
              <img src="./img/glasses.svg" alt="Apple Vision Pro" />
              <div className="card-content">
                <h2>
                  Apple Vision <span>Pro</span>
                </h2>
                <p>An immersive way to experience entertainment.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="product macbook-card">
            <div className="card-content">
              <h2>
                MacBook <span>Air</span>
              </h2>
              <p>
                The new 15-inch MacBook Air makes room for more of what you love
                with a spacious Liquid Retina display.
              </p>
              <Link to="/catalog" className="shop-now-button">
                Shop Now
              </Link>
            </div>
            <img src="./img/MacBook Pro 14.svg" alt="MacBook Air" />
          </div>
        </div>
      </section>
      <section className="browse-by_category">
        <div className="container">
          <div className="browse-by-category">
            <h2>Browse By Category</h2>
            <div className="category-grid">
              {categories.map((category, index) => (
                <div className="category-card" key={index}>
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="category-icon"
                  />
                  <p>{category.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
