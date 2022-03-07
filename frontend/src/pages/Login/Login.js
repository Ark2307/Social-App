import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h2 className="appTitle">AryanBook</h2>
          <span className="appDesc">
            A social networking site helping you connect to people all around
            the world.
          </span>
        </div>

        <div className="loginRight">
          <form className="loginForm">
            <input
              className="loginInput"
              placeholder="Email or Username"
              type="text"
            />
            <input
              className="loginInput"
              placeholder="Password"
              type="password"
            />
            <button type="submit" className="loginButton">
              Login
            </button>
            <span className="loginText">Forgot Password</span>

            <button className="loginRedirect">
              <Link to="/signup" className="loginLink">
                Create a new Account
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
