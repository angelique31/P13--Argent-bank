// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Logout = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Supprimez le JWT du localStorage
//     localStorage.removeItem("jwtToken");

//     // Redirigez l'utilisateur vers la page d'accueil
//     navigate("/");
//   };

//   return (
//     <Link className="main-nav-item" to="/" onClick={handleLogout}>
//       <i className="fa fa-sign-out"></i>
//       Sign Out
//     </Link>
//   );
// };
// export default Logout;

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
