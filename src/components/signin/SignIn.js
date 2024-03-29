import React, { useRef, useState } from "react";
import "./SignIn.scss";
import logo from "../../images/signin-logo.jpg";
import { NavLink, Link } from "react-router-dom";

function SignIn() {
  const today = new Date();
  const [open, setOpen] = useState(false);

  const focus = useRef(null);
  const focusOnInput = () => {
    focus.current.focus();
    setOpen(true);
  };

  const headerBlock = () => {
    const header = document.querySelector(".header");
    header.style.display = "block";
  };

  return (
    <>
      <div className="signin-wrapper">
        <section className="signin">
          {/* comment logo  */}
          <NavLink to="/" className="d-flex justify-content-center mb-4 pt-2">
            <img
              className="signin__logo"
              loading="lazy"
              src={logo}
              alt="amazon"
              title="Go To Home Page"
              onClick={headerBlock}
            />
          </NavLink>

          {/* comment top  */}
          <div className="signin__top">
            {/* comment Sign in info  */}
            <form>
              <h3>Sign-in</h3>
              {/* comment sign in details  */}
              <div className="signin__info">
                <label htmlFor="signin__user-info" className="mt-3 mb-1">
                  Email or mobile phone number
                </label>
                <input
                  ref={focus}
                  type="text"
                  name="text"
                  id="signin__user-info"
                />
                {/* comment invalid warning */}
                <p
                  style={{
                    display: open ? "block" : "none",
                    fontSize: "12px",
                    color: "red",
                  }}
                >
                  ! Enter your email or mobile phone number
                </p>
              </div>
              {/* comment sign in btn  */}
              <Link to="#">
                <button
                  className="signin__btn button  mt-3"
                  onClick={focusOnInput}
                >
                  Continue
                </button>
              </Link>
              {/* comment Conditions of Use and Privacy Notice. */}

              <p className="signin__privacy mt-3">
                By continuing, you agree to Amazon's{" "}
                <Link to="#">Conditions of Use</Link> and{" "}
                <Link to="#">Privacy Notice.</Link>
              </p>

              {/* comment help  */}
              <details className="mt-4">
                <summary className="text-dark">Need help?</summary>
                <p className="d-flex flex-column ms-2 ps-1">
                  <Link to="#">Forgot Password</Link>
                  <Link to="#">Other issues with Sign-In</Link>
                </p>
              </details>
            </form>
          </div>
          {/* comment bottom  */}
          <div className="signin__bottom">
            {/* comment new person  */}
            <div className="mt-4 ">
              <span></span>
              <p className="mx-1">New to Amazon?</p>
              <span></span>
            </div>
            {/* comment new person account  */}
            <Link to="#">
              <button className="mt-3 w-100">Create your Amazon account</button>
            </Link>
          </div>
        </section>

        {/* comment footer  */}
        <footer className="signin__footer mt-4">
          {/* comment top */}
          <ul className="d-flex  justify-content-around px-4 ">
            <li>
              <Link to="#">Conditions of Use </Link>
            </li>
            <li>
              <Link to="#"> Privacy Notice </Link>
            </li>
            <li>
              <Link to="#"> Help </Link>
            </li>
          </ul>
          {/* comment bottom */}
          <p className="mt-3">
            © 1996-{today.getFullYear()}, Amazon.com, Inc. or its affiliates
          </p>
        </footer>
      </div>
    </>
  );
}

export default SignIn;
