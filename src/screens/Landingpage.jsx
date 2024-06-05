import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Landingpage = () => {
  return (
    <>
    <Navbar/>
    <div
      className="bg-cover bg-center min-h-screen flex justify-center items-center"
      style={{
        backgroundColor:"black"
      }}
    >
      <div className="text-center text-white">
        <h1 className="text-[90px] font-bold mb-4">All in one cloud.</h1>
        <h2 className="text-2xl mb-4">
          Develop, train, and scale AI models with Data Care.
        </h2>
        <br />
        <Link className="inline-block outline-none cursor-pointer transition-transform transition-shadow bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-3 px-5 rounded-full shadow-md text-md"
        to="/sidebar"
        >
          Get started &gt;
        </Link>
      </div>
    </div>
    </>
  );
};

export default Landingpage;