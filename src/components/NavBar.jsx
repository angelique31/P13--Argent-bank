import React from "react";
import { Link } from "react-router-dom";
import Logout from "./LogOut";

const Navbar = ({ showLogout, displayName }) => {
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="./assets/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className="nav-item">
        {showLogout ? (
          <>
            <div className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {displayName}
            </div>
            <Logout />
          </>
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
