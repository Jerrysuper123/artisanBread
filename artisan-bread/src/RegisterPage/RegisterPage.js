import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../util";
import axios from "axios";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPW, setConfirmedPW] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmedPW = (e) => {
    setConfirmedPW(e.target.value);
  };

  const navigate = useNavigate();
  const registerUser = async () => {
    //only after validation
    let response = await axios.post(BASE_URL + "users/register", {
      username: username,
      password: password,
      email: email,
    });

    //notify users that it has been successful, before redirect

    if (response.status === 200) {
      navigate("/login");
    }

    //success register, redirect to login page
  };

  return (
    <React.Fragment>
      <main className="p-3 d-flex justify-content-center adminFormContainer align-items-center">
        <section className="userText p-3 m-5 text-light d-none d-md-block text-center">
          <h1>
            <span>Wholemeal </span>
            <span>. Zero trans-fat</span>
            <span>. Organic</span>
          </h1>
          <h3 className="mt-3">But 100% better taste!</h3>
        </section>

        <div className="m-5 d-flex flex-column justify-content-center align-items-center adminForm px-3">
          <img
            className="loginIcon mt-5"
            src="https://raw.githubusercontent.com/Jerrysuper123/artisanbreadsources/main/brandLogo.jpg"
            alt="icon"
          />
          <h3 className="text-center mb-3 mt-2">Register!</h3>
          <input
            type="text"
            placeholder="username"
            className="form-control mt-3"
            onChange={handleUsername}
          />
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
          <input
            type="text"
            placeholder="confirm password"
            className="form-control mt-3"
            onChange={handleConfirmedPW}
          />
          <div class="text-center mt-2">
            <input
              type="submit"
              class="mt-2 userBtn"
              value="Register"
              onClick={registerUser}
            />
          </div>
          <section className="userFormFooter mb-5 mt-3">
            Already have an account? <Link to="/login">Log in here</Link>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}
