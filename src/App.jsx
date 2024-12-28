import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/Sidebar.css";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Landingpage from "./screens/Landingpage";
import SideBar from "./layout/SideBar";
import Home from "./layout/shared/Home";
import Explore from "./layout/shared/Explore";

// Layout component to wrap authenticated routes
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 bg-gray-900 overflow-y-auto p-4">{children}</div>
    </div>
  );
};

// Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  // Add your authentication logic here if needed
  return <DashboardLayout>{children}</DashboardLayout>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Home />
              <Explore/>
            </ProtectedRoute>
          }
        />

        {/* Nested protected routes */}
        <Route
          path="/dashboard/*"
          element={<ProtectedRoute />}
        >
         
          <Route path="settings" element={<div>Settings Page</div>} />
          <Route path="billing" element={<div>Billing Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
