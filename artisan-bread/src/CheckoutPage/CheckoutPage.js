import React, { useContext } from "react";
import ProductContext from "../ProductContext";
// import Stripe from "stripe";
import { loadStripe } from "@stripe/stripe-js";

export default async function CheckoutPage() {
  const { stripeSessionInfo } = useContext(ProductContext);
  //   console.log("checkout", stripeSessionInfo);
  let sessionIdObj = { sessionId: stripeSessionInfo.sessionId };
  let publishableKey = stripeSessionInfo.publishableKey;
  const stripePromise = loadStripe(publishableKey);
  const stripe = await stripePromise;
  stripe.redirectToCheckout(sessionIdObj);
  //   console.log("-----------checkout");
  //   console.log(sessionIdObj);
  //   console.log(publishableKey);
}
