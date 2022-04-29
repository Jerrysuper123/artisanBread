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
      <h1>Product Details</h1>
      {product ? (
        <ul>
          <li>ID: {product.id}</li>
          <li>Name: {product.name}</li>
          <li>Cost: {product.price}</li>
          <li>Cost: {product.description}</li>
        </ul>
      ) : null}
    </React.Fragment>
  );
}
