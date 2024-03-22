// import React from "react";
// import { FaTwitter } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import image from "./../assets/back-twitter 1.png";
// import "./style2.css";
// import { FaApple } from "react-icons/fa6";
// import googleIcon from "../assets/googleIco.jpg";
// import Modal from "../Component/Modal";

// const SignupPage = () => {
//   return (
//     <div className="signup-container">
//       <div className="top">
//         <div className="img">
//           <img src={image} alt="" />
//         </div>
//         <div className="signup-section">
//           <FaTwitter className="twitterIcon" />
//           <h1>Happening now</h1>
//           <h3>Join Twitter today</h3>
//           <button className="cBtn">
//             <img className="gIcon" src={googleIcon} alt="" /> Sign up with
//             Google
//           </button>
//           <button className="cBtn">{<FaApple />} Sign up with Apple</button>
//           <button
//             className="cBtn"
//             onClick={() => document.getElementById("my_modal_2").showModal()}
//           >
//             Sign up with phone or email
//           </button>

//           {/* modal view */}
//           <dialog id="my_modal_2" className="modal">
//             <div className="modal-box border-none">
//               <FaTwitter className="twitterIcon" />
//               <h3 className="font-bold text-lg">Create Account</h3>
//               <div className="modalInputs">
//                 <input type="text" placeholder="Name" name="" id="" />
//                 <input type="text" placeholder="Phone number" name="" id="" />
//                 <p className="blueText">Use Email</p>
//               </div>

//               <h3>Date of birth</h3>
//               <p>
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Provident, earum?
//               </p>
//               <p>
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Provident, earum?
//               </p>

//               <div className="selectDOB flex justify-evenly">
//                 <select
//                   style={{ width: "30%" }}
//                   className="options"
//                   name="Month"
//                   id=""
//                 >
//                   <option value="0">Month</option>
//                   <option value="jan">Jan</option>
//                   <option value="fav">fav</option>
//                   <option value="march">march</option>
//                   <option value="april">april</option>
//                   <option value="may">may</option>
//                   <option value="june">june</option>
//                   <option value="july">july</option>
//                 </select>
//                 <select
//                   style={{ width: "20%" }}
//                   className="options"
//                   name="Day"
//                   id=""
//                 >
//                   <option value="0">Day</option>
//                   <option value="1">1</option>
//                   <option value="2">2</option>
//                   <option value="3">3</option>
//                   <option value="4">4</option>
//                   <option value="5">5</option>
//                   <option value="6">6</option>
//                 </select>
//                 <select
//                   style={{ width: "25 %" }}
//                   className="options"
//                   name="year"
//                   id=""
//                 >
//                   <option value="jan">Year</option>
//                   <option value="2000">2000</option>
//                   <option value="2001">2001</option>
//                   <option value="2002">2002</option>
//                   <option value="2003">2003</option>
//                   <option value="2004">2004</option>
//                   <option value="2005">2005</option>
//                 </select>
//               </div>
//             </div>
//             <form method="dialog" className="modal-backdrop ">
//               <button className="btn btn-primary">Next</button>
//             </form>
//           </dialog>
//           <div>
//             <p className="text">
//               By singing up you agree to the{" "}
//               <span className="blueText">Terms of Service</span> and{" "}
//               <span className="blueText">privacy </span>
//             </p>
//             <p className="text">
//               <span className="blueText">Policy,</span>
//               including <span className="blueText">Cookie Use.</span>{" "}
//             </p>
//             <p className="text">
//               Alrady have an account ?
//               <Link to={"/"}>
//                 <span className="blueText">Log in</span>{" "}
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="buttom">
//         <span>About</span>
//         <span>Help Center</span>
//         <span>Term of service</span>
//         <span>Privacy Policy</span>
//         <span>Cookie Policy</span>
//         <span>Ads info</span>
//         <span>Blog</span>
//         <span>Status</span>
//         <span>Carrers</span>
//         <span>Brand</span>
//         <span>Resources</span>
//         <span>Advertsing</span>
//         <span>Marketing</span>
//         <span>Twitter for Business</span>
//         <span>Developers</span>
//         <span>Directory</span>
//         <span>Settings</span>
//         <span>@2021 Twitter, Inc</span>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;

// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaApple, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "./../assets/back-twitter 1.png";
import googleIcon from "../assets/googleIco.jpg";

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center w-full mt-0 bg-white">
      <div className="w-screen flex flex-row overflow-hidden">
        <div className="w-2/3 h-screen">
          <img src={image} alt="" className="w-full h-full" />
        </div>
        <div className="p-5 flex flex-col justify-center items-start w-1/3">
          <FaTwitter className="text-4xl text-blue-400" />
          <h1 className="mb-2 text-3xl font-semibold text-gray-800">
            Happening now
          </h1>
          <h3 className="text-2xl font-semibold">Join Twitter today</h3>
          <button className="cBtn flex items-center justify-center bg-white border border-grey p-2 mb-2 rounded-full cursor-pointer w-2/3">
            <img className="h-2.5 mr-2" src={googleIcon} alt="" /> Sign up with
            Google
          </button>
          <button className="flex items-center justify-center bg-white border border-grey p-2 mb-2 rounded-full cursor-pointer w-2/3">
            <FaApple className="mr-2" /> Sign up with Apple
          </button>
          <button
            className="bg-white border border-grey p-2 mb-2 rounded-full cursor-pointer w-2/3"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Sign up with phone or email
          </button>
          {/* modal view */}
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box border-none">
              <FaTwitter className="twitterIcon" />
              <h3 className="font-bold text-lg">Create Account</h3>
              <div className="modalInputs  flex flex-col mb-5">
                <input
                  className="border border-black rounded px-4 py-2 mb-3"
                  type="text"
                  placeholder="Phone number, email address"
                />
                <input
                  className="border border-black rounded px-4 py-2 mb-3"
                  type="password"
                  placeholder="Password"
                />
                <p className="blueText">Use Email</p>
              </div>

              <h2 className="text-black text-lg font-bold">Date of birth</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, earum?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, earum?
              </p>

              <div className="selectDOB flex m-5 justify-evenly">
                <select
                  style={{ width: "30%" }}
                  className="border rounded p-1"
                  name="Month"
                  id=""
                >
                  <option value="0">Month</option>
                  <option value="jan">Jan</option>
                  <option value="fav">fav</option>
                  <option value="march">march</option>
                  <option value="april">april</option>
                  <option value="may">may</option>
                  <option value="june">june</option>
                  <option value="july">july</option>
                </select>
                <select
                  style={{ width: "20%" }}
                  className="border rounded p-1"
                  name="Day"
                  id=""
                >
                  <option value="0">Day</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
                <select
                  style={{ width: "25 %" }}
                  className="border rounded p-1"
                  name="year"
                  id=""
                >
                  <option value="jan">Year</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                  <option value="2004">2004</option>
                  <option value="2005">2005</option>
                </select>
              </div>
              <button className="btn btn-primary bg-blue-400  text-white rounded-3xl w-full">
                Next
              </button>
            </div>
            {/* <form method="dialog" className="modal-backdrop ">
              <button className="btn btn-primary">Next</button>
            </form> */}
          </dialog>
          <div>
            <p className="font-semibold text-sm">
              By signing up you agree to the{" "}
              <span className="text-blue-400 cursor-pointer">
                Terms of Service
              </span>{" "}
              and <span className="text-blue-400">privacy</span>
            </p>
            <p className="font-semibold text-sm">
              <span className="text-blue-400">Policy,</span> including{" "}
              <span className="text-blue-400">Cookie Use.</span>
            </p>
            <p className="font-semibold text-sm">
              Already have an account?{" "}
              <Link to={"/"}>
                <span className="text-blue-400">Log in</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2.5 text-xs">
        <span>About</span>
        {/* Add more spans as per the original content */}
        <span>About</span>
        <span>Help Center</span>
        <span>Term of service</span>
        <span>Privacy Policy</span>
        <span>Cookie Policy</span>
        <span>Ads info</span>
        <span>Blog</span> <span>Status</span>
        <span>Carrers</span> <span>Brand</span> <span>Resources</span>
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
