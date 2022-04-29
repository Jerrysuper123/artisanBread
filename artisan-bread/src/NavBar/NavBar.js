import React from "react";
import "./style.css";
// import grain from "../images/grain.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [cartShowStatus, setCartShowStatus] = useState("none");
  const changeCartShowStatus = () => {
    if (cartShowStatus === "none") {
      setCartShowStatus("block");
    } else {
      setCartShowStatus("none");
    }
  };
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* icon */}
          <Link to="/">
            <div className="navbar-brand d-flex flex-column">
              {/* <i class="fa-solid fa-bath"></i> */}
              {/* <img className="iconImage" src={grain} alt="icon" /> */}
              <span className="accentThreeColor logoText">Artisan</span>
              <span className="accentOneColor logoSubText">BREAD</span>
            </div>
          </Link>

          <button
            className="navbar-toggler"
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
              <li className="nav-item">
                <div className="nav-link" aria-current="page" href="#">
                  <Link to="/shop">Shop</Link>
                </div>
              </li>

              <li className="nav-item">
                <div className="nav-link" href="#">
                  Delivery
                </div>
              </li>

              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-user"></i>
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <div className="dropdown-item">Login</div>
                  </li>
                  <li>
                    <div className="dropdown-item">Register</div>
                  </li>

                  <li>
                    <div className="dropdown-item">
                      <Link to="/myaccount">My account</Link>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
            {/* cart */}
            {/* crollable modal */}

            {/* click cart button to show and unshow the cart */}

            <section onClick={changeCartShowStatus}>
              <i className="me-2 fa-solid fa-basket-shopping"></i>
              <span className="start-100 translate-middle badge rounded-pill bg-danger">
                3+
                <span className="visually-hidden">unread messages</span>
              </span>
            </section>
          </div>
        </div>
      </nav>

      {/* cart floating page */}
      <section className="cartFloatingPage" style={{ display: cartShowStatus }}>
        <div onClick={changeCartShowStatus}>
          <i class="fa-solid fa-xmark"></i>
        </div>
        <h1 className="cartTitle">Cart page</h1>

        <div className="cartBody">
          <p>body</p>
        </div>
      </section>
    </React.Fragment>
  );
}
