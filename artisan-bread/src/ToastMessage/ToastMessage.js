import React, { useContext } from "react";
import { useEffect } from "react";
import ProductContext from "../ProductContext";
import "./style.css";

export default function ToastMessage() {
  const { toastMessageStatus, setToastMessageStatus, toastMessage } =
    useContext(ProductContext);

  //   const [count, setCount] = useState(0);

  useEffect(() => {
    if (toastMessageStatus === true) {
      setTimeout(() => {
        setToastMessageStatus(false);
      }, 2200);
    }
  }, [toastMessageStatus]);

  return (
    <React.Fragment>
      {toastMessageStatus ? (
        <React.Fragment>
          <section
            className="toastMessage shadow cartToast animate__animated animate__bounceInRight"
            style={{ display: "block", width: "21rem" }}
            // style={{ display: "block" }}
          >
            <section className="cartToastHeader d-flex justify-content-between p-2 border-bottom">
              {/* <h1>this is a toast</h1> */}
              <span>
                <i className="fa-solid fa-circle-exclamation text-info"></i>
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

            <section className="p-2 animate__animated">
              <span style={{ fontSize: "1rem" }}>
                {/* Please register/login before add to cart! */}
                {toastMessage}
              </span>
            </section>
          </section>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}
