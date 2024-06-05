import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./styles/Sidebar.css";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Landingpage from "./screens/Landingpage";


const App = () => {
  return (
    <>
   
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landingpage/>}/>  
      <Route path="/signup" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sidebar" element={<Sidebar/>}/>
      </Routes>
    </BrowserRouter>
    </>
    
  );
  
};

export default App;
