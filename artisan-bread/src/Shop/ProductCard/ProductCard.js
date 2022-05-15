import React from "react";
import "./style.css";

export default function ProductCard({ p, fetchProductDetailsPage, addToCart }) {
  return (
    <div
      key={p.id}
      id="shopCardContainer"
      className="card shopCard thumbnail"
      style={{ width: "18rem", height: "23rem", borderRadius: "1rem" }}
    >
      <span className="productRating">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <span>(40)</span>
      </span>
      {p.image_url ? (
        <img
          onClick={() => {
            fetchProductDetailsPage(p.id);
          }}
          src={p.image_url}
          className="card-img-top shopImg "
          alt={p.name}
        />
      ) : null}
      <button
        className="shopCartBtn customBtn py-2"
        onClick={() => {
          addToCart(p.id);
        }}
      >
        Add to Cart
      </button>
      <div className="cardBody text-center">
        <section
          onClick={() => {
            fetchProductDetailsPage(p.id);
          }}
        >
          <h6 className="cardTitle">{p.name}</h6>
          <p className="cardText">${p.price}.00</p>
        </section>
      </div>
    </div>
    // </section>
  );
}
