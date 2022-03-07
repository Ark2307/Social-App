import React from "react";
import "../Login/Login.scss";
import { Link } from "react-router-dom";

function Signup() {
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
            <input className="loginInput" placeholder="Username" type="text" />

            <input className="loginInput" placeholder="Email" type="email" />
            <input
              className="loginInput"
              placeholder="Password"
              type="password"
            />
            <input
              className="loginInput"
              placeholder="Confirm Password"
              type="password"
            />
            <button type="submit" className="loginButton">
              Register
            </button>

            <button className="loginRedirect">
              <Link to="/login" className="loginLink">
                Login into existing Account
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
