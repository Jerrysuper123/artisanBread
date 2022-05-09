import React from "react";
import "./style.css";
import making2mb from "../media/making2mb.mp4";

export default function Landing(props) {
  return (
    <React.Fragment>
      {/* carousell starts here */}

      <div className="banner">
        <section className="videoContainer">
          <video autoPlay muted loop id="myVideo">
            <source src={making2mb} type="video/mp4" />
          </video>
        </section>

        {/* call to action on a map*/}
        <section className="cta p-5 text-center">
          <section className="ctaHeader">
            <span>Wholemeal </span>
            <span>. Zero trans-fat</span>
            <span>. Organic</span>
          </section>
          <h1 className="mt-3">But 100% better taste!</h1>
          <h2
            className="my-3"
            style={{
              fontStyle: "italic",
            }}
          >
            Artisan Bread offers the best bread in the world
          </h2>
          <button className="btn btn-secondary mt-lg-4">Log in</button>
          <button className="ms-2 btn btn-danger mt-lg-4">Shop now</button>
        </section>
      </div>

      {/* call to action on calendar */}
      <section className="p-5 text-center my-4">
        <section>
          <div className="border-bottom"></div>
          <div className="d-flex justify-content-center">
            <h3 className="orStatement px-2">Spendid</h3>
          </div>
        </section>

        <h1>Healthier bread with better taste</h1>
        <h5>
          We marry good science with our artisanal skills to offer hand-made
          wholemeal bread, using organic ingredients. Not only all our bread
          contain zero transfat, they are also carbs guilt-free - our secret
          recipe to half the carbs without losing the taste.
        </h5>
      </section>

      {/* carousell of products */}
      <div
        id="productList"
        className="carousel slide container"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#productList"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#productList"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#productList"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#productList"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productList"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* carousell of products */}
    </React.Fragment>
  );
}
