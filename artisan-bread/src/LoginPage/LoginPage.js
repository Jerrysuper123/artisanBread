import React from "react";
import "./style.css";

export default function LoginPage() {
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
          />
          <input
            type="text"
            placeholder="password"
            className="form-control mt-3"
          />
          <div class="text-center">
            <input
              type="submit"
              class="mt-3 customBtn customBtnPrimary formBtn"
              value="Login"
            />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
