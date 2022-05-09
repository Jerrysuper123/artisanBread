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
            {/* <div className="navbar-brand d-flex flex-column"> */}
            {/* <i class="fa-solid fa-bath"></i> */}
            <img
              className="iconImage"
              src="https://raw.githubusercontent.com/Jerrysuper123/artisanbreadsources/main/brandLogo.jpg"
              alt="icon"
              // style={{ width: "5rem" }}
            />
            {/* <span className="accentThreeColor logoText">Artisan</span>
              <span className="accentOneColor logoSubText">BREAD</span> */}
            {/* </div> */}
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
              {context.logInUserInfo.username ? (
                <React.Fragment>
                  <li className="nav-item nav-shop">
                    <div className="nav-link" aria-current="page">
                      <Link to="/shop">
                        <i class="fa-solid fa-shop"></i>
                        <span className="ms-1">Shop</span>
                      </Link>
                    </div>
                  </li>
                </React.Fragment>
              ) : null}

              {/* start of my account */}
              <li className="nav-item dropdown ms-auto me-2">
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
                      <Link to="/order">My order</Link>
                    </div>
                  </li>
                </ul>
              </li>
              {/* my account ends here */}

              {/* logout starts */}
              {context.logInUserInfo.username ? (
                <li className="nav-item mt-2 me-4" onClick={logOut}>
                  {/* <i class="fa-solid fa-arrow-right-from-bracket"></i> */}
                  Logout
                </li>
              ) : null}
              {/* log out ends here */}

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
