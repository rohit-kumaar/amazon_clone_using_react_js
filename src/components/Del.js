import React from "react";

function Del() {
  return (
    <header className="header">
      <nav
        className="navbar navbar-expand-lg "
        style={{ background: "#0f1111", height: "60px" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/login">
            <img
              src="https://pngshare.com/wp-content/uploads/2021/06/Amazon-Logo-Black-Background-11.png"
              alt="Amazon logo"
              style={{ width: "129px" }}
            />
          </Link>
          <button
            className="navbar-toggler  border-1 border-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item text-white d-flex">
                <a
                  className="nav-link active pb-0 pe-0 "
                  aria-current="page"
                  href="#"
                >
                  {/* Location icon  */}
                  <ImLocation2 className="text-white fs-5" />
                </a>
                <div className="d-flex flex-column lh-1 pt-1">
                  <span
                    className="text-muted fw-bold"
                    style={{ fontSize: "12px" }}
                  >
                    Hello
                  </span>
                  <span className="fs-6 fw-bold">Select your address</span>
                </div>
              </li>

              <li className="nav-item ms-4">
                <form>
                  <div className="input-group">
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
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </li>
                    </ul>
                    {/* Search Box  */}
                    <input
                      type="search"
                      className="form-control"
                      aria-describedby="search"
                      style={{ width: "722px" }}
                    />
                    <span
                      className="input-group-text bg-warning "
                      style={{ cursor: "pointer" }}
                      id="search"
                    >
                      <FaSearch />
                    </span>
                  </div>
                </form>
              </li>
            </ul>

            <div className="right">
              <Link to="/">
                <span>Hello</span>
                <span>Hello</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Del;
