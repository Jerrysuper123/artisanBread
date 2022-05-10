import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductContext from "../ProductContext";
import "./style.css";

export default function ToastMessage() {
  const { toastMessageStatus, setToastMessageStatus } =
    useContext(ProductContext);

  //   const [count, setCount] = useState(0);

  useEffect(() => {
    if (toastMessageStatus === true) {
      setTimeout(() => {
        setToastMessageStatus(false);
      }, 2000);
    }
  }, [toastMessageStatus]);

  //   useEffect(() => {
  //     if (toastMessageStatus === true) {
  //       setInterval(() => {
  //         if (count < 100) {
  //           setCount(count + 5);
  //         }
  //       }, 100);
  //     }
  //     if (toastMessageStatus === false) {
  //       setCount(0);
  //     }
  //   }, [toastMessageStatus]);

  return (
    <React.Fragment>
      {toastMessageStatus ? (
        <section
          className="toastMessage shadow cartToast "
          style={{ display: "block", width: "21rem" }}
          // style={{ display: "block" }}
        >
          <section className="cartToastHeader d-flex justify-content-between p-2 border-bottom">
            {/* <h1>this is a toast</h1> */}
            <span>
              <i class="fa-solid fa-circle-exclamation text-info"></i>
              <span className="ms-1">notification</span>
            </span>
            <span>
              1 second ago
              <i className="ms-1 fa-solid fa-x" onClick={() => {}}></i>
            </span>
          </section>
          <section
            className="progressBar bg-info"
            style={{ width: "100%" }}
          ></section>

          <section className="p-2">
            <span style={{ fontSize: "1rem" }}>
              Please register/login before add to cart!
            </span>
          </section>
        </section>
      ) : null}
    </React.Fragment>
  );
}
