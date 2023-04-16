import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/userSlice";
import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";

// const Name = styled.span`
//   font-size: 1.5rem;
// `;

const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("jwtToken");
    navigate("/");
  };

  return (
    <Link className="main-nav-item" to="/" onClick={handleLogout}>
      <i className="fa fa-sign-out"></i>
      Sign Out
    </Link>
  );
};

export default LogOut;
