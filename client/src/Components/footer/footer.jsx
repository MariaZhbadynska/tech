import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="loggo">
            <a href=""></a>
            cyber
          </h2>
          <p className="footer-text">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
          <div className="footer-icons">
            <a href="#" aria-label="Twitter" className="footer-icon">
              <img src="/icons/Twitter.svg" alt="" />
            </a>
            <a href="#" aria-label="Facebook" className="footer-icon">
              <img src="/icons/Facebook.svg" alt="" />
            </a>
            <a href="#" aria-label="TikTok" className="footer-icon">
              <img src="/icons/Tiktok.svg" alt="" />
            </a>
            <a href="#" aria-label="Instagram" className="footer-icon">
              <img src="/icons/Instagram.svg" alt="" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-subtitle">Services</h3>
          <ul className="footer-list">
            <li>
              <a href="#" className="footer-link">
                Bonus program
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Gift cards
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Credit and payment
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Service contracts
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Non-cash account
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Payment
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-subtitle">Assistance to the buyer</h3>
          <ul className="footer-list">
            <li>
              <a href="#" className="footer-link">
                Find an order
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Terms of delivery
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Exchange and return of goods
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Guarantee
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Frequently asked questions
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Terms of use of the site
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
