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

  let context = useContext(ProductContext);

  // useEffect(() => {
  //   if (context.products.length) {
  //     setProducts(context.products);
  //   }
  // }, [context.products]);

  // useEffect(() => {
  //   context.setProducts(products);
  // }, [products]);

  // cart info
  // const [cart, setCart] = useState([]);

  // const [subtotal, setsubtotal] = useState({
  //   subQuantity: 0,
  //   subTotalDollar: 0,
  // });

  // useEffect(() => {
  //   context.setCartQuantity(subtotal.subQuantity);
  // }, [subtotal]);

  // const calculateTotalCartQuantity = (cartItems) => {
  //   let subQuantity = 0;
  //   let subTotalDollar = 0;
  //   for (let i of cartItems) {
  //     subQuantity = subQuantity + i.quantity;
  //     subTotalDollar = subTotalDollar + i.product.price * i.quantity;
  //   }
  //   return { subQuantity, subTotalDollar };
  // };

  // useEffect(() => {
  //   setsubtotal(calculateTotalCartQuantity(cart));
  // }, [cart]);

  // //for fetching cart
  // const fetchCart = async () => {
  //   if (context.accessToken !== "") {
  //     let response = await axios.get(
  //       BASE_URL + "cart",
  //       getHTTPHeaders(context.accessToken)
  //     );
  //     // console.log(response.data);
  //     // let clone = stateData;
  //     // clone["cart"] = response.data;
  //     await setCart(response.data);
  //   }
  // };

  // const [changeCartStatus, setChangeCartStatus] = useState(false);
  // const changedCart = () => {
  //   if (changeCartStatus === true) {
  //     setChangeCartStatus(false);
  //   } else {
  //     setChangeCartStatus(true);
  //   }
  // };
  // // when CRUD on cart db has been triggered, we retrieve cartData again
  // useEffect(() => {
  //   fetchCart();
  // }, [changeCartStatus]);

  // const [addedCartNotification, setAddedCartNotification] = useState("none");

  // const addToCart = async (productId) => {
  //   // console.log("added to cart from details", productId);
  //   if (context.accessToken !== "") {
  //     try {
  //       let response = await axios.get(
  //         BASE_URL + "cart/" + productId + "/add",
  //         getHTTPHeaders(context.accessToken)
  //       );
  //       // console.log(response);
  //       setAddedCartNotification("block");

  //       if (response) {
  //         changedCart();
  //         setTimeout(() => {
  //           setAddedCartNotification("none");
  //         }, 1000);
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // };

  // const isMounted = React.useRef(false);

  // //add to cart from product details side
  // useEffect(() => {
  //   //do not run add to cart the first time when shop component is loaded
  //   if (!isMounted.current) {
  //     isMounted.current = true;
  //   } else {
  //     if (context.addToCartProductId !== "") {
  //       addToCart(context.addToCartProductId);
  //       context.setAddToCartProductId("");
  //     }
  //   }
  // }, [context.addToCartProductId]);

  // const closeToast = () => {
  //   setAddedCartNotification("none");
  // };

  // const removeCart = async (productId) => {
  //   if (context.accessToken !== "") {
  //     let response = await axios.get(
  //       BASE_URL + "cart/" + productId + "/remove",
  //       getHTTPHeaders(context.accessToken)
  //     );
  //     console.log(response);
  //     if (response) {
  //       changedCart();
  //     }
  //   }
  // };

  // const [newCartQuantity, setNewCartQuantity] = useState({});

  // const updateFormField = (e) => {
  //   if (!e.target.name) {
  //     return;
  //   }
  //   let formField = e.target.name;
  //   let formValue = e.target.value;
  //   console.log("cartItem", formField);
  //   console.log("formValue", formValue);
  //   setNewCartQuantity({
  //     [formField]: e.target.value,
  //   });
  // };

  // const updateCartQuantity = async (productId, cartId) => {
  //   if (context.accessToken !== "") {
  //     let quantity = newCartQuantity[cartId];
  //     console.log(newCartQuantity);
  //     let url = `${BASE_URL}cart/${productId}/quantity/update`;
  //     let response = await axios.post(
  //       url,
  //       {
  //         newQuantity: quantity,
  //       },
  //       getHTTPHeaders(context.accessToken)
  //     );
  //     // console.log(response);
  //     if (response) {
  //       changedCart();
  //     }
  //   }
  // };

  // const getStripeSessionInfo = async () => {
  //   if (context.accessToken !== "") {
  //     let response = await axios.get(
  //       BASE_URL + "checkout",
  //       getHTTPHeaders(context.accessToken)
  //     );
  //     // console.log(response.data);
  //     context.setStripeSessionInfo(response.data);
  //     navigate("/checkout");
  //   }
  // };

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
              <FilterPage setProducts={setProducts} />
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
                <ProductCard
                  p={p}
                  addToCart={addToCart}
                  fetchProductDetailsPage={fetchProductDetailsPage}
                />
              );
            })}
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
