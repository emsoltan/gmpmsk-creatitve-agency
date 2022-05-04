import React from "react";
import styled from "styled-components";
import Intro from "./Intro";
import bkgLG from "../../assets/img/bg-intro-mobile.svg";

const StyledHero = styled.div`
  width: 100%;
  height: 100vh;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url(${bkgLG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  backface-visibility: none;
  margin-bottom: 15rem;
`;

const Hero = () => {
  return (
    <StyledHero>
      <Intro />
    </StyledHero>
  );
};

export default Hero;
