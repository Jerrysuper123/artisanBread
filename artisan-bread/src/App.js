import Footer from "./Footer/Footer";
import Navbar from "./NavBar/NavBar";
import Shop from "./Shop/Shop";
import Landing from "./Landing/Landing";
import MyAccount from "./MyAccount/MyAccount";
import ProductDetailsPage from "./ProductDetailsPage/ProductDetailsPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductContext from "./ProductContext";
import React, { useState, useEffect } from "react";

//for context use later
import { BASE_URL } from "./util";
import axios from "axios";

import "./App.css";

function App() {
  const [stateData, setStateData] = useState({
    products: [
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
    ],
    cart: [
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
    ],
    cartQuantity: 0,
    changeCartStatus: false,
  });

  const fetchAllProducts = async () => {
    let response = await axios.get(BASE_URL + "products");
    // console.log(response.data);
    let clone = stateData;
    clone["products"] = response.data;
    await setStateData(clone);
    // await setProducts(response.data);
  };

  /*for local development only */
  useEffect(() => {
    fetchAllProducts();
  }, []);

  //for fetching cart
  const fetchCart = async () => {
    let response = await axios.get(BASE_URL + "cart");
    // console.log(response.data);
    let clone = stateData;
    clone["cart"] = response.data;
    await setStateData(clone);
  };

  const calculateTotalCartQuantity = (cartItems) => {
    let subQuantity = 0;
    let subTotalDollar = 0;
    for (let i of cartItems) {
      subQuantity = subQuantity + i.quantity;
      subTotalDollar = subTotalDollar + i.product.price * i.quantity;
    }
    return { subQuantity, subTotalDollar };
  };

  const updateCartQuantity = () => {
    let quantity = calculateTotalCartQuantity(stateData.cart)["subQuantity"];
    let clone = stateData;
    clone["cartQuantity"] = quantity;
    setStateData(clone);
  };

  useEffect(() => {
    updateCartQuantity();
  }, [stateData.cart]);

  // when CRUD on cart db has been triggered, we retrieve cartData again
  useEffect(() => {
    fetchCart();
    // updateCartQuantity();
  }, [stateData.changeCartStatus]);

  const context = {
    getProducts: () => {
      return stateData.products;
    },

    getCart: () => {
      return stateData.cart;
    },

    getProductByID: (productId) => {
      return stateData.products.filter((p) => p.id === parseInt(productId))[0];
    },

    updateCartQuantity: async (number) => {
      console.log("app js", number);
      let clone = stateData;
      stateData["cartQuantity"] = number;
      await setStateData(clone);
    },
    getCartQuantity: () => {
      return stateData.cartQuantity;
    },

    changedCart: () => {
      console.log("status changed");
      if (stateData.changeCartStatus === true) {
        let clone = { ...stateData };
        clone["changeCartStatus"] = false;
        setStateData(clone);

        // setChangeCartStatus(false);
      } else {
        // setChangeCartStatus(true);
        let clone = { ...stateData };
        clone["changeCartStatus"] = true;
        console.log("clone", clone);
        setStateData(clone);
      }
    },
    changeCartStatus: stateData.changeCartStatus,
  };

  return (
    <div className="App">
      <ProductContext.Provider value={context}>
        <Router>
          <Navbar cartQuantity={stateData.cartQuantity} />
          <div class="alert alert-secondary" role="alert">
            CTA and promotion
          </div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/shop"
              element={
                <Shop products={stateData.products} cart={stateData.cart} />
              }
            />
            <Route
              path="/productdetails/:productID"
              element={<ProductDetailsPage />}
            />
            <Route path="/myaccount" element={<MyAccount />} />
          </Routes>

          <Footer />
        </Router>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
