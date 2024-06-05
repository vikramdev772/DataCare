import React from 'react';
import logo from "../assets/DC.png";
import { Link } from 'react-router-dom';
import "../styles/Sidebar.css";

const Logo = ({ darkTheme }) => {
  return (
    <div className={`logo ${darkTheme ? 'logo-dark' : 'logo-light'}`}>
      <Link className="logo-icon" to="/">
        <img src={logo} alt="" style={{width:"45px",height:"40px"}} />
      </Link>
    </div>
  );
};

export default Logo;
