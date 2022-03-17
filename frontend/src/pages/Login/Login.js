import React, { useContext, useRef } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { loginService } from "../../APIService";
import { AuthContext } from "../../context/AuthContext";
import { Puff } from "react-loading-icons";

function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginService(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  //console.log(user);

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
          <form className="loginForm" onSubmit={handleSubmit}>
            <input
              className="loginInput"
              placeholder="Email Id"
              type="email"
              required
              ref={email}
            />
            <input
              className="loginInput"
              placeholder="Password"
              type="password"
              required
              minLength="8"
              ref={password}
            />
            <button type="submit" disabled={isFetching} className="loginButton">
              {isFetching ? (
                <Puff fontSize="24px" color="white" speed={0.61} />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginText">Forgot Password</span>

            <button className="loginRedirect">
              <Link to="/signup" className="loginLink">
                {isFetching ? (
                  <Puff fontSize="24px" color="white" speed={0.61} />
                ) : (
                  "Sign Up"
                )}
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
