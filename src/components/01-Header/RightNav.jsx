import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  font-family: "Lato", sans-serif;

  li {
    &:hover > a {
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
      color: var(--primary-light);
      transition: all 0.3s ease-in-out;
    }
    a,
    a:before,
    a:after {
      text-decoration: none;
      cursor: pointer;
      padding: 0.75rem 1.25rem;
      border-radius: 0.25rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--primary-dark);
      margin-right: 1rem;
    }
  }

  @media (max-width: 48rem) {
    flex-flow: column nowrap;
    background: var(--primary-light);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    max-width: 10rem;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    justify-content: center;
    z-index: 200;

    li {
      margin: 3rem 0;
      a,
      a:before,
      a:after {
        cursor: pointer;
        font-weight: 700;
        transform: scale(1.1) translate(15px, 11px);
        color: var(--primary-dark);
      }
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#services"> Services</a>
      </li>
      <li>
        <a href="#contact">Contact </a>
      </li>
    </Ul>
  );
};

export default RightNav;
