import React from "react";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import Composition from "./HeroComposition";
import bkgLG from "../../assets/img/bg-intro-mobile.svg";

const StyledIntro = styled.div`
  height: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  .MuiTypography-h1 {
    max-width: 80%;
    text-transform: uppercase;
    margin-top: 2rem;
    padding: 2rem 4rem;
    font-size: 3.8rem;
    font-weight: 900;
    letter-spacing: 4px;
    animation: moveInLeft 1s ease-in-out;
    text-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);
    border-radius: 2rem;
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
    font-size: 1.6rem;
    min-width: 25%;
    letter-spacing: 3px;
    font-weight: 600;
    margin-top: 1rem;
    animation: moveInBottom 1s ease-in-out;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);
  }
  @media screen and (max-width: 900px) {
    justify-content: space-around;
    .MuiTypography-h1 {
      font-size: 3.4rem;
    }
    .MuiTypography-body1 {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 600px) {
    justify-content: space-around;
    .MuiTypography-h1 {
      padding: 6rem 0;
      font-size: 3rem;
    }
    .MuiTypography-body1 {
      font-size: 1.2rem;
    }
  }
`;
const Intro = () => {
  return (
    <StyledIntro>
      <Typography sm variant="h1" component="h1" color="background.paper">
        GMPMSK <span>Creative Agency</span>
        <Typography variant="body1">Your brand's one-stop-shop</Typography>
      </Typography>
      <Composition />
      <Button variant="contained" color="warning" size="large">
        See More
      </Button>
    </StyledIntro>
  );
};

export default Intro;
