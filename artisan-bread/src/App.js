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

  /*cart page */
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    let response = await axios.get(BASE_URL + "cart");
    console.log(response.data);
    setCart(response.data);
  };

  const addToCart = async (productId) => {
    // // fetchCart();
    // console.log("we did not fetch");
    // // url = /api/cart/productId/add
    // console.log(BASE_URL + "cart/" + productId + "/add");
    // console.log("add to cart");

    // console.log(changeCartStatus);
    let response = await axios.get(BASE_URL + "cart/" + productId + "/add");
    console.log(response);
    // console.log("did we fetch cart");
    if (response) {
      changedCart();
    }

    // console.log(response);
    // await fetchCart();
    // console.log(response);
    // changedCart();

    // changedCart();
  };

  const removeCart = async (productId) => {
    let response = await axios.get(BASE_URL + "cart/" + productId + "/remove");
    console.log(response);
    if (response) {
      changedCart();
    }
  };

  const [newCartQuantity, setNewCartQuantity] = useState({});
  const updateFormField = (e) => {
    if (!e.target.name) {
      return;
    }
    let formField = e.target.name;
    let formValue = e.target.value;
    console.log("cartItem", formField);
    console.log("formValue", formValue);
    setNewCartQuantity({
      [formField]: e.target.value,
    });
  };

  const updateCartQuantity = async (productId, cartId) => {
    let quantity = newCartQuantity[cartId];
    console.log(newCartQuantity);
    // .../cart/:productId/quantity/update
    let url = `${BASE_URL}cart/${productId}/quantity/update`;
    console.log(url);
    console.log("cartid", cartId);
    console.log("productId", productId);
    console.log("quantity", quantity);
    let response = await axios.post(url, {
      newQuantity: quantity,
    });
    console.log(response);
    if (response) {
      changedCart();
    }
  };

  const [changeCartStatus, setChangeCartStatus] = useState(false);

  const changedCart = () => {
    if (changeCartStatus === true) {
      setChangeCartStatus(false);
    } else {
      setChangeCartStatus(true);
    }
  };

  // when CRUD on cart db has been triggered, we retrieve cartData again
  useEffect(() => {
    fetchCart();
  }, [changeCartStatus]);

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
                  <button
                    className="customBtn customBtnSecondary"
                    onClick={() => {
                      addToCart(p.id);
                    }}
                  >
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
                      <p>{c.quantity}</p>
                      {/* {c.quantity} */}
                      <input
                        className="form-control d-inline ms-1"
                        type="text"
                        style={{ width: "3rem" }}
                        value={newCartQuantity[c.id]}
                        name={c.id}
                        onChange={updateFormField}
                      />
                    </span>

                    <button
                      className="customBtn customBtnSecondary"
                      onClick={() => {
                        updateCartQuantity(c.product.id, c.id);
                      }}
                    >
                      Update
                    </button>
                  </section>

                  <button
                    className="mt-2 customBtn customBtnAccentThree"
                    onClick={() => {
                      removeCart(c.product.id);
                    }}
                  >
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
