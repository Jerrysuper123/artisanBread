import React from "react";
import "./style.css";
// import grain from "../images/grain.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../ProductContext";

export default function Navbar(props) {
  let context = useContext(ProductContext);
  const logOut = () => {
    context.setLogInUserInfo({});
    context.setAccessToken("");
    //removeItem(): This technique is used to delete an item from localStorage based on its key.
    localStorage.removeItem("accessToken");
  };
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* icon */}
          <Link to="/">
            <img
              className="iconImage"
              src="https://raw.githubusercontent.com/Jerrysuper123/artisanbreadsources/main/brandLogo.jpg"
              alt="icon"
            />
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

          {/* collapsable bar starts here */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <React.Fragment>
                <li className="nav-item me-3">
                  <div className="nav-link" aria-current="page">
                    <Link to="/">
                      <span className="ms-1">Home</span>
                    </Link>
                  </div>
                </li>

                <li className="nav-item me-3 nav-shop">
                  <div className="nav-link" aria-current="page">
                    <Link to="/shop">
                      <span className="ms-1">Shop</span>
                    </Link>
                  </div>
                </li>

                <li className="nav-item me-3">
                  <div className="nav-link" aria-current="page">
                    <Link to="/order">Orders</Link>
                  </div>
                </li>

                <li className="nav-item me-3">
                  <div className="nav-link" aria-current="page">
                    <Link to="/login">Login</Link>
                  </div>
                </li>

                <li className="nav-item me-3">
                  <div className="nav-link" aria-current="page">
                    <Link to="/register">Register</Link>
                  </div>
                </li>

                <li className="nav-item">
                  <div className="nav-link " aria-current="page">
                    <span className="userLogin">
                      <span className="me-1">Hi</span>
                      {context.logInUserInfo.username
                        ? context.logInUserInfo.username
                        : null}
                    </span>

                    <i className="ms-1 fa-solid fa-user"></i>
                  </div>
                </li>

                <li className="nav-item me-3">
                  <div className="nav-link " aria-current="page">
                    {/* logout starts */}
                    {context.logInUserInfo.username ? (
                      <li className="nav-item userLogout" onClick={logOut}>
                        Logout
                      </li>
                    ) : null}
                    {/* log out ends here */}
                  </div>
                </li>
              </React.Fragment>

              {/* cart starts here */}

              <li
                className="nav-item mt-1"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                {context.logInUserInfo.username ? (
                  <React.Fragment>
                    <i className="mt-2 fa-solid fa-basket-shopping"></i>
                    <span className="start-100 translate-middle badge rounded-pill bg-danger">
                      {context.cartQuantity}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </React.Fragment>
                ) : null}
              </li>

              {/* cart ends here */}
            </ul>
          </div>
          {/* collapsable bar ends here */}
        </div>
      </nav>

      {/* cart page */}
    </React.Fragment>
  );
}
