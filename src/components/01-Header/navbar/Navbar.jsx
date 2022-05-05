import React, { useState } from "react";
import StyledNav from "./StyledNav";
import HeaderLogo from "../../../assets/img/logo-header.jpg";



function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <StyledNav className="nav">
      <a href="/">
        <img src={HeaderLogo} alt="header-logo" />
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link" onClick={navToggle}>
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#about" className="nav__link" onClick={navToggle}>
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#services" className="nav__link" onClick={navToggle}>
            Services
          </a>
        </li>
    
        <li className="nav__item">
          <a href="#contact" className="nav__link" onClick={navToggle}>
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </StyledNav>
  );
}

export default Navbar;
