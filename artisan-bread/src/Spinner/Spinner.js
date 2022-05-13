import React, { useContext, useState } from "react";
import "./style.css";
import logo from "../media/logo.png";
import ProductContext from "../ProductContext";
import { useEffect } from "react";
export default function Spinner() {
  const { spinnerShow } = useContext(ProductContext);
  const [spinnerStatus, setSpinnerStatus] = useState(false);
  useEffect(() => {
    if (spinnerShow === true) {
      setSpinnerStatus(true);
    } else {
      setSpinnerStatus(false);
    }
  }, [spinnerShow]);

  return (
    <React.Fragment>
      {spinnerStatus ? (
        <section className="spinnerBg d-flex flex-column justify-content-center align-items-center">
          <img className="loaderIcon" src={logo} alt="icon" />
          <span className="loader"></span>
        </section>
      ) : null}
    </React.Fragment>
  );
}
