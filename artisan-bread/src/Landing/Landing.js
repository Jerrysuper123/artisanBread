import React, { useContext, useState } from "react";
import "./style.css";
import making2mb from "../media/making2mb.mp4";
import ProductContext from "../ProductContext";
import ProductCard from "../Shop/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { useEffect, Suspense, useRef } from "react";
import Bread from "../Components/Bread";
import { Canvas, useFrame } from "@react-three/fiber";
//drei is a helper for three.js, Html allows us to write html into animation
import { Html } from "@react-three/drei";

export default function Landing(props) {
  const context = useContext(ProductContext);
  const addToCart = (productId) => {
    context.setAddToCartProductId(productId);
    // navigate("/shop");
  };

  const [animationClass, setAnimationClass] = useState("");
  const handMouseEnter = () => {
    setAnimationClass("animate__animated animate__lightSpeedInRight");
    setTimeout(() => {
      setAnimationClass("");
    }, 2000);
  };

  useEffect(() => {
    context.setSpinnerShow(true);
    setTimeout(() => {
      context.setSpinnerShow(false);
    }, 500);
  }, []);

  // const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false);
  // bloe html content is for the
  const AnimationContent = () => {
    const ref = useRef();
    // rotate the 3d object
    useFrame(() => (ref.current.rotation.y -= 0.01));
    return (
      // <Section factor={1.5} offset={1}>
      <React.Fragment>
        <Html fullscreen>
          <div className="d-flex justify-content-center mt-2">
            {/* <h3>Grab now!</h3> */}
          </div>
        </Html>
        <mesh
          ref={ref}
          // scale={clicked ? 1.5 : 1}
          // onClick={(event) => click(!clicked)}
          // onPointerOver={(event) => hover(true)}
          // onPointerOut={(event) => hover(false)}
        >
          <Bread />
        </mesh>
      </React.Fragment>
      // </Section>
    );
  };

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
        <section className="cta p-5 text-center animate__animated animate__slideInDown">
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
          <Link to="/login">
            <button className="btn LoginBtn btn-secondary mt-lg-4">
              Log in
            </button>
          </Link>
          <Link to="/shop">
            <button className="ms-2 btn btn-danger mt-lg-4">Shop now</button>
          </Link>
        </section>
      </div>

      <main className="landingMainContainer p-2">
        {/* call to action on calendar */}
        <section className="p-5 text-center mb-4">
          <section>
            <div className="border-bottom"></div>
            <div className="d-flex justify-content-center">
              <h3 className="orStatement px-2">Grab now!</h3>
            </div>
          </section>
          {/* 3d animation starts here */}
          <section
            style={
              {
                // height: "20rem",
                // backgroundColor: "orange",
              }
            }
          >
            <Canvas id="modelContainer">
              <Suspense fallback={null}>
                <AnimationContent />
              </Suspense>
            </Canvas>
          </section>
          {/* 3d animation ends here */}

          <article onMouseEnter={handMouseEnter} className={animationClass}>
            <h1 className="highlightText">Healthier bread with better taste</h1>

            <h5 className="text-secondary">
              We marry good science with our artisanal skills to offer hand-made
              wholemeal bread, using organic ingredients. Not only all our bread
              contain zero transfat, they are also carbs guilt-free - our secret
              recipe to half the carbs without losing the taste.
            </h5>
          </article>
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
                          <section className="p-3" key={p.id}>
                            <ProductCard
                              p={p}
                              addToCart={addToCart}
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
                          <section className="p-3" key={p.id}>
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
                          <section className="p-3" key={p.id}>
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
