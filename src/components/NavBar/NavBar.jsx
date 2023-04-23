import React from "react";

import Logout from "../LogOut";
import { Nav, NavLink, NavItem, MainNavItem, LogoImage } from "./NavBarStyles";

const Navbar = ({ showLogout, displayName }) => {
  return (
    <Nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <LogoImage
          className="main-nav-logo-image"
          // src="./assets/img/argentBankLogo.png"
          src={`${process.env.PUBLIC_URL}/assets/img/argentBankLogo.png`}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <NavItem className="nav-item">
        {showLogout ? (
          <>
            <MainNavItem className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {displayName}
            </MainNavItem>
            <Logout />
          </>
        ) : (
          <NavLink className="main-nav-item" to="/login">
            <MainNavItem>
              <i className="fa fa-user-circle"></i>
              Sign In
            </MainNavItem>
          </NavLink>
        )}
      </NavItem>
    </Nav>
  );
};

export default Navbar;
