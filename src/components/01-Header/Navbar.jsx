import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import HeaderLogo from "../../assets/img/logo-header.jpg";
const Nav = styled.nav`
  width: 100%;
  max-height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  z-index: 200;

  .logo {
    img {
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);
      border-radius: 1rem;
      /* padding: 0.25rem 0; */
      max-height: 4rem;
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
