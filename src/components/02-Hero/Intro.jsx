import React from "react";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import Composition from "./HeroComposition";
import bkgPattern from "../../assets/img/bg-pattern-desktop.svg";

const StyledIntro = styled.div`
  height: 90%;
  min-width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  .MuiTypography-h1 {
    min-height: 40vh;
    width: 90%;
    text-transform: uppercase;
    margin-top: 2rem;
    padding: 2rem 4rem;
    font-size: 5rem;
    font-weight: 900;
    letter-spacing: 4px;
    animation: moveInLeft 1s ease-in-out;
    text-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);
    border-radius: 2rem;
    background: url(${bkgPattern});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  span {
    display: inline-block;
  }

  .MuiTypography-body1 {
    font-size: 2.5rem;
    color: var(--primary-light);
    margin-top: 2rem;
  }

  .MuiButton-root {
    font-size: 2.5rem;
    font-weight: 600;
    min-width: 25%;
    letter-spacing: 3px;
    margin-top: 1rem;
    color: var(--primary-light);
    animation: moveInBottom 1s ease-in-out;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.35);
    a {
      color: var(--primary-light);
    }
  }
  @media screen and (max-width: 900px) {
    justify-content: space-around;
    .MuiTypography-h1 {
      font-size: 4rem;
    }
    .MuiTypography-body1 {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 600px) {
    justify-content: space-around;
    .MuiTypography-h1 {
      padding: 0 2rem;
      font-size: 3rem;
    }
  }
`;
const Intro = () => {
  return (
    <StyledIntro>
      <Typography variant="h1" component="h1" color="background.paper">
        GMPMSK <span>Creative Agency</span>
        <Typography variant="body1">Your brand's one-stop-shop</Typography>
      </Typography>
      <Composition />
      <Button variant="contained" color="warning" size="large">
        <a href="#services">See More</a>
      </Button>
    </StyledIntro>
  );
};

export default Intro;
