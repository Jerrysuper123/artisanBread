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
      <main className="container-fluid orderContainer p-5 d-flex flex-column align-items-center landingMainContainer">
        <section className="container">
          <h1 className="text-center">My orders</h1>
          {/* {orders.map((o) => {
          return (
            <div
              className="card orderCard mb-3 shadow"
              style={{ width: "380px" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={o.product.image_url}
                    alt={o.product.name}
                    className="img-fluid rounded-start"
                    style={{ width: "100%" }}
                    // alt="..."
                  />
                </div>
                <div className="col-md-8 pb-5">
                  <div className="card-body py-3">
                    <section className="d-flex justify-content-between">
                      <h5 className="card-title">{o.product.name}</h5>
                      <h5 className="secondaryColor">
                        {o.order_status === "unattended"
                          ? "dispatching"
                          : o.order_status}
                      </h5>
                    </section>

                    <p className="card-text">{o.order_date}</p>
                    <section className="d-flex justify-content-between secondaryColor">
                      <h5>${o.product.price}</h5>
                      <h5>X{o.quantity}</h5>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          );
        })} */}

          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>date</th>
                <th>name</th>
                <th>price</th>
                <th>QTY</th>
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
                    <td>${o.product.price}</td>
                    <td>X{o.quantity}</td>
                    <td>
                      {o.order_status === "unattended"
                        ? "dispatching"
                        : o.order_status}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </main>
    </React.Fragment>
  );
}
