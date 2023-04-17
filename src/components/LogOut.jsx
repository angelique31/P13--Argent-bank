import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/userSlice";
import { Link, useNavigate } from "react-router-dom";

//import du css de la navBar:
import { NavLink } from "./NavBar";

const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("jwtToken");
    navigate("/");
  };

  return (
    <NavLink className="main-nav-item" to="/" onClick={handleLogout}>
      <i className="fa fa-sign-out"></i>
      Sign Out
    </NavLink>
  );
};

export default LogOut;
