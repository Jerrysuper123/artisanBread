import Footer from "./Footer/Footer";
import Navbar from "./NavBar/NavBar";
import Shop from "./Shop/Shop";
import Landing from "./Landing/Landing";
import MyOrder from "./MyOrder/MyOrder";
import CheckoutPage from "./CheckoutPage/CheckoutPage";
import ProductDetailsPage from "./ProductDetailsPage/ProductDetailsPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductContext from "./ProductContext";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import React, { useState, useEffect } from "react";
import "./App.css";

import "./App.css";

function App() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [products, setProducts] = useState([]);
  const [stripeSessionInfo, setStripeSessionInfo] = useState({});
  const [searchString, setSearchString] = useState("");
  const [logInUserInfo, setLogInUserInfo] = useState({});
  const [accessToken, setAccessToken] = useState("");
  const [addToCartProductId, setAddToCartProductId] = useState("");

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
    logInUserInfo,
    setLogInUserInfo,
    accessToken,
    setAccessToken,
    addToCartProductId,
    setAddToCartProductId,
  };

  return (
    <div className="App">
      <ProductContext.Provider value={context}>
        <Router>
          <Navbar />
          <div class="CTAbanner p-1">CTA and promotion</div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/productdetails/:productID"
              element={<ProductDetailsPage />}
            />

            {logInUserInfo.username ? (
              <React.Fragment>
                <Route path="/shop" element={<Shop />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/order" element={<MyOrder />} />
              </React.Fragment>
            ) : (
              // if user is not log in trying to access above page, redirect to
              <Route path="/:anything" element={<LoginPage />} />
            )}
          </Routes>

          <Footer />
        </Router>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
