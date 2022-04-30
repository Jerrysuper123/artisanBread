// for shop page
import { BASE_URL } from "../util";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import ProductContext from "../ProductContext";
// import ProductDetailsPage from "../ProductDetailsPage/ProductDetailsPage";
import { useNavigate } from "react-router-dom";
import Stripe from "../images/stripe.png";

export default function Shop() {
  let context = useContext(ProductContext);

  const navigate = useNavigate();
  const fetchProductDetailsPage = (productId) => {
    navigate(`/productdetails/${productId}`);
  };

  const fetchAllProducts = async () => {
    let response = await axios.get(BASE_URL + "products");
    // console.log(response.data);

    await setProducts(response.data);
  };

  /*for local development only */
  useEffect(() => {
    fetchAllProducts();
  }, []);

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(context.getCart());
  }, [context.changeCartStatus]);

  const [subtotal, setsubtotal] = useState({
    subQuantity: 0,
    subTotalDollar: 0,
  });

  const calculateTotalCartQuantity = (cartItems) => {
    let subQuantity = 0;
    let subTotalDollar = 0;
    for (let i of cartItems) {
      subQuantity = subQuantity + i.quantity;
      subTotalDollar = subTotalDollar + i.product.price * i.quantity;
    }
    return { subQuantity, subTotalDollar };
  };

  useEffect(() => {
    context.updateCartQuantity(subtotal.subQuantity);
    console.log("shop q", subtotal.subQuantity);
  }, [subtotal]);

  useEffect(() => {
    setsubtotal(calculateTotalCartQuantity(cart));
  }, [cart]);

  //for fetching cart
  const fetchCart = async () => {
    let response = await axios.get(BASE_URL + "cart");
    // console.log(response.data);
    // let clone = stateData;
    // clone["cart"] = response.data;
    await setCart(response.data);
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
    // fetchCart();
  }, [changeCartStatus]);

  const addToCart = async (productId) => {
    let response = await axios.get(BASE_URL + "cart/" + productId + "/add");
    console.log(response);

    if (response) {
      context.changedCart();
    }
  };

  const removeCart = async (productId) => {
    let response = await axios.get(BASE_URL + "cart/" + productId + "/remove");
    console.log(response);
    if (response) {
      context.changedCart();
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
    let url = `${BASE_URL}cart/${productId}/quantity/update`;
    let response = await axios.post(url, {
      newQuantity: quantity,
    });
    // console.log(response);
    if (response) {
      context.changedCart();
    }
  };

  return (
    <React.Fragment>
      <h1>Shop</h1>
      {/* for shop page */}
      <section className="container-fluid p-3">
        <div className="row d-flex justify-content-center gy-3 gx-3">
          {context.getProducts().map((p) => {
            return (
              <div key={p.id} className="card col-4" style={{ width: "18rem" }}>
                {p.image_url ? (
                  <img
                    onClick={() => {
                      fetchProductDetailsPage(p.id);
                    }}
                    src={p.image_url}
                    className="card-img-top"
                    alt={p.name}
                  />
                ) : null}

                <div className="card-body">
                  <section
                    onClick={() => {
                      fetchProductDetailsPage(p.id);
                    }}
                  >
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">${p.price}</p>
                  </section>

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

      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h3 id="offcanvasRightLabel">
            <i class="fa-solid fa-basket-shopping"></i>
            <span className="ms-2">Your Cart ({subtotal.subQuantity})</span>
          </h3>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {/* <h1>cart page</h1> */}
          <section className="cartBody container-fluid p-3">
            <div>
              {cart.map((c) => {
                return (
                  <div
                    key={c.id}
                    className="card d-flex flex-row"
                    style={{ width: "19rem" }}
                  >
                    <section style={{ width: "8rem" }}>
                      {c.product.image_url ? (
                        <img
                          // width={{ width: "5rem" }}
                          src={c.product.image_url}
                          className="card-img-top"
                          alt={c.product.name}
                        />
                      ) : null}
                    </section>

                    <div className="card-body text-start">
                      <section className="d-flex justify-content-between">
                        <h5 className="card-title">{c.product.name}</h5>

                        <span
                          className=""
                          onClick={() => {
                            removeCart(c.product.id);
                          }}
                        >
                          <i class="fa-solid fa-trash-can"></i>
                        </span>
                      </section>

                      <section>
                        {/* <label>Quantity:</label> */}
                        <section className="d-flex justify-content-between">
                          <p>{c.quantity} items</p>
                          <p className="card-text">${c.product.price}</p>
                        </section>

                        {/* {c.quantity} */}
                        <button
                          onClick={() => {
                            updateCartQuantity(c.product.id, c.id);
                          }}
                        >
                          Update
                        </button>
                        <input
                          className="form-control d-inline ms-1"
                          type="text"
                          style={{ width: "3rem" }}
                          value={newCartQuantity[c.id]}
                          // placeholder="quantity"
                          name={c.id}
                          onChange={updateFormField}
                        />
                      </section>
                    </div>
                  </div>
                );
              })}
            </div>
            <h3 className="text-start mt-4">
              subtotal: ${subtotal.subTotalDollar}{" "}
            </h3>
          </section>
          <section>
            <p>Taxes and shipping are calculated at checkout</p>
            <button>check Out - ${subtotal.subTotalDollar}</button>
            <p>All transactions are processed via Strip in a secure manners</p>
            <img
              style={{ width: "20rem" }}
              src={Stripe}
              alt="stripe payment methods"
            />
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}
