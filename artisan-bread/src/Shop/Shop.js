// for shop page
import { BASE_URL } from "../util";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import ProductContext from "../ProductContext";
// import ProductDetailsPage from "../ProductDetailsPage/ProductDetailsPage";
import { useNavigate } from "react-router-dom";
export default function Shop() {
  let context = useContext(ProductContext);

  const navigate = useNavigate();
  const fetchProductDetailsPage = (productId) => {
    navigate(`/productdetails/${productId}`);
  };
  // console.log("context get product", context.getProducts());
  // for shop page
  const [products, setProducts] = useState([
    {
      id: 10,
      name: "apple",
      price: 25,
      description: "asds",
      flavour_id: 1,
      type_id: 1,
      image_url: "",
      flavour: {
        id: 1,
        flavour: "sweet",
      },
      type: {
        id: 1,
        type: "toast",
      },
      ingredients: [
        {
          id: 1,
          ingredient: "processed",
          _pivot_product_id: 10,
          _pivot_ingredient_id: 1,
        },
        {
          id: 2,
          ingredient: "flour",
          _pivot_product_id: 10,
          _pivot_ingredient_id: 2,
        },
      ],
    },
    {
      id: 11,
      name: "bean",
      price: 22,
      description: "dads",
      flavour_id: 1,
      type_id: 2,
      image_url: null,
      flavour: {
        id: 1,
        flavour: "sweet",
      },
      type: {
        id: 2,
        type: "baguette",
      },
      ingredients: [
        {
          id: 1,
          ingredient: "processed",
          _pivot_product_id: 11,
          _pivot_ingredient_id: 1,
        },
        {
          id: 2,
          ingredient: "flour",
          _pivot_product_id: 11,
          _pivot_ingredient_id: 2,
        },
      ],
    },
    {
      id: 14,
      name: "Jerry Chen",
      price: 23,
      description: "asdsd",
      flavour_id: 1,
      type_id: 1,
      image_url: null,
      flavour: {
        id: 1,
        flavour: "sweet",
      },
      type: {
        id: 1,
        type: "toast",
      },
      ingredients: [
        {
          id: 1,
          ingredient: "processed",
          _pivot_product_id: 14,
          _pivot_ingredient_id: 1,
        },
      ],
    },
    {
      id: 15,
      name: "wheat",
      price: 13,
      description: "adad",
      flavour_id: 1,
      type_id: 1,
      image_url:
        "http://res.cloudinary.com/dzpqaf348/image/upload/v1650963584/iclzlxlrvlsrydu6mnkf.png",
      flavour: {
        id: 1,
        flavour: "sweet",
      },
      type: {
        id: 1,
        type: "toast",
      },
      ingredients: [
        {
          id: 2,
          ingredient: "flour",
          _pivot_product_id: 15,
          _pivot_ingredient_id: 2,
        },
      ],
    },
    {
      id: 16,
      name: "code",
      price: 22,
      description: "adasd",
      flavour_id: 1,
      type_id: 1,
      image_url:
        "http://res.cloudinary.com/dzpqaf348/image/upload/v1651040072/mi7hoxf9gzkwslher8fn.png",
      flavour: {
        id: 1,
        flavour: "sweet",
      },
      type: {
        id: 1,
        type: "toast",
      },
      ingredients: [
        {
          id: 1,
          ingredient: "processed",
          _pivot_product_id: 16,
          _pivot_ingredient_id: 1,
        },
      ],
    },
    {
      id: 17,
      name: "bulb",
      price: 23,
      description: "funny ",
      flavour_id: 1,
      type_id: 1,
      image_url:
        "http://res.cloudinary.com/dzpqaf348/image/upload/v1651042657/zojbctdeqfkielvnweqx.jpg",
      flavour: {
        id: 1,
        flavour: "sweet",
      },
      type: {
        id: 1,
        type: "toast",
      },
      ingredients: [
        {
          id: 2,
          ingredient: "flour",
          _pivot_product_id: 17,
          _pivot_ingredient_id: 2,
        },
      ],
    },
    {
      id: 18,
      name: "orange",
      price: 25,
      description: "asds",
      flavour_id: 1,
      type_id: 1,
      image_url: "",
      flavour: {
        id: 1,
        flavour: "sweet",
      },
      type: {
        id: 1,
        type: "toast",
      },
      ingredients: [],
    },
  ]);

  const fetchAllProducts = async () => {
    let response = await axios.get(BASE_URL + "products");
    console.log(response.data);
    setProducts(response.data);
  };

  /*for local development only */
  // useEffect(() => {
  //   fetchAllProducts();
  // }, []);

  /*cart page */
  const [cart, setCart] = useState([
    {
      id: 38,
      quantity: 1,
      user_id: 2,
      product_id: 18,
      product: {
        id: 18,
        name: "orange",
        price: 25,
        description: "asds",
        flavour_id: 1,
        type_id: 1,
        image_url:
          "http://res.cloudinary.com/dzpqaf348/image/upload/v1651042657/zojbctdeqfkielvnweqx.jpg",
        flavour: {
          id: 1,
          flavour: "sweet",
        },
        type: {
          id: 1,
          type: "toast",
        },
      },
    },
  ]);

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
  // useEffect(() => {
  //   fetchCart();
  // }, [changeCartStatus]);
  return (
    <React.Fragment>
      <h1>Shop</h1>
      {/* for shop page */}
      <section className="container-fluid p-3">
        <div className="row d-flex justify-content-center gy-3 gx-3">
          {context.getProducts().map((p) => {
            return (
              <div
                onClick={() => {
                  fetchProductDetailsPage(p.id);
                }}
                key={p.id}
                className="card col-4"
                style={{ width: "18rem" }}
              >
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
          {context.getCart().map((c) => {
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
    </React.Fragment>
  );
}
