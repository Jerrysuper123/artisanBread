import React, { useContext } from "react";
import "./style.css";
import making2mb from "../media/making2mb.mp4";
import ProductContext from "../ProductContext";
import ProductCard from "../Shop/ProductCard/ProductCard";

export default function Landing(props) {
  const context = useContext(ProductContext);
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

      <main className="landingMainContainer p-3">
        {/* call to action on calendar */}
        <section className="p-5 text-center mb-4">
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
        <section className="d-flex justify-content-center mb-5">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <section className="d-flex justify-content-center">
                  {context.products
                    ? context.products.slice(0, 3).map((p) => {
                        return (
                          <section className="p-3">
                            <ProductCard
                              p={p}
                              addToCart={() => {}}
                              fetchProductDetailsPage={() => {}}
                            />
                          </section>
                        );
                      })
                    : null}
                </section>
              </div>
              <div className="carousel-item">
                <section className="d-flex justify-content-center">
                  {context.products
                    ? context.products.slice(3, 6).map((p) => {
                        return (
                          <section className="p-3">
                            <ProductCard
                              p={p}
                              addToCart={() => {}}
                              fetchProductDetailsPage={() => {}}
                            />
                          </section>
                        );
                      })
                    : null}
                </section>
              </div>
              <div className="carousel-item">
                <section className="d-flex justify-content-center">
                  {context.products
                    ? context.products.slice(6, 9).map((p) => {
                        return (
                          <section className="p-3">
                            <ProductCard
                              p={p}
                              addToCart={() => {}}
                              fetchProductDetailsPage={() => {}}
                            />
                          </section>
                        );
                      })
                    : null}
                </section>
              </div>
            </div>

            {/* previous and next button */}
            <button
              className="carousel-control-prev "
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <i className="slideControl fa-solid fa-circle-chevron-left"></i>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <i className="fa-solid fa-circle-chevron-right slideControl"></i>
            </button>
          </div>
        </section>
      </main>

      {/* carousell of products */}
    </React.Fragment>
  );
}
