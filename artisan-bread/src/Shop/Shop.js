// for shop page
import { BASE_URL, getHTTPHeaders } from "../util";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import ProductContext from "../ProductContext";
import FilterPage from "../FilterPage/FilterPage";
import SearchProduct from "../SearchProduct/SearchProduct";
import { useNavigate } from "react-router-dom";
import Stripe from "../images/stripe.png";
import "./style.css";

export default function Shop() {
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
  // useEffect(() => {
  //   setCart(context.getCart());
  // }, [context.changeCartStatus]);

  const [subtotal, setsubtotal] = useState({
    subQuantity: 0,
    subTotalDollar: 0,
  });

  let context = useContext(ProductContext);
  useEffect(() => {
    context.setCartQuantity(subtotal.subQuantity);
  }, [subtotal]);

  useEffect(() => {
    context.setProducts(products);
  }, [products]);

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
    setsubtotal(calculateTotalCartQuantity(cart));
  }, [cart]);

  //for fetching cart
  const fetchCart = async () => {
    if (context.accessToken !== "") {
      let response = await axios.get(
        BASE_URL + "cart",
        getHTTPHeaders(context.accessToken)
      );
      // console.log(response.data);
      // let clone = stateData;
      // clone["cart"] = response.data;
      await setCart(response.data);
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

  const [addedCartNotification, setAddedCartNotification] = useState("none");

  const addToCart = async (productId) => {
    // console.log("added to cart from details", productId);
    if (context.accessToken !== "") {
      let response = await axios.get(
        BASE_URL + "cart/" + productId + "/add",
        getHTTPHeaders(context.accessToken)
      );
      // console.log(response);
      setAddedCartNotification("block");

      if (response) {
        changedCart();
        setTimeout(() => {
          setAddedCartNotification("none");
        }, 1000);
      }
    }
  };

  const isMounted = React.useRef(false);

  //add to cart from product details side
  useEffect(() => {
    //do not run add to cart the first time when shop component is loaded
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      addToCart(context.addToCartProductId);
      context.setAddToCartProductId("");
    }
  }, [context.addToCartProductId]);

  const closeToast = () => {
    setAddedCartNotification("none");
  };

  const removeCart = async (productId) => {
    if (context.accessToken !== "") {
      let response = await axios.get(
        BASE_URL + "cart/" + productId + "/remove",
        getHTTPHeaders(context.accessToken)
      );
      console.log(response);
      if (response) {
        changedCart();
      }
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
    if (context.accessToken !== "") {
      let quantity = newCartQuantity[cartId];
      console.log(newCartQuantity);
      let url = `${BASE_URL}cart/${productId}/quantity/update`;
      let response = await axios.post(
        url,
        {
          newQuantity: quantity,
        },
        getHTTPHeaders(context.accessToken)
      );
      // console.log(response);
      if (response) {
        changedCart();
      }
    }
  };

  const getStripeSessionInfo = async () => {
    if (context.accessToken !== "") {
      let response = await axios.get(
        BASE_URL + "checkout",
        getHTTPHeaders(context.accessToken)
      );
      // console.log(response.data);
      context.setStripeSessionInfo(response.data);
      navigate("/checkout");
    }
  };

  return (
    <React.Fragment>
      <section
        className="shadow cartToast"
        style={{ display: addedCartNotification }}
      >
        <section
          style={{
            fontSize: "0.9rem",
            backgroundColor: "white",
            color: "grey",
          }}
          className="cartToastHeader d-flex justify-content-between p-2 border-bottom"
        >
          {/* <h1>this is a toast</h1> */}
          <span>
            <i className="fa-solid fa-bell accentThreeColor"></i>
            <span className="ms-1">notification</span>
          </span>
          <span>
            1 second ago
            <i className="ms-1 fa-solid fa-x" onClick={closeToast}></i>
          </span>
        </section>

        <span style={{ fontSize: "0.9rem" }}>
          Successfully added to your cart
        </span>

        <lord-icon
          src="https://cdn.lordicon.com/rmzhcgbh.json"
          trigger="loop"
          style={{ width: "4rem", height: "4rem" }}
        ></lord-icon>
      </section>
      <main className="mainShopPage">
        <section className="container-fluid p-3">
          <section className="container d-flex justify-content-between mb-3 mt-4">
            <div>
              <FilterPage setProducts={setProducts} />
            </div>

            <div>
              <SearchProduct />
            </div>

            <div>
              {/* <span>Sort by</span> */}
              <select
                class="form-select sortByOption"
                aria-label="Default select example"
              >
                <option selected>Sort by</option>
                <option value="1">Alphabetically, A-Z</option>
                <option value="2">Price, low to high</option>
                <option value="3">Price, high to low</option>
              </select>
            </div>
          </section>

          <div className="row d-flex justify-content-center gy-3 gx-3">
            {products.map((p) => {
              return (
                <div
                  key={p.id}
                  className="card shopCard col-4"
                  style={{ width: "18rem" }}
                >
                  {p.image_url ? (
                    <img
                      onClick={() => {
                        fetchProductDetailsPage(p.id);
                      }}
                      src={p.image_url}
                      className="card-img-top shopImg"
                      alt={p.name}
                    />
                  ) : null}
                  <button
                    className="shopCartBtn customBtn"
                    onClick={() => {
                      addToCart(p.id);
                    }}
                  >
                    Add to cart
                  </button>
                  <div className="card-body text-center">
                    <section
                      onClick={() => {
                        fetchProductDetailsPage(p.id);
                      }}
                    >
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">${p.price}</p>
                    </section>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
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
            <section className="container-fluid">
              <div className="cartBody">
                {cart.map((c) => {
                  return (
                    <div
                      key={c.id}
                      className="cartCard card d-flex flex-row"
                      style={{ width: "19rem" }}
                    >
                      <section className="mt-3" style={{ width: "7rem" }}>
                        {c.product.image_url ? (
                          <img
                            // width={{ width: "5rem" }}
                            src={c.product.image_url}
                            className="card-img-top cartImg"
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

                          <section className="d-flex justify-content-between">
                            <div>
                              <label>QTY:</label>
                              <input
                                className="form-control d-inline ms-1"
                                type="text"
                                style={{ width: "2.5rem" }}
                                value={newCartQuantity[c.id]}
                                // placeholder="QTY"
                                name={c.id}
                                onChange={updateFormField}
                              />
                            </div>

                            <button
                              className="cartBtn"
                              onClick={() => {
                                updateCartQuantity(c.product.id, c.id);
                              }}
                            >
                              update
                            </button>
                          </section>
                        </section>
                      </div>
                    </div>
                  );
                })}
                <h3 className="text-start mt-4">
                  subtotal: ${subtotal.subTotalDollar}{" "}
                </h3>
              </div>
            </section>

            <section className="cartFooter mt-2 p-2">
              <p>Taxes and shipping are calculated at checkout</p>
              <button className="checkOutBtn" onClick={getStripeSessionInfo}>
                check out - ${subtotal.subTotalDollar}
              </button>
              <p>
                All transactions are processed via Strip in a secure manners
              </p>
              <img
                style={{ width: "20rem" }}
                src={Stripe}
                alt="stripe payment methods"
              />
            </section>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
