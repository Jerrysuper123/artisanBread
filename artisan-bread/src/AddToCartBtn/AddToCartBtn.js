import React from "react";
import "./style.css";

export default function AddToCartBtn() {
  return (
    <React.Fragment>
      <div className="ribbon-wrapper">
        <div className="glow"></div>
        <div className="ribbon-front">
          <span> Add to Cart</span>
          <span className="ms-2 basket">
            <i className=" fa-solid fa-basket-shopping"></i>
          </span>
        </div>
        <div className="ribbon-edge-topleft"></div>
        <div className="ribbon-edge-topright"></div>
        <div className="ribbon-edge-bottomleft"></div>
        <div className="ribbon-edge-bottomright"></div>
      </div>
    </React.Fragment>
  );
}
