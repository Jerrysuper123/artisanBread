import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductContext from "../ProductContext";
import "./style.css";
export default function ProductDetailsPage(props) {
  const { productID } = useParams();
  const [product, setProduct] = useState({});

  const context = useContext(ProductContext);

  const navigate = useNavigate();

  const fetchProduct = () => {
    //when user load the base url/productDetails/:productId directly
    //there are no products to filter in the first place, so navigate to shop first
    if (!context.products.length) {
      navigate("/shop");
    }
    //there is no products at this moment;
    let tempProduct = context.getProductByID(productID);
    // console.log("temp", tempProduct);
    setProduct(tempProduct);
  };

  useEffect(() => {
    fetchProduct();
  }, [productID]);

  //update the productId in context in app.js, so that we could access add to cart function in shop.js

  const addToCart = (productId) => {
    context.setAddToCartProductId(productId);
    // navigate("/shop");
  };

  return (
    <React.Fragment>
      {product ? (
        <main className="container-fluid mb-5">
          <div className="row align-items-center">
            <img
              className="col-12 col-md-6 productDetailImg"
              src={product.image_url}
              alt={product.id}
            />
            <section className="text-start col-12 col-md-6">
              <h1>{product.name}</h1>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <p className="mt-2">${product.price}</p>
              {product.type ? <p>Type: {product.type.type}</p> : null}
              {product.flavour ? (
                <p>Flavour: {product.flavour.flavour}</p>
              ) : null}
              <p className="text-secondary productDescription p-3">
                {product.description}
              </p>
              {product.ingredients
                ? product.ingredients.map((i) => {
                    return (
                      <span key={i.id} className="me-2">
                        <i className="fa-solid fa-circle-check me-1"></i>
                        {i.ingredient}
                      </span>
                    );
                  })
                : null}
              <div className="mt-4">
                <button
                  onClick={() => {
                    // props.addToCart(product.id);
                    addToCart(product.id);
                  }}
                  className="detailBtn p-2"
                >
                  Add to cart
                </button>
              </div>
            </section>
          </div>
        </main>
      ) : null}
    </React.Fragment>
  );
}
