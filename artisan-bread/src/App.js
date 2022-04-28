import Footer from "./Footer/Footer";
import Navbar from "./NavBar/NavBar";
import "./App.css";

// for shop page
import { BASE_URL } from "./util";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  // for shop page
  const [products, setProducts] = useState([]);

  const fetchAllProducts = async () => {
    let response = await axios.get(BASE_URL + "products");
    console.log(response.data);
    setProducts(response.data);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    let response = await axios.get(BASE_URL + "cart");
    console.log(response.data);
    setCart(response.data);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <h1>main page</h1>
      {/* for shop page */}
      <section className="container-fluid p-3">
        <div className="row d-flex justify-content-center gy-3 gx-3">
          {products.map((p) => {
            return (
              <div key={p.id} className="card col-4" style={{ width: "18rem" }}>
                {p.image_url ? (
                  <img
                    src={p.image_url}
                    className="card-img-top"
                    alt={p.name}
                  />
                ) : null}

                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">${p.price}</p>
                  <button className="customBtn customBtnSecondary">
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <h1>cart page</h1>
      <section className="container-fluid p-3">
        <div className="row d-flex justify-content-center gy-3 gx-3">
          {cart.map((c) => {
            return (
              <div key={c.id} className="card col-4" style={{ width: "18rem" }}>
                {c.product.image_url ? (
                  <img
                    src={c.product.image_url}
                    className="card-img-top"
                    alt={c.product.name}
                  />
                ) : null}

                <div className="card-body">
                  <h5 className="card-title">{c.product.name}</h5>
                  <p className="card-text">Price: ${c.product.price}</p>
                  <section>
                    <span>
                      <label>Quantity:</label>
                      {/* {c.quantity} */}
                      <input
                        className="form-control d-inline ms-1"
                        style={{ width: "3rem" }}
                        value={c.quantity}
                        name="cartQuantity"
                      />
                    </span>

                    <button className="customBtn customBtnSecondary">
                      Update
                    </button>
                  </section>

                  <button className="mt-2 customBtn customBtnAccentThree">
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
