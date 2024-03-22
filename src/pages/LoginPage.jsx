import React from "react";
import "./style.css";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="loginContainer">
      <FaTwitter className="twitterIcon" />
      <h1>Log in to Twitter</h1>
      <div className="inputBox">
        <input
          type="text"
          name=""
          placeholder="Phone number, email address"
          id=""
        />
        <input type="password" placeholder="Password" />
        <button className="btn">Log In</button>
      </div>

      <div className="loginBottom">
        <span>Forget password?</span>
        <Link to={"/signup"}>
          <span className="blueText">Sign up to Twitter</span>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
