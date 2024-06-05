import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../screens/Navbar";

const Login = () => {
  return (
    <>
     <Navbar/>
    <div className="flex items-center justify-center h-screen bg-black">
      <form className="flex flex-col gap-2.5 max-w-[500px] p-5 rounded-[20px] relative bg-[transparent] text-white border border-gray-800">
        <center>
          <p className="text-[28px] font-semibold tracking-tight relative flex items-center  text-blue-400 text-center">
            <span className="text-blue-400">Welcome back to Data Care</span>
          </p>
        </center>

        <p className="text-[14.5px] text-gray-500 text-center">
          Log in to your account
        </p>
        <div className="relative">
          <input
            className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
            name="email"
            placeholder="Email"
            type="text"
            required
          />
        </div>
        <div className="relative">
          <input
            className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
            name="password"
            placeholder="Password"
            type="password"
            required
          />
        </div>
        {/* <div className="text-right">
          <a className="text-sm text-[#7747ff]" href="#">
            Forgot your password?
          </a>
        </div> */}
        <button
          type="submit"
          className="inline-block outline-none cursor-pointer transition-transform transition-shadow bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-3 px-5 rounded-lg shadow-md text-m"
        >
          signin
        </button>
        <p className="text-center text-[14.5px] text-gray-500 mt-4">
          Don’t have an account yet?{" "}
          <Link
            className="text-blue-400 hover:underline hover:text-royalblue"
            to="/signup"
          >
            Sign up!
          </Link>
        </p>
      </form>
    </div>
    </>
  );
};

export default Login;
