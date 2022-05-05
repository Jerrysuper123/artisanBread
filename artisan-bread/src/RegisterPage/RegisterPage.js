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
      <main className="d-flex justify-content-center adminFormContainer align-items-center">
        <img
          className="formImage d-none d-md-block"
          src="https://images.unsplash.com/photo-1635341814289-55cf1490024c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
        />

        <div className="d-flex flex-column justify-content-center adminForm px-3">
          <h3 className="text-center mb-3 mt-5">Register!</h3>
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
          <div class="text-center">
            <input
              type="submit"
              class="mt-3 customBtn customBtnPrimary formBtn"
              value="Register"
              onClick={registerUser}
            />
          </div>
          <section>Already have an account?</section>
          <Link to="/login">Log in here</Link>
        </div>
      </main>
    </React.Fragment>
  );
}
