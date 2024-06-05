import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full px-8 py-5 text-lg font-semibold bg-white bg-opacity-10 flex justify-between items-center backdrop-filter backdrop-blur-lg border-b-2 border-opacity-10 border-white">
        <Link to="/" className="text-white text-2xl font-bold">DataCenter</Link>
        <nav className="flex">
          <Link to="/login" className="text-white ml-7 transition duration-300 hover:text-blue-400 font-bold">Login</Link>
          <Link to="/signup" className="text-white ml-7 transition duration-300 hover:text-blue-400 font-bold">SignUp</Link>
        </nav>
      </header>
      <style jsx>{`
        header::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: 0.5s;
        }
        header:hover::before {
          left: 100%;
        }
      `}</style>
    </>
  )
}

export default Navbar