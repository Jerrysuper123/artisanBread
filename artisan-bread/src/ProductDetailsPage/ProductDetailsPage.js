import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../ProductContext";
/* Hooks only version of ProductDetailsPage */
export default function ProductDetailsPage(props) {
  const { productID } = useParams();
  const [product, setProduct] = useState({});

  const context = useContext(ProductContext);

  const fetchProduct = () => {
    let tempProduct = context.getProductByID(productID);
    console.log("temp", tempProduct);
    setProduct(tempProduct);
  };

  useEffect(() => {
    fetchProduct();
  }, [productID]);

  return (
    <React.Fragment>
      {/* <h1>Product Details</h1> */}
      {product ? (
        // <ul>
        //   <li>ID: {product.id}</li>
        //   <li>Name: {product.name}</li>
        //   <li>Cost: {product.price}</li>
        //   <li>Cost: {product.description}</li>
        // </ul>
        <main className="container-fluid mb-5">
          <div className="row align-items-center">
            <img
              className="col-12 col-md-6"
              src={product.image_url}
              alt={product.id}
            />
            <section className="text-start col-12 col-md-6">
              <h1>{product.name}</h1>
              <p>${product.price}</p>
              {product.type ? <p>{product.type.type}</p> : null}
              {product.flavour ? <p>{product.flavour.flavour}</p> : null}
              <p>{product.description}</p>
              {product.ingredient
                ? product.ingredients.map((i) => {
                    return <span key={i.id}>{i.ingredient}</span>;
                  })
                : null}
              <div>
                <button>Add to cart</button>
              </div>
            </section>
          </div>
        </main>
      ) : null}
    </React.Fragment>
  );
}
