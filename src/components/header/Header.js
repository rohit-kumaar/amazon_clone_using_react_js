import "./Header.scss";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiArrowDropDownFill } from "react-icons/ri";
import flag from "../../images/india-flag.png";
import { useContext } from "react";
import StateContext from "../../context/Context";

function Header() {
  const [{ basket }] = useContext(StateContext);

  return (
    <>
      <header className="header fixed-top">
        <div className="container">
          <div className="header__content">
            {/* comment Logo  */}
            <Link
              to="/"
              className="header__logo d-flex align-items-center justify-content-center p-1"
            >
              <img
                className="header__logo-img"
                src="https://pngshare.com/wp-content/uploads/2021/06/Amazon-Logo-Black-Background-11.png"
                alt="Amazon logo"
              />
            </Link>
            {/* comment Address  */}
            <Link
              to="/*"
              className="header__your-address align-items-center justify-content-center p-1"
            >
              <ImLocation2 className="text-white fs-5" />
              <div className="d-flex flex-column lh-1 ">
                <span className="text-muted fw-bold">Hello</span>
                <span className=" fw-bold text-white">Select your address</span>
              </div>
            </Link>
            {/* comment Search Bar  */}
            <form className="header__search-bar align-items-center justify-content-center p-1">
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
            {/* comment hamburger */}
            <div className="header__hamburger ">
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* comment Right section  */}
            <div className="header__right">
              {/* Your language  */}
              <div className="btn-group header__language ">
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

              {/* comment Sign in or  login  */}
              <Link
                to="/signin"
                className="header__signin text-white align-items-center justify-content-center p-1 h-100"
              >
                <div>
                  <span>Hello, Sign in</span>
                  <span className="fw-bold">Account & Lists</span>
                </div>

                <div className="header__signin-icon">
                  <RiArrowDropDownFill />

                  <div className="header__signin-option">
                    <span></span>
                  </div>
                </div>
              </Link>

              {/* comment Return your order */}
              <Link
                to="/*"
                className="header__return-order text-white h-100  align-items-center justify-content-center p-1"
              >
                <div className="d-flex flex-column lh-1">
                  <span style={{ fontSize: "12px" }}>Returns</span>
                  <span className="fw-bold"> & Orders</span>
                </div>
              </Link>

              {/* Add to cart icon  */}
              <Link
                to="/cart"
                className="header__add-to-cart h-100 align-items-center justify-content-center p-1"
              >
                <div className="position-relative  ">
                  <MdOutlineAddShoppingCart
                    style={{ width: "38px", height: "26px" }}
                    className="text-white"
                  />
                  {/* <FiShoppingCart
                    style={{ width: "38px", height: "26px" }}
                    className="text-white"
                  /> */}
                  <span
                    className="position-absolute bg-black rounded-circle text-warning fw-bold"
                    style={{ top: "-10px" }}
                  >
                    {basket?.length}
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
