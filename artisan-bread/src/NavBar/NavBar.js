import React from "react";
import "./style.css";
// import grain from "../images/grain.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import { useEffect, useContext } from "react";
import ProductContext from "../ProductContext";

export default function Navbar(props) {
  let context = useContext(ProductContext);
  const [userActive, setUserActive] = useState("login");
  const showSignUpPage = () => {
    setUserActive("signup");
  };

  const showLoginPage = () => {
    setUserActive("login");
  };

  const logOut = () => {
    context.setLogInUserInfo({});
    context.setAccessToken("");
  };
  return (
    <React.Fragment>
      {/* modal */}
      {/* <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body">
              {userActive === "login" ? <LoginPage /> : <RegisterPage />}

              <p className="mt-3 pt-3 border-top">
                {userActive === "login" ? (
                  <section>
                    <div>New Users?</div>
                    <div onClick={showSignUpPage}>Sign up</div>
                  </section>
                ) : (
                  <section onClick={showLoginPage}>Log in</section>
                )}
              </p>
            </div>
          </div>
        </div>
      </div> */}

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
                <div className="nav-link" aria-current="page">
                  <Link to="/shop">Shop</Link>
                </div>
              </li>

              <li className="nav-item">
                <div className="nav-link">Delivery</div>
              </li>

              {/* start of my account */}
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>
                    {context.logInUserInfo.username
                      ? context.logInUserInfo.username
                      : null}
                  </span>
                  <i className="ms-1 fa-solid fa-user"></i>
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <div className="dropdown-item">
                      <Link to="/login">Login</Link>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item">
                      <Link to="/register">Register</Link>
                    </div>
                  </li>

                  <li>
                    <div className="dropdown-item">
                      <Link to="/myaccount">My account</Link>
                    </div>
                  </li>
                </ul>
              </li>
              {/* finish of my account */}
              <li className="nav-item" onClick={logOut}>
                <div className="nav-link">
                  {context.logInUserInfo.username ? "Log out" : null}
                </div>
              </li>
            </ul>
            {/* cart */}
            {/* crollable modal */}

            {/* click cart button to show and unshow the cart */}

            <section
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <i className="me-2 fa-solid fa-basket-shopping"></i>
              <span className="start-100 translate-middle badge rounded-pill bg-danger">
                {context.cartQuantity}
                <span className="visually-hidden">unread messages</span>
              </span>
            </section>
          </div>
        </div>
      </nav>

      {/* cart page */}
    </React.Fragment>
  );
}
