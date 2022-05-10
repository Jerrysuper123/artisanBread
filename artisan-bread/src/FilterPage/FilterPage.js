import React, { useContext, useEffect } from "react";
import axios from "axios";
import ProductContext from "../ProductContext";
import { BASE_URL } from "../util";
import { useState } from "react";
import "./style.css";

export default function FilterPage(props) {
  const { searchString } = useContext(ProductContext);
  const [allTypes, setAllTypes] = useState([]);
  const [allFlavours, setAllFlavours] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);
  //   const [allIng]

  const [selectedTypeId, setSelectedTypeId] = useState("0");
  const handleSelectedType = (e) => {
    setSelectedTypeId(e.target.value);
  };

  const [selectedFlavourId, setSelectedFlavourId] = useState("0");
  const handleSelectedFlavour = (e) => {
    setSelectedFlavourId(e.target.value);
  };

  const [ingredientIds, setIngredientIds] = useState([]);
  const handleSelectedIngredientIds = (e) => {
    let targetId = parseInt(e.target.value);

    let clone = ingredientIds.slice();

    if (!clone.includes(targetId)) {
      clone.push(targetId);
      //   setIngredientIds(clone);
    } else {
      console.log("unselected", targetId);
      clone = clone.filter((id) => {
        return id !== targetId;
      });
      //   console.log(clone);
    }
    setIngredientIds(clone);
  };

  useEffect(() => {
    search();
  }, [selectedTypeId, selectedFlavourId, ingredientIds, searchString]);

  const search = async () => {
    // console.log("set type id", selectedTypeId);
    let response = await axios.post(BASE_URL + "search", {
      name: searchString === "" ? null : searchString,
      typeId: selectedTypeId,
      flavourId: selectedFlavourId,
      ingredientIds: ingredientIds.length === 0 ? null : ingredientIds,
    });
    // console.log(response.data.products);
    props.setProducts(response.data.products);
  };

  const fetchAllTypes = async () => {
    let response = await axios.get(BASE_URL + "search/alltypes");
    // console.log(response.data);
    setAllTypes(response.data.allTypes);
  };

  const fetchAllFlavours = async () => {
    let response = await axios.get(BASE_URL + "search/allflavours");
    // console.log(response.data);
    setAllFlavours(response.data.allFlavours);
  };

  const fetchAllIngredients = async () => {
    let response = await axios.get(BASE_URL + "search/allingredients");
    // console.log(response.data);
    setAllIngredients(response.data.allIngredients);
  };

  useEffect(() => {
    fetchAllTypes();
    fetchAllFlavours();
    fetchAllIngredients();
  }, []);

  return (
    <React.Fragment>
      <button
        className="customShopBtn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#productFilterPage"
        aria-controls="productFilterPage"
      >
        <i className="fa-solid fa-filter"></i>
        <span className="ms-2">Filter</span>
      </button>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="productFilterPage"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Filters:
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <section className="d-flex justify-content-center">
          <img
            style={{ width: "40%" }}
            src="https://raw.githubusercontent.com/Jerrysuper123/artisanbreadsources/main/brandLogo.jpg"
            alt="icon"
          />
        </section>

        <div className="offcanvas-body d-flex flex-column justify-content-around">
          <div>
            <h6>Type:</h6>
            <select
              className="form-select"
              aria-label="Default select example"
              value={selectedTypeId}
              onChange={handleSelectedType}
            >
              <option value="0">all types</option>
              {allTypes.length !== 0
                ? allTypes.map((t) => {
                    return (
                      <option key={t.id} value={t.id}>
                        {t.type}
                      </option>
                    );
                  })
                : null}

              {/* <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option> */}
            </select>
          </div>
          <div>
            <h6>Flavour:</h6>
            <select
              className="form-select"
              aria-label="Default select example"
              value={selectedFlavourId}
              onChange={handleSelectedFlavour}
            >
              <option value="0">all flavours</option>
              {allFlavours.length !== 0
                ? allFlavours.map((f) => {
                    return (
                      <option key={f.id} value={f.id}>
                        {f.flavour}
                      </option>
                    );
                  })
                : null}
            </select>
          </div>
          <div>
            <h6>Ingredient:</h6>
            <div
              //   class="btn-group"
              role="group"
              aria-label="Basic checkbox toggle button group"
            >
              <div>
                {allIngredients.map((i) => {
                  return (
                    <React.Fragment key={i.id}>
                      <div className="text-left">
                        <input
                          type="checkbox"
                          // class="btn-check"
                          id={i.id}
                          // autocomplete="off"
                          value={i.id}
                          name={i.flavour}
                          checked={ingredientIds.includes(i.id)}
                          onChange={handleSelectedIngredientIds}
                        />
                        <label className="ms-2" htmlFor={i.id}>
                          {i.ingredient}
                        </label>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://raw.githubusercontent.com/Jerrysuper123/artisanbreadsources/main/landingBG2.jpg"
          alt="icon"
        />
      </div>
    </React.Fragment>
  );
}
