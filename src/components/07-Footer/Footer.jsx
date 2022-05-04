import React from "react";
import styled from "styled-components";
import bkgLG from "../../assets/img/bg-intro-mobile.svg";
import logo from "../../assets/img/logo-header.jpg";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const StyledFooter = styled.footer`
  width: 100%;
  height: 40vh;
  padding: 2rem 0;
  margin-top: 10rem;
  background-image: url(${bkgLG});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);

  @media screen and (max-width: 800px) {
    height: 45vh;
    justify-content: space-between;
  }

  img {
    max-height: 6rem;
    border-radius: 1rem;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);
    :hover {
      box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.4);
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    color: var(--primary-light);
    font-size: 1.6rem;
    text-transform: uppercase;
    padding: 0 2rem;
    margin: 2rem 0;
    height: 15vh;

    li {
      margin: 1rem 0;
    }
    a,
    a:before,
    a:after {
      color: var(--primary-light);
      text-decoration: none;
      cursor: pointer;
      padding: 0.5rem 1.5rem;
      border-radius: 0.5rem;
      /* box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8); */
      font-size: 2rem;
      @media screen and (max-width: 800px) {
        font-size: 1.6rem;
      }
    }
    li:hover,
    a:hover {
      background-color: var(--primary-light);
      color: var(--mag-dark);
      transition: all 0.3s ease-in-out;
    }
  }
  .footer-nav {
    letter-spacing: 3px;
    margin-top: 2rem;
    width: 70vw;
  }
  .social-nav {
    font-size: 2rem;
    margin-top: 3rem;
    flex-direction: row;
    width: 10vw;
    height: 5vh;
    li {
      background-color: var(--primary-light);
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);
      padding: 0.25rem;
      margin: 1rem;
      border-radius: 0.25rem;
      color: var(--mag-dark);
      :hover {
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 800px) {
    position: relative;
    padding: 0;
    img {
      margin-top: 3rem;
    }
    font-size: 1rem;

    .footer-nav {
      width: 10vw;
      margin: 0;
      position: relative;
      justify-content: space-around;
    }
    .social-nav {
      justify-content: space-around;
      margin-bottom: 4rem;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>

      <div>
        <ul className="footer-nav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            {" "}
            <a href="#services">Services</a>
          </li>
          <li>
            {" "}
            <a href="#press">Press</a>
          </li>
        </ul>
      </div>

      <div>
        <ul className="social-nav">
          <li>
            <FaTwitterSquare />
          </li>
          <li>
            <FaFacebookSquare />
          </li>
          <li>
            <FaInstagramSquare />
          </li>
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
