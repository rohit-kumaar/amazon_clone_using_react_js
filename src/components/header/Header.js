import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { RiArrowDropDownFill } from "react-icons/ri";
import flag from "../../images/india-flag.png";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            {/* Logo  */}
            <Link
              to="/main"
              className="header__logo d-flex align-items-center justify-content-center p-1"
            >
              <img
                className="header__logo-img"
                src="https://pngshare.com/wp-content/uploads/2021/06/Amazon-Logo-Black-Background-11.png"
                alt="Amazon logo"
              />
            </Link>
            {/* Address  */}
            <Link
              to="/"
              className="header__your-address d-flex align-items-center justify-content-center p-1"
            >
              <ImLocation2 className="text-white fs-5" />
              <div className="d-flex flex-column lh-1 ">
                <span className="text-muted fw-bold">Hello</span>
                <span className=" fw-bold text-white">Select your address</span>
              </div>
            </Link>
            {/* Search Bar  */}
            <form className="header__search-bar d-flex align-items-center justify-content-center p-1">
              <div className="input-group ">
                <button
                  className="btn btn-outline-light bg-light text-black-50 dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontSize: "12px" }}
                >
                  All
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </li>
                </ul>
                <input type="text" className="form-control" />
                <span
                  className="input-group-text bg-warning "
                  style={{ cursor: "pointer" }}
                  id="search"
                >
                  <FaSearch />
                </span>
              </div>
            </form>
            {/* hamburger */}
            <div className="header__hamburger ">
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* Right section  */}
            <div className="header__right">
              {/* Your language  */}
              <div className="btn-group ">
                <button
                  type="button"
                  className="btn btn-dark btn-outline-secondary"
                >
                  <img
                    src={flag}
                    style={{
                      width: "24px",
                      height: "18px",
                      objectFit: "cover",
                    }}
                    alt="logo"
                  />
                </button>
                <button
                  type="button"
                  className="btn btn-dark btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <div className="form-check mx-2 ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        English - EN
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check mx-2 ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        हिंदी - HI
                      </label>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Sign in or  Login  */}
              <Link
                to="/login"
                className="header__login text-white d-flex align-items-center justify-content-center p-1 h-100"
              >
                <div>
                  <span>Hello, Sign in</span>
                  <span className="fw-bold">Account & Lists</span>
                </div>

                <div>
                  <RiArrowDropDownFill />
                </div>
              </Link>

              {/* Return your order */}
              <Link
                to="/"
                className="header__return-order text-white h-100 d-flex align-items-center justify-content-center p-1"
              >
                <div className="d-flex flex-column lh-1">
                  <span style={{ fontSize: "12px" }}>Returns</span>
                  <span className="fw-bold"> & Orders</span>
                </div>
              </Link>

              {/* Add to cart icon  */}
              <Link
                to="/cart"
                className="header__add-to-cart h-100 d-flex align-items-center justify-content-center p-1"
              >
                <div className="position-relative  ">
                  <FiShoppingCart
                    style={{ width: "38px", height: "26px" }}
                    className="text-white"
                  />
                  <span
                    className="position-absolute bg-warning rounded-circle text-black fw-bold"
                    style={{ top: "-12px" }}
                  >
                    1
                  </span>
                </div>
                <span className="fw-bold text-white ">Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
