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
      background: var(--primary-light);
      color: var(--primary-dark);
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
      color: var(--primary-light);
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
    min-width: 12rem;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    justify-content: center;
    z-index: 200;

    li {
      margin: 3rem 0;
      &:hover > a {
        background: var(--primary-dark);
        color: var(--primary-light);
      }
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
        <a href="/about">About Us</a>
      </li>
      <li>
        <a href="/services"> Services</a>
      </li>
      <li>
        <a href="/contact">Contact Us</a>
      </li>
    </Ul>
  );
};

export default RightNav;
