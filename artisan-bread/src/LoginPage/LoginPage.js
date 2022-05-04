import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { BASE_URL } from "../util";
import { useEffect } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const fetchAccessToken = async () => {
    let response = await axios.post(BASE_URL + "users/login", {
      email: email,
      password: password,
    });
    console.log(response.data.accessToken);
    setAccessToken(response.data.accessToken);
  };

  const [accessToken, setAccessToken] = useState("");

  //when first load, get the accessToken in localStorage
  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, []);

  // only update accessToken when there is a new one
  useEffect(() => {
    localStorage.setItem("accessToken", JSON.stringify(accessToken));
  }, [accessToken]);

  //use this when user log out
  //removeItem(): This technique is used to delete an item from localStorage based on its key.

  return (
    <React.Fragment>
      <main className="d-flex justify-content-center adminFormContainer align-items-center">
        <img
          className="formImage d-none d-md-block"
          src="https://images.unsplash.com/photo-1635341814289-55cf1490024c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
        />

        <div className="d-flex flex-column justify-content-center adminForm px-3">
          <h3 className="text-center mb-3 mt-5">Welcome Back!</h3>
          <input
            type="text"
            placeholder="email"
            className="form-control mt-3"
            onChange={handleEmail}
          />
          <input
            type="text"
            placeholder="password"
            className="form-control mt-3"
            onChange={handlePassword}
          />
          <div class="text-center">
            <input
              type="submit"
              class="mt-3 customBtn customBtnPrimary formBtn"
              value="Login"
              onClick={fetchAccessToken}
            />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
