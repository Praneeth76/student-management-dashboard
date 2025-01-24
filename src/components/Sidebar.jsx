import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate("/"); 
  };

  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => navigate("/dashboard/students")}>Students Page</li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
