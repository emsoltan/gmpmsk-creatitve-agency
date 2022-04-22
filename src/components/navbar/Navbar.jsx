import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import HeaderLogo from "../../assets/img/logo-header.jpg";
const Nav = styled.nav`
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid var(--primary-light);
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;

  .logo {
    img {
      border-radius: 1rem;
      padding: 0.25rem 0;
      max-height: 5rem;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <a href="/">
          <img src={HeaderLogo} alt="header-logo" />
        </a>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
