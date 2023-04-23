import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  @media (min-width: 520px) {
    padding: 15px 20px;
  }
`;

export const NavLink = styled(Link)`
  font-weight: bold;
  color: #2c3e50;
  display: flex;
  align-items: center;
  margin-right: -3px;
  text-decoration: none;
  transition: transform 0.3s ease-in-out 0s;
  &:hover {
    text-decoration: underline;
    color: #00bc77;
    transform: scale(1.03);
  }
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  @media (min-width: 485px) {
    flex-direction: row;
  }
`;

export const MainNavItem = styled.div`
  text-decoration: none;
  margin-right: 1.5rem;
  display: flex;
  gap: 5px;
  margin-right: 10px;
`;

export const LogoImage = styled.img`
  max-width: 100%;
  width: 160px;
  @media (min-width: 520px) {
    width: 200px;
  }
`;
