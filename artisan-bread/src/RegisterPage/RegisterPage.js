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
  // const [validationError, setValidationError] = useState([]);
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleUsername = (e) => {
    setUsernameError("");
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmailError("");
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPasswordError("");
    setPassword(e.target.value);
  };

  const handleConfirmedPW = (e) => {
    setConfirmPasswordError("");
    setConfirmedPW(e.target.value);
  };

  const navigate = useNavigate();
  const registerUser = async () => {
    //only after validation
    if (validationRegistration(username, email, password, confirmedPW)) {
      let response = await axios.post(BASE_URL + "users/register", {
        username: username,
        password: password,
        email: email,
      });

      //notify users that it has been successful, before redirect
      //success register, redirect to login page
      if (response.status === 200) {
        navigate("/login");
      }
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  //validate registration
  const validationRegistration = (
    usernameInput,
    emailInput,
    passwordInput,
    confirmPasswordInput
  ) => {
    let noValidateError = true;
    // console.log("username", typeof username);

    if (usernameInput === "") {
      setUsernameError("username must not be empty");
      noValidateError = false;
    }

    if (emailInput === "" || !validateEmail(emailInput)) {
      setEmailError("invalid email string");

      noValidateError = false;
    }

    let passw = /^[A-Za-z]\w{7,14}$/;
    if (passwordInput === "" || !passwordInput.match(passw)) {
      setPasswordError(
        "password must be 7 to 16 characters, contain only characters, numeric digits, underscore, and first character must be a letter"
      );
      noValidateError = false;
    }

    if (confirmPasswordInput === "" || confirmPasswordInput !== passwordInput) {
      setConfirmPasswordError("password and confirm password is not the same");
      noValidateError = false;
    }

    return noValidateError;
  };

  // To check a password between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter

  return (
    <React.Fragment>
      <main className="p-3 d-flex justify-content-center adminFormContainer align-items-center">
        <section className="userText p-3 m-5 text-light d-none d-md-block text-center">
          <h1 className="userLoginCTA">
            <span>Wholemeal </span>
            <span>. Zero trans-fat</span>
            <span>. Organic</span>
          </h1>
          <h2 className="mt-3">But 100% better taste!</h2>
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
          <span className="validationError text-center">{usernameError}</span>
          <input
            type="text"
            placeholder="email"
            className="form-control mt-3"
            onChange={handleEmail}
          />
          <span className="validationError text-center">{emailError}</span>
          <input
            type="text"
            placeholder="password"
            className="form-control mt-3"
            onChange={handlePassword}
          />
          <span className="validationError text-center">{passwordError}</span>
          <input
            type="text"
            placeholder="confirm password"
            className="form-control mt-3"
            onChange={handleConfirmedPW}
          />
          <span className="validationError text-center">
            {confirmPasswordError}
          </span>
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
