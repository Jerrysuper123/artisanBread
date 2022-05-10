import React, { useContext, useState } from "react";
import ProductContext from "../ProductContext";
import "./style.css";
export default function SearchProduct() {
  const { searchString, setSearchString } = useContext(ProductContext);
  const handleSearchString = (e) => {
    setSearchString(e.target.value);
  };

  const [showSearchBar, setShowSearchBar] = useState("none");
  const [showSearchBtn, setShowSearchBtn] = useState("block");
  const toggleBtweenBtnBar = () => {
    if (showSearchBar === "none") {
      setShowSearchBar("block");
    } else {
      setShowSearchBar("none");
    }

    if (showSearchBtn === "none") {
      setShowSearchBtn("block");
    } else {
      setShowSearchBtn("none");
    }
  };
  return (
    <React.Fragment>
      <div style={{ display: showSearchBtn }} onClick={toggleBtweenBtnBar}>
        <section className="clickableSearch d-flex justify-content-center align-items-center">
          <i className="fa-solid fa-magnifying-glass"></i>
        </section>
      </div>

      <section style={{ display: showSearchBar }}>
        <span className="searchInputContainer d-flex align-items-center">
          <section className="mb-1">
            <input
              className="me-2 searchInput"
              type="search"
              placeholder="Search products..."
              aria-label="Search"
              name="searchString"
              value={searchString}
              autoFocus
              onChange={handleSearchString}
              onBlur={toggleBtweenBtnBar}
            />
            <i className="fa-solid fa-magnifying-glass searchGlass"></i>
          </section>
        </span>
      </section>
    </React.Fragment>
  );
}
