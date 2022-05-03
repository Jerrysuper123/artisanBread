import Footer from "./Footer/Footer";
import Navbar from "./NavBar/NavBar";
import Shop from "./Shop/Shop";
import Landing from "./Landing/Landing";
import MyAccount from "./MyAccount/MyAccount";
import CheckoutPage from "./CheckoutPage/CheckoutPage";
import ProductDetailsPage from "./ProductDetailsPage/ProductDetailsPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductContext from "./ProductContext";
import React, { useState, useEffect } from "react";

//for context use later
import { BASE_URL } from "./util";
import axios from "axios";

import "./App.css";

function App() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [products, setProducts] = useState([]);
  const [stripeSessionInfo, setStripeSessionInfo] = useState({});
  const [searchString, setSearchString] = useState("");

  const getProductByID = (productID) => {
    return products.filter((p) => p.id === parseInt(productID))[0];
  };

  const context = {
    cartQuantity,
    setCartQuantity,
    products,
    setProducts,
    getProductByID,
    stripeSessionInfo,
    setStripeSessionInfo,
    searchString,
    setSearchString,
  };

  return (
    <div className="App">
      <ProductContext.Provider value={context}>
        <Router>
          <Navbar />
          <div class="alert alert-secondary" role="alert">
            CTA and promotion
          </div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/checkout" element={<CheckoutPage />} />
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
