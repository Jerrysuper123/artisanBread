import React, { useContext, useState } from "react";
import ProductContext from "../ProductContext";

export default function SearchProduct() {
  const { searchString, setSearchString } = useContext(ProductContext);
  const handleSearchString = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <span className="filterSearchInput d-flex align-items-center">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        className="me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        name="searchString"
        value={searchString}
        onChange={handleSearchString}
      />
    </span>
  );
}
