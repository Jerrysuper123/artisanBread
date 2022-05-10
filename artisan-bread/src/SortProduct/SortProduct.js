import React from "react";
// import ProductContext from "../ProductContext";
import { useEffect, useState } from "react";

export default function SortProduct({ products, setProducts }) {
  // const { products, setProducts } = useContext(ProductContext);

  const [selectedOption, setSelectedOption] = useState("");
  const handleSelection = (e) => {
    setSelectedOption(e.target.value);
  };

  const sortATZ = () => {
    let clone = products.slice();
    let sortedProducts = clone.sort((a, b) => a.name - b.name);
    setProducts(sortedProducts);
  };

  const sortLTH = () => {
    let clone = products.slice();
    let sortedProducts = clone.sort((a, b) => a.price - b.price);
    console.log(sortedProducts);
    setProducts(sortedProducts);
  };
  const sortHTL = () => {
    let clone = products.slice();
    let sortedProducts = clone.sort((a, b) => b.price - a.price);
    console.log(sortedProducts);
    setProducts(sortedProducts);
  };

  useEffect(() => {
    if (selectedOption !== "") {
      if (selectedOption === "1") {
        sortATZ();
      }
      if (selectedOption === "2") {
        sortLTH();
      }
      if (selectedOption === "3") {
        sortHTL();
      }
    }
  }, [selectedOption]);

  return (
    <select
      className="customShopBtn"
      aria-label="Default select example"
      onChange={handleSelection}
      selected={selectedOption}
    >
      <option value="">Sort by</option>
      <option value="1">name, A-Z</option>
      <option value="2">Price,low to high</option>
      <option value="3">Price,high to low</option>
    </select>
  );
}
