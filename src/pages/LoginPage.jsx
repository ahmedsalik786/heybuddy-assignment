// import React from "react";
// import "./style.css";
// import { FaTwitter } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const LoginPage = () => {
//   return (
//     <div className="loginContainer flex flex-col ">
//       <FaTwitter className="twitterIcon" />
//       <h1>Log in to Twitter</h1>
//       <div className="inputBox flex flex-col ">
//         <input
//           className="border-black"
//           type="text"
//           name=""
//           placeholder="Phone number, email address"
//           id=""
//         />
//         <input type="password" placeholder="Password" />
//         <button className=" btn btn-primary">Log In</button>
//       </div>

//       <div className="loginBottom">
//         <span>Forget password?</span>
//         <Link to={"/signup"}>
//           <span className="blueText">Sign up to Twitter</span>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React from "react";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";

const LoginPage = () => {
  return (
    <div className="loginContainer flex flex-col items-center justify-center min-h-screen">
      <FaTwitter className="twitterIcon text-blue-500 text-4xl mb-5" />
      <h1 className="text-xl font-bold mb-5">Log in to Twitter</h1>
      <div className="inputBox flex flex-col items-center mb-5">
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
        <button className="btn btn-primary rounded-3xl w-full px-4 py-2 bg-blue-500 text-white ">
          Log In
        </button>
      </div>

      <div className="loginBottom blueText">
        <span className="mr-2">Forget password?</span>
        <Link to={"/signup"} className="blueText">
          Sign up to Twitter
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
