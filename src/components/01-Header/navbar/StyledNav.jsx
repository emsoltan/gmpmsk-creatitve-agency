import React from "react";
import styled from "styled-components";

const NavStyles = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  background: var(--primary-light);
  z-index: 1000;
  position: fixed;
  width: 100%;
  padding: 0 4rem;
  margin-bottom: 12vh;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8);

  @media screen and (max-width: 800px) {
    padding: 0 2rem 2rem 0;
    height: 12vh;
  }
  img {
    width: 15rem;
    border-radius: 1rem;
  }
  a,
  a:before,
  a:after {
    cursor: pointer;
    transform: scale(1.1) translate(15px, 11px);
    color: var(--primary-dark);
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 1rem 1.5rem;
    border-radius: 0.25rem;
  }
  li {
    &:hover > a {
      color: var(--primary-light);
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8);
      background: var(--main-gradient);

      background: linear-gradient(
        180deg,
        hsla(308, 100%, 25%, 1) 0%,
        hsla(213, 38%, 24%, 1) 68%,
        hsla(308, 100%, 25%, 1) 100%
      );

      background: -moz-linear-gradient(
        180deg,
        hsla(308, 100%, 25%, 1) 0%,
        hsla(213, 38%, 24%, 1) 68%,
        hsla(308, 100%, 25%, 1) 100%
      );

      background: -webkit-linear-gradient(
        180deg,
        hsla(308, 100%, 25%, 1) 0%,
        hsla(213, 38%, 24%, 1) 68%,
        hsla(308, 100%, 25%, 1) 100%
      );
      transition: all 0.3s ease-in-out;
    }
  }
  .nav__brand {
    text-transform: uppercase;
  }

  .nav__menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 3rem;
  }

  .nav__toggler {
    display: none;
    div {
      width: 2.5rem;
      height: 0.2rem;
      margin: 0.4rem;
      background: var(--mag-dark);
      transition: 0.3s ease-in;
    }
  }

  @media screen and (max-width: 768px) {
    .nav__toggler {
      display: block;
      cursor: pointer;
    }
    .nav__menu {
      position: fixed;
      top: 7vh;
      right: 0;
      height: 93vh;
      width: 30vw;
      background: var(--primary-light);
      flex-direction: column;
      transform: translateX(100%);
      transition: 0.5s ease-in;
    }
  }
  .nav__active {
    transform: translateX(0%);
  }

  /* Toggle Icon Animation */

  .toggle .line1 {
    transform: rotate(-45deg) translate(-4px, 5px);
  }
  .toggle .line2 {
    opacity: 0;
  }
  .toggle .line3 {
    transform: rotate(45deg) translate(-4px, -5px);
  }
`;

const StyledNav = (props) => {
  return <NavStyles>{props.children}</NavStyles>;
};

export default StyledNav;
