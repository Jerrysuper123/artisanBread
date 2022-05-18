// for shop page
import { BASE_URL } from "../util";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import ProductContext from "../ProductContext";
import FilterPage from "../FilterPage/FilterPage";
import SortProduct from "../SortProduct/SortProduct";
import SearchProduct from "../SearchProduct/SearchProduct";
import ProductCard from "./ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
// import Stripe from "../images/stripe.png";
import "./style.css";
// import CartPage from "../CartPage/CartPage";

export default function Shop() {
  const navigate = useNavigate();
  const fetchProductDetailsPage = (productId) => {
    navigate(`/productdetails/${productId}`);
  };

  // const [pageNumber, setPageNumber] = useState(1);
  const [totalPageNumber, setTotalPageNumber] = useState(0);
  const [totalPageArray, setTotalPageArray] = useState([]);

  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const handlePageNumber = (value) => {
    setCurrentPageNumber(value);
  };

  useEffect(() => {
    if (totalPageNumber === 0) {
      setTotalPageArray([]);
    } else {
      let clone = [];
      for (let i = 1; i <= totalPageNumber; i++) {
        clone.push(i);
      }
      setTotalPageArray(clone);
    }
  }, [totalPageNumber]);

  const fetchAllProducts = async () => {
    let response = await axios.get(BASE_URL + "products", {
      params: { page: currentPageNumber },
    });
    console.log(response);
    // setCurrentPageNumber(response.data.pagination.page);
    setTotalPageNumber(response.data.pagination.pageCount);
    await setProducts(response.data.pageResult);
  };

  let context = useContext(ProductContext);
  /*for local development only */
  useEffect(() => {
    context.setSpinnerShow(true);
    fetchAllProducts();
    setTimeout(() => {
      context.setSpinnerShow(false);
    }, 600);
  }, [currentPageNumber]);

  const [products, setProducts] = useState([]);

  const addToCart = (productId) => {
    context.setAddToCartProductId(productId);
    // navigate("/shop");
  };

  return (
    <React.Fragment>
      <main className="mainShopPage mt-5">
        <section className="container p-3">
          <section className="container d-flex justify-content-sm-between justify-content-center mb-3 mt-4">
            <div className="d-sm-block d-none">
              <FilterPage
                setProducts={setProducts}
                setTotalPageNumber={setTotalPageNumber}
              />
            </div>

            <div>
              <SearchProduct />
            </div>

            <div className="d-sm-block d-none">
              {/* <span>Sort by</span> */}
              <SortProduct products={products} setProducts={setProducts} />
            </div>
          </section>

          <div className="row d-flex justify-content-center gy-3 gx-3">
            {products.map((p) => {
              return (
                <React.Fragment key={p.id}>
                  <ProductCard
                    p={p}
                    addToCart={addToCart}
                    fetchProductDetailsPage={fetchProductDetailsPage}
                  />
                </React.Fragment>
              );
            })}
          </div>
          <section className="d-flex justify-content-center" data-aos="fade-up">
            {totalPageArray.map((page) => {
              return (
                <div
                  key={page}
                  className={
                    currentPageNumber === page
                      ? `pagination activePagination`
                      : `pagination`
                  }
                  onClick={() => {
                    handlePageNumber(page);
                  }}
                >
                  {page}
                </div>
              );
            })}
          </section>
        </section>
      </main>
    </React.Fragment>
  );
}
