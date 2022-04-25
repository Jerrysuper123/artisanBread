import React from "react";
import "./style.css";
import grain from "../images/grain.png";

export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* icon */}
          <a className="navbar-brand d-flex flex-column" href="#">
            {/* <i class="fa-solid fa-bath"></i> */}
            <img className="iconImage" src={grain} alt="icon" />
            <span className="accentThreeColor logoText">Artisan</span>
            <span className="accentOneColor logoSubText">BREAD</span>
          </a>

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
                <a className="nav-link" aria-current="page" href="#">
                  Shop
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Delivery
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-user"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Login
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Register
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* cart */}
            <section>
              <i className="me-2 fa-solid fa-basket-shopping"></i>
              <span className="start-100 translate-middle badge rounded-pill bg-danger">
                3+
                <span className="visually-hidden">unread messages</span>
              </span>
            </section>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
