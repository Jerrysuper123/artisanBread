import Footer from "./Footer/Footer";
import Navbar from "./NavBar/NavBar";
import Shop from "./Shop/Shop";
import Landing from "./Landing/Landing";
import MyAccount from "./MyAccount/MyAccount";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductContext from "./ProductContext";
import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [stateData, setStateData] = useState({
    products: [
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
    ],
  });

  const context = {
    products: () => {
      return stateData.products;
    },
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
            <Route path="/myaccount" element={<MyAccount />} />
          </Routes>

          <Footer />
        </Router>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
