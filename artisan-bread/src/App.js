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
import CartPage from "./CartPage/CartPage";
import PaymentSuccess from "./PaymentSuccess/PaymentSuccess";
import PaymentFail from "./PaymentFail/PaymentFail";
import React, { useState, useEffect } from "react";
import { fetchAllProducts, fetchProfileInfo } from "./util";

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

  const fetchProducts = async () => {
    let products = await fetchAllProducts();
    setProducts(products);
  };

  //fetch all products when first intialized
  useEffect(() => {
    fetchProducts();
  }, []);

  //when first load, get the accessToken in localStorage if available
  useEffect(() => {
    const accessTokenStored = JSON.parse(localStorage.getItem("accessToken"));
    if (accessTokenStored) {
      setAccessToken(accessTokenStored);
    }
    // getProfileInfo();
  }, []);

  //if accessToken is updated, we retrieved user info
  useEffect(() => {
    if (accessToken) {
      getProfileInfo();
    }
  }, [accessToken]);

  //if there is accessToken, fetch user profile information
  const getProfileInfo = async () => {
    if (accessToken) {
      let response = await fetchProfileInfo(accessToken);
      setLogInUserInfo(response.data);
    }
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
          <CartPage />
          <div className="CTAbanner p-2 d-flex justify-content-between">
            <span>
              <i className="fa-solid fa-circle-check me-1 highlightText"></i>
              100% better taste
            </span>
            <span>Wholemeal . Zero trans-fat . Organic</span>
            <span>
              <i className="fa-solid fa-truck-fast highlightText"></i>
              <span className="ms-1">Free delivery or $5 for the next day</span>
            </span>
          </div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/productdetails/:productID"
              element={<ProductDetailsPage />}
            />
            <Route path="/shop" element={<Shop />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order" element={<MyOrder />} />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="/paymentFail" element={<PaymentFail />} />
          </Routes>

          <Footer />
        </Router>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
