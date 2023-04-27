import React from "react";
import Logout from "../LogOut";
import { Nav, NavLink, NavItem, MainNavItem, LogoImage } from "./NavBarStyles";

const Navbar = ({ showLogout, displayName }) => {
  const isLoggedIn = localStorage.getItem("jwtToken") !== null;

  return (
    <Nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <LogoImage
          className="main-nav-logo-image"
          src={`${process.env.PUBLIC_URL}/assets/img/argentBankLogo.png`}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <NavItem className="nav-item">
        {showLogout && isLoggedIn ? (
          <>
            <MainNavItem className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {displayName}
            </MainNavItem>
            <Logout />
          </>
        ) : (
          <NavLink
            className="main-nav-item"
            to={isLoggedIn ? "/profile" : "/login"}
          >
            <MainNavItem>
              <i className="fa fa-user-circle"></i>
              {isLoggedIn ? displayName : "Sign In"}
            </MainNavItem>
          </NavLink>
        )}
      </NavItem>
    </Nav>
  );
};

export default Navbar;
