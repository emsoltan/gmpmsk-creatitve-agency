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
  justify-content: space-between;
  align-items: center;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);

  img {
    max-height: 7rem;
    border-radius: 1rem;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);
  }
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    color: var(--primary-light);
    font-size: 1.6rem;
    text-transform: uppercase;
    padding: 0 2rem;
    width: 50vw;

    li {
      margin-right: 1rem;
    }
    a,
    a:before,
    a:after {
      color: var(--primary-light);
      text-decoration: none;
      cursor: pointer;
      padding: 0.5rem 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);
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
    margin-top: 2rem;
    width: 15vw;
    li {
      background-color: var(--primary-light);
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);
      padding: 0.25rem;
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
      max-height: 4rem;
      margin-top: 3rem;
    }
    font-size: 1rem;

    .footer-nav {
      width: 10vw;
      margin: 0;
      position: relative;
      justify-content: space-around;
      li {
        font-size: 0.9rem;
      }
    }
    .social-nav {
      justify-content: space-around;
      /* position: absolute;
      bottom: 10%;
      left:45%; */
      margin-bottom: 4rem;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <img src={logo} alt="logo" />

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
