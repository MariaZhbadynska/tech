import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../slices/productSlice";

export default function Nav() {
  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  const likedProducts = products.filter((product) => product.isFav === true);
  const inCartProducts = products.filter((product) => product.inCart === true);

  const [activeForm, setActiveForm] = useState("login");
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;

    if (formType === "login") {
      setLoginData({ ...loginData, [name]: value });
    }

    if (formType === "register") {
      setRegisterData({ ...registerData, [name]: value });
    }
  };

  const handleLoginSubmit = () => {
    console.log("Logging in with:", loginData);
  };

  const handleRegisterSubmit = () => {
    console.log("Registering with:", registerData);
  };

  return (
    <div>
      <div
        id="header"
        className="d-flex align-items-center justify-content-center text-center"
      >
        <div className="overlay">
          <div className="container">
            <header className="content d-flex align-items-center justify-content-between py-3 mb-2">
              <Link to="/" id="logo" className="col-md-2 mb-2 mb-md-0">
                cyber
              </Link>

              <div className="search-header col-md-3">
                <img src="/icons/look.svg" alt="Search Icon" />
                <input type="text" id="Search" placeholder="Search" />
              </div>

              <ul className="nav nav-header col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <Link
                    to="/"
                    className="active header-link nav-link px-2"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="header-link nav-link px-2"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contacts"
                    className="header-link nav-link px-2"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>

              <button
                className="btn burger"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <div className="burger-one"></div>
                <div className="burger-two"></div>
                <div className="burger-three"></div>
              </button>

              <div className="col-md-3 text-end">
                <ul className="d-flex align-items-center justify-content-center">
                  <li>
                    <Link
                      to="/cart"
                      className="bag nav-link px-2 link-secondary"
                    >
                      <img
                        className="header-item_img"
                        src="/icons/shoppingBag.svg"
                        alt="Shopping Bag"
                      />
                      <div className="sircle">{inCartProducts.length}</div>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/favorites"
                      className="bag nav-link px-2 link-secondary"
                    >
                      <img
                        className="header-item_img"
                        src="/icons/likeBlack.svg"
                        alt="Favorites"
                      />
                      <div className="sircle">{likedProducts.length}</div>
                    </Link>
                  </li>

                  <li>
                    <button
                      type="button"
                      className="nav-link px-2 link-secondary account-button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasTop"
                      aria-controls="offcanvasTop"
                    >
                      <img
                        className="header-item_img"
                        src="/icons/account.svg"
                        alt="Account"
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </header>
          </div>
        </div>

        <div
          className="offcanvas offcanvas-start"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Menu
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="justify-content-center">
              <li>
                <Link to="/" className="bag nav-link px-2 link-secondary">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/catalog"
                  className="bag nav-link px-2 link-secondary"
                >
                  Catalog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="offcanvas offcanvas-top h-100"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            {activeForm === "login" && (
              <div className="login">
                <h3 className="reg-title">Log In</h3>

                <div className="reg-name">
                  <h6>Name or Email Address *</h6>
                  <input
                    type="text"
                    name="username"
                    value={loginData.username}
                    onChange={(e) => handleInputChange(e, "login")}
                    placeholder="Enter your name or email"
                  />
                </div>

                <div className="reg-email">
                  <h6>Password *</h6>
                  <input
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={(e) => handleInputChange(e, "login")}
                    placeholder="Enter your password"
                  />
                </div>

                <div>
                  <input type="checkbox" id="checkboxIns" />
                  <label htmlFor="checkboxIns">Remember Me</label>
                </div>

                <input
                  type="button"
                  value="Log In"
                  onClick={handleLoginSubmit}
                  className="btn btn-primary mt-3"
                />

                <div>
                  <button
                    type="button"
                    onClick={() => setActiveForm("register")}
                    className="auth-link-button"
                  >
                    Register
                  </button>

                  <span> / </span>

                  <button type="button" className="auth-link-button">
                    Forgot Password?
                  </button>
                </div>
              </div>
            )}

            {activeForm === "register" && (
              <div className="register">
                <h3 className="reg-title">Registration Form</h3>

                <div className="name">
                  <h6>Name *</h6>
                  <input
                    type="text"
                    name="name"
                    value={registerData.name}
                    onChange={(e) => handleInputChange(e, "register")}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="email">
                  <h6>Email Address *</h6>
                  <input
                    type="email"
                    name="email"
                    value={registerData.email}
                    onChange={(e) => handleInputChange(e, "register")}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="password">
                  <h6>Password *</h6>
                  <input
                    type="password"
                    name="password"
                    value={registerData.password}
                    onChange={(e) => handleInputChange(e, "register")}
                    placeholder="Enter your password"
                  />
                </div>

                <input
                  type="button"
                  value="Sign Up"
                  onClick={handleRegisterSubmit}
                  className="btn btn-primary mt-3"
                />

                <div>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setActiveForm("login")}
                    className="auth-link-button"
                  >
                    Log In
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}