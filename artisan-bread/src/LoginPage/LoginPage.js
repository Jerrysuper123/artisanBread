import React, { useState, useContext } from "react";
import "./style.css";
import axios from "axios";
import { BASE_URL, getHTTPHeaders } from "../util";
import { useEffect } from "react";
import ProductContext from "../ProductContext";
import { useNavigate, Link } from "react-router-dom";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const { logInUserInfo, setLogInUserInfo, accessToken, setAccessToken } =
    useContext(ProductContext);
  const navigate = useNavigate();

  //when first load, get the accessToken in localStorage if available
  // useEffect(() => {
  //   const accessTokenStored = JSON.parse(localStorage.getItem("accessToken"));
  //   if (accessTokenStored) {
  //     setAccessToken(accessTokenStored);
  //   }
  // }, []);

  //if there is accessToken, fetch user profile information
  const fetchProfileInfo = async () => {
    if (accessToken !== "") {
      let response = await axios.get(
        BASE_URL + "users/profile",
        getHTTPHeaders(accessToken)
      );
      await setLogInUserInfo(response.data);
    }
  };

  //if there is loginUserinfo, navigate to shop page
  useEffect(() => {
    if (logInUserInfo.username) {
      navigate("/shop");
    }
  }, [logInUserInfo]);

  //fetch user accessToken when user clicked Login button
  const fetchAccessToken = async () => {
    try {
      let response = await axios.post(BASE_URL + "users/login", {
        email: email,
        password: password,
      });
      console.log(response.data.accessToken);
      setAccessToken(response.data.accessToken);
    } catch (e) {
      console.log(e);
    }
  };

  // only update accessToken when there is new access token, saved it
  useEffect(() => {
    localStorage.setItem("accessToken", JSON.stringify(accessToken));
  }, [accessToken]);

  useEffect(() => {
    fetchProfileInfo();
  }, [accessToken]);

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
          <section>
            <div>New Users?</div>
            <div>
              <Link to="/register">Sign up</Link>
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}
