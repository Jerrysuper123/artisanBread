import React, { useState, useContext } from "react";
import axios from "axios";
import { BASE_URL, getHTTPHeaders } from "../util";
import { useEffect } from "react";
import ProductContext from "../ProductContext";
import { useNavigate, Link } from "react-router-dom";

export default function MyAccount() {
  const context = useContext(ProductContext);
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    // console.log("fetching");
    // console.log(context.accessToken);
    // console.log(BASE_URL + "order");
    if (context.accessToken !== "") {
      let response = await axios.get(
        BASE_URL + "order",
        getHTTPHeaders(context.accessToken)
      );
      console.log(response.data.orders);
      await setOrders(response.data.orders);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <React.Fragment>
      <h1>My orders</h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>date</th>
            <th>name</th>
            <th>price</th>
            <th>QTY</th>
            <th>total</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => {
            return (
              <tr key={o.id}>
                <td>
                  {o.product.image_url ? (
                    <img
                      style={{ width: "3rem" }}
                      src={o.product.image_url}
                      alt={o.product.name}
                    />
                  ) : null}
                </td>
                <td>{o.order_date}</td>
                <td>{o.product.name}</td>
                <td>{o.product.price}</td>
                <td>{o.quantity}</td>
                <td></td>
                <td>
                  {o.order_status === "unattended" ? "paid" : o.order_status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}