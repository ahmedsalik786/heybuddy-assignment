import React from "react";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "./../assets/back-twitter 1.png";
import "./style2.css";
import { FaApple } from "react-icons/fa6";
import googleIcon from "../assets/googleIco.jpg";
import Modal from "../Component/Modal";

const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="top">
        <div className="img">
          <img src={image} alt="" />
        </div>
        <div className="signup-section">
          <FaTwitter className="twitterIcon" />
          <h1>Happening now</h1>
          <h3>Join Twitter today</h3>
          <button className="cBtn">
            <img className="gIcon" src={googleIcon} alt="" /> Sign up with
            Google
          </button>
          <button className="cBtn">{<FaApple />} Sign up with Apple</button>
          <button
            className="cBtn"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Sign up with phone or email
          </button>

          {/* modal view */}
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box border-none">
              <FaTwitter className="twitterIcon" />
              <h3 className="font-bold text-lg">Create Account</h3>
              <div className="modalInputs">
                <input type="text" placeholder="Name" name="" id="" />
                <input type="text" placeholder="Phone number" name="" id="" />
                <p className="blueText">Use Email</p>
              </div>

              <h3>Date of birth</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, earum?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, earum?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, earum?
              </p>
              <div className="selectDOB flex justify-evenly">
                <select className="options" name="Month" id="">
                  <option value="0">Month</option>
                  <option value="jan">Jan</option>
                  <option value="fav">fav</option>
                  <option value="march">march</option>
                  <option value="april">april</option>
                  <option value="may">may</option>
                  <option value="june">june</option>
                  <option value="july">july</option>
                </select>
                <select className="options" name="Day" id="">
                  <option value="0">Day</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
                <select className="options" name="year" id="">
                  <option value="jan">Year</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                  <option value="2004">2004</option>
                  <option value="2005">2005</option>
                </select>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop ">
              <button className="btn btn-primary">Next</button>
            </form>
          </dialog>
          <div>
            <p className="text">
              By singing up you agree to the{" "}
              <span className="blueText">Terms of Service</span> and{" "}
              <span className="blueText">privacy </span>
            </p>
            <p className="text">
              <span className="blueText">Policy,</span>
              including <span className="blueText">Cookie Use.</span>{" "}
            </p>
            <p className="text">
              Alrady have an account ?
              <Link to={"/"}>
                <span className="blueText">Log in</span>{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="buttom">
        <span>About</span>
        <span>Help Center</span>
        <span>Term of service</span>
        <span>Privacy Policy</span>
        <span>Cookie Policy</span>
        <span>Ads info</span>
        <span>Blog</span>
        <span>Status</span>
        <span>Carrers</span>
        <span>Brand</span>
        <span>Resources</span>
        <span>Advertsing</span>
        <span>Marketing</span>
        <span>Twitter for Business</span>
        <span>Developers</span>
        <span>Directory</span>
        <span>Settings</span>
        <span>@2021 Twitter, Inc</span>
      </div>
    </div>
  );
};

export default SignupPage;
