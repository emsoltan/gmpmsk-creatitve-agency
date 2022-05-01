import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";
import socialMedia from "../../assets/img/socialmedia2.svg";
import growth from "../../assets/img/growth.svg";
import branding from "../../assets/img/branding.svg";
import bkgPattern from "../../assets/img/bg-pattern-desktop.svg";

const StyledComposition = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem;
  border-radius: 2rem;
  animation: moveInRight 1s ease-in-out;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);
  background: url(${bkgPattern});
  background-size: cover;
  background-position: center;

  div {
    border-radius: 1rem;
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);
    padding: 1rem 0;
  }
  img {
    max-width: 5rem;
    border-radius: 0.75rem;
    background-color: var(--primary-light);
    padding: 1rem;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.35);
  }
  .MuiTypography-h6 {
    color: var(--primary-light);
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.35);
  }

  @media screen and (max-width: 600px) {
    background: url(${bkgPattern}), var(--main-gradient);
    padding: 2rem;

    div {
      padding: 1rem 0;
    }
    .MuiTypography-h6 {
      font-weight: 500;
      font-size: 1.1rem;
    }
  }
`;

const Composition = () => {
  return (
    <StyledComposition>
      <div>
        <Typography variant="h6">Social Media Ads</Typography>
        <img src={socialMedia} alt="business-growth" />
      </div>

      <div>
        <Typography variant="h6">Custom Branding </Typography>
        <img src={branding} alt="branding" />
      </div>
      <div>
        <Typography variant="h6"> Audience Boost</Typography>
        <img src={growth} alt="online-presence-boost" />
      </div>
    </StyledComposition>
  );
};

export default Composition;
