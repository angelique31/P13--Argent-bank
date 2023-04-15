import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
      <div>
        <Link className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
