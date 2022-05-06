import React from "react";
import "./style.css";
import making2mb from "../media/making2mb.mp4";

export default function Landing(props) {
  return (
    <React.Fragment>
      {/* carousell starts here */}

      <div className="banner">
        <section className="videoContainer">
          {/* <video autoPlay muted loop id="myVideo">
            <source src={making2mb} type="video/mp4" />
          </video> */}
        </section>

        {/* call to action on a map*/}
        <section className="cta p-5 text-center">
          <h1>whole meal . zero transfat . organic ingreidents</h1>
          <h1>But better taste</h1>
          <h2
            className="my-3"
            style={{
              fontStyle: "italic",
            }}
          >
            Artisan Bread
          </h2>
          <button className="btn btn-danger mt-lg-4">order here</button>
        </section>
      </div>

      {/* call to action on calendar */}
      <section className="p-5 text-center my-4">
        <section>
          <div className="border-bottom"></div>
          <div className="d-flex justify-content-center">
            <h3 className="orStatement">Spendid</h3>
          </div>
        </section>

        <h1>Introducing a better version of the real thing</h1>
        <h5>
          Introducing a better version of the real thing We marry food science
          and innovative cooking techniques to produce your daily food staples
          that taste the same, eat the same, but with only half the carbs, 6x
          more fibre and 100% natural.
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

      <main>
        <article className="attendeeText secondaryBgColor container-fluid p-5">
          {/* attend events section */}
          <section
            className="text-center my-5 text-light
          d-flex justify-content-center
          border-bottom
          "
          >
            <h1>ATTEND EVENTS</h1>
            <h4
              className="ms-4 pt-3"
              style={{
                fontStyle: "italic",
              }}
            >
              Automatically detects your current location and suggests events in
              the vicinity
            </h4>
          </section>
          <section className="ms-5">
            <div className="row g-5">
              <div className="col d-flex justify-content-center">
                {/* card starts here */}
                <div
                  className="card"
                  style={{ width: "18rem", border: "none" }}
                >
                  <img
                    src="https://github.com/Jerrysuper123/eventfulSources/blob/main/images/student.jpg?raw=true"
                    className="card-img-top"
                    alt="student"
                  />
                  <div className="card-body">
                    <h5 className="card-title">FOR STUDENTS</h5>
                    <p className="cardText">
                      Browse through ongoing activities in school in one central
                      portal, without reading event posters/emails
                    </p>
                  </div>
                </div>
                {/* card ends here */}
              </div>

              <div className="col d-flex justify-content-center">
                {/* card starts here */}
                <div
                  className="card"
                  style={{ width: "18rem", border: "none" }}
                >
                  <img
                    src="https://raw.githubusercontent.com/Jerrysuper123/eventfulSources/main/images/shopper.jpg"
                    className="card-img-top"
                    alt="shopper"
                  />
                  <div className="card-body">
                    <h5 className="card-title">FOR SHOPPER</h5>
                    <p className="card-text">
                      Scan all promotional activities nearby to get the best
                      deals
                    </p>
                  </div>
                </div>
                {/* card ends here */}
              </div>

              <div className="col d-flex justify-content-center">
                {/* card starts here */}
                <div
                  className="card"
                  style={{ width: "18rem", border: "none" }}
                >
                  <img
                    src="https://raw.githubusercontent.com/Jerrysuper123/eventfulSources/main/images/tourist.jpg"
                    className="card-img-top"
                    alt="tourist"
                  />
                  <div className="card-body">
                    <h5 className="card-title">FOR TOURISTS</h5>
                    <p className="card-text">
                      Explore ongoing events onsite, without having to read
                      through the information pamphlet
                    </p>
                  </div>
                </div>
                {/* card ends here */}
              </div>

              <div className="col d-flex justify-content-center">
                {/* card starts here */}
                <div
                  className="card"
                  style={{ width: "18rem", border: "none" }}
                >
                  <img
                    src="https://raw.githubusercontent.com/Jerrysuper123/eventfulSources/main/images/diner.jpg"
                    className="card-img-top"
                    alt="diner"
                  />
                  <div className="card-body">
                    <h5 className="card-title">FOR DINERS</h5>
                    <p className="card-text">
                      Grab the nearby cuisines with the offers from restaurants
                      at tantalizing prices
                    </p>
                  </div>
                </div>
                {/* card ends here */}
              </div>
            </div>
          </section>
        </article>
      </main>
    </React.Fragment>
  );
}
