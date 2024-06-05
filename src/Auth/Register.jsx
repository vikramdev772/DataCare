import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../screens/Navbar";

const Register = () => {
  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center h-screen bg-black">
      <form className="flex flex-col gap-2.5 max-w-[460px] p-5 rounded-[20px] relative bg-[transparent] text-white border border-gray-800">
        <p className="text-[28px] font-semibold tracking-tight relative flex items-center text-center text-blue-400">
          Register
        </p>
        <p className="text-[14.5px] text-gray-500">
          Signup now and get full access to our app.
        </p>
        <div className="flex w-full gap-1.5">
          <div className="relative w-full">
            <input
              className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
              name="firstName"
              placeholder="First Name"
              type="text"
              required
            />
          </div>
          <div className="relative w-full">
            <input
              className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
              name="lastName"
              placeholder="Last Name"
              type="text"
              required
            />
          </div>
        </div>
        <div className="relative">
          <input
            className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
            name="email"
            placeholder="Email"
            type="email"
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
        <div className="relative">
          <input
            className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            required
          />
        </div>
        <button
          type="submit"
          className="inline-block outline-none cursor-pointer transition-transform transition-shadow bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-3 px-5 rounded-lg shadow-md text-m"       >
          signup
        </button>
        <p className="text-center text-[14.5px] text-gray-500">
          Already have an account?{" "}
          <Link
            className="text-blue-400 hover:underline hover:text-royalblue"
            to="/login"
          >
            Signin
          </Link>
        </p>
      </form>
    </div>
    </>
  );
};

export default Register;
