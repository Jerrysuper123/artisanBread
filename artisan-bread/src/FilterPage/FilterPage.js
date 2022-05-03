import React, { useContext } from "react";
import axios from "axios";
import ProductContext from "../ProductContext";

export default function FilterPage() {
  const { setProducts } = useContext(ProductContext);
  return (
    <React.Fragment>
      <button
        className="btn btn-secondary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#productFilterPage"
        aria-controls="productFilterPage"
      >
        Filter
      </button>

      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
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
        <div className="offcanvas-body d-flex flex-column justify-content-around">
          <div>
            <h6>Type:</h6>
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div>
            <h6>Flavour:</h6>
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
                <input
                  type="checkbox"
                  class="btn-check"
                  id="btncheck1"
                  autocomplete="off"
                />
                <label className="btn btn-outline-primary" for="btncheck1">
                  Checkbox 1
                </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  class="btn-check"
                  id="btncheck2"
                  autocomplete="off"
                />
                <label className="btn btn-outline-primary" for="btncheck2">
                  Checkbox 2
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
