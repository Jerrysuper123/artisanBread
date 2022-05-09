import React from "react";
import "./style.css";
// import walkingIcon from "../images/walkingIcon.png";

export default function Footer(props) {
  return (
    <footer
      className="page-footer font-small blue pt-4"
      style={{
        display: props.display,
      }}
    >
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <section
            // onClick={() => {
            //   props.setLandingActive("landing");
            // }}
            >
              {/* <img
                src={walkingIcon}
                alt="logo"
                style={{
                  width: "2.5rem",
                }}
              /> */}
              <h1 className="accentThreeColor">Artisan BREAD</h1>
            </section>

            <p>
              We marry good science with our artisanal skills to offer hand-made
              wholemeal bread, using organic ingredients. Not only all our bread
              contain zero transfat, they are also carbs guilt-free - our secret
              recipe to half the carbs without losing the taste.
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-2 mb-md-0 mb-3">
            <h5 className="text-uppercase">Shop</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Toast</a>
              </li>
              <li>
                <a href="#!">Baguette</a>
              </li>
              <li>
                <a href="#!">Bread</a>
              </li>
              <li>
                <a href="#!">Bun</a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 mb-md-0 mb-3">
            <h5 className="text-uppercase">About</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Staff</a>
              </li>
              <li>
                <a href="#!">Team</a>
              </li>
              <li>
                <a href="#!">Careers</a>
              </li>
              <li>
                <a href="#!">Blog</a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 mb-md-0 mb-3">
            <h5 className="text-uppercase">Social</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fa-brands fa-instagram-square"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fa-brands fa-twitter-square"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fa-brands fa-whatsapp-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">© 2022 Copyright</div>
    </footer>
  );
}
