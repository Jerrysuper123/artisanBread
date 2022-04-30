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
  });

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

    updateCartQuantity: (number) => {
      let clone = stateData;
      stateData["cartQuantity"] = number;
      setStateData(clone);
    },
    getCartQuantity: () => {
      return stateData.cartQuantity;
    },
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
