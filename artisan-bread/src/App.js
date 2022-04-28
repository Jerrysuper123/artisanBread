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
                  <a href="#" className="btn btn-primary">
                    Add to cart
                  </a>
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
