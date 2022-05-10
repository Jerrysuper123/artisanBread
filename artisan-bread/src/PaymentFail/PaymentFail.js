import React from "react";
import { Link } from "react-router-dom";
export default function PaymentFail() {
  return (
    <section className="landingMainContainer text-center p-5">
      <h1>We are sorry that you transaction did not go through</h1>
      <h3 className="text-secondary">
        Do not hesitate to contact us through phone call or email and we will
        assist you on this
      </h3>
      <img
        style={{ width: "40%" }}
        src="https://raw.githubusercontent.com/Jerrysuper123/artisanbreadsources/main/brandLogo.jpg"
        alt="icon"
      />
      <h5 className="mt-3">
        Meanwhile, you can review your cart and try to checkout again
      </h5>
      <Link to="/shop">
        <button className="mt-2 btn btn-danger">Back to shop</button>
      </Link>
    </section>
  );
}
