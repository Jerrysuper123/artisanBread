import React, { useContext, useState } from "react";
import ProductContext from "../ProductContext";
import "./style.css";
export default function SearchProduct() {
  const { searchString, setSearchString } = useContext(ProductContext);
  const handleSearchString = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <span className="searchInputContainer d-flex align-items-center">
      <section className="mb-2">
        <input
          className="me-2 searchInput"
          type="search"
          placeholder="Search products..."
          aria-label="Search"
          name="searchString"
          value={searchString}
          onChange={handleSearchString}
        />
        <i className="fa-solid fa-magnifying-glass primaryColor"></i>
      </section>
    </span>
  );
}
