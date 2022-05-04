import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import marketing1 from "../../assets/img/marketingplan.png";
import marketing2 from "../../assets/img/socialmedia.png";
import design from "../../assets/img/webdev.png";
import design2 from "../../assets/img/webdev.png";
import bkgPattern from "../../assets/img/bg-pattern-desktop.svg";

const StyledComposition = styled(Grid)`
  grid-gap: 2rem;
  align-items: center;
  justify-content: center;
  position: relative;
  background: url(${bkgPattern});
  background-size: cover;
  background-position: top;
  padding: 4rem 0;
  border-radius: 1rem;

  .composition__photo {

    max-width: 35rem;
    -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.8);
    border-radius: 1rem;
    z-index: 10;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    outline-offset: 1rem;
  }

  .composition__photo:hover {
    outline: 0.5rem solid var(--mag-dark);
    -webkit-transform: scale(1.05) translateY(-0.5rem);
    transform: scale(1.05) translateY(-0.5rem);
    -webkit-box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.5);
    box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.5);
    z-index: 20;
  }

  .composition:hover .composition__photo:not(:hover) {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
  }
  @media (max-width: 800px) {
    .composition__photo {
      max-width: 30rem;
    }
  }
`;

const AboutComposition = () => {
  return (
    <StyledComposition container spacing={2}>
      <img
        src={marketing1}
        alt="marketing1"
        className="composition__photo composition__photo--p0"
      />
      <img
        src={design}
        alt="design 1"
        className="composition__photo composition__photo--p1"
      />
      <img
        src={marketing2}
        alt="marketing 2"
        className="composition__photo composition__photo--p2"
      />
      <img
        src={design2}
        alt="marketing 2"
        className="composition__photo composition__photo--p3"
      />
    </StyledComposition>
  );
};

export default AboutComposition;
