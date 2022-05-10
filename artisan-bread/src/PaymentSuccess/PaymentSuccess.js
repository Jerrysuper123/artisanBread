import React from "react";
import { Link } from "react-router-dom";
export default function PaymentSuccess() {
  return (
    <section className="landingMainContainer text-center p-5">
      <h1>You transaction has gone through successfully!</h1>
      <h3 className="text-secondary">
        All of our staff is honoured by your choice and we strive to provide
        better product & services
      </h3>
      <img
        style={{ width: "40%" }}
        src="https://raw.githubusercontent.com/Jerrysuper123/artisanbreadsources/main/brandLogo.jpg"
        alt="icon"
      />
      <h5 className="mt-3">
        Meanwhile, you can track your order by clicking below
      </h5>
      <Link to="/order">
        <button className="mt-2 btn btn-danger">Track my orders</button>
      </Link>
    </section>
  );
}
