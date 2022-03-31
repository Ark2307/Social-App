import React, { useRef } from "react";
import "../Login/Login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password.current.value !== confirmPassword.current.value) {
      confirmPassword.current.setCustomValidity("Passwords mismatch!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      try {
        await axios.post("http://localhost:8080/api/auth/register", user);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

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
          <form className="loginForm" onSubmit={handleRegister}>
            <input
              className="loginInput"
              placeholder="Username"
              type="text"
              required
              ref={username}
            />

            <input
              className="loginInput"
              placeholder="Email"
              type="email"
              required
              ref={email}
            />
            <input
              className="loginInput"
              placeholder="Password"
              type="password"
              required
              ref={password}
              minLength="8"
            />
            <input
              className="loginInput"
              placeholder="Confirm Password"
              type="password"
              required
              ref={confirmPassword}
              minLength="8"
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
