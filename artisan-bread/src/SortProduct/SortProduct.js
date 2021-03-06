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
    let sortedProducts = clone.sort(compare);
    setProducts(sortedProducts);
  };

  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

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
      className="customShopBtn sortBtn"
      aria-label="Default select example"
      onChange={handleSelection}
      selected={selectedOption}
    >
      <option value="">Sort by</option>
      <option value="1">Name (A-Z)</option>
      <option value="2">Price (L-H)</option>
      <option value="3">Price (H-L)</option>
    </select>
  );
}
