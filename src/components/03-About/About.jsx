import React from "react";
import { Typography, Grid } from "@mui/material";
import styled from "styled-components";
import AboutComposition from "./AboutComposition";

const AboutGrid = styled(Grid)`
  /* min-height: 80vh; */
  /* width: 80%; */

  margin-bottom: 25rem;
  align-items: center;
  background-color: var(--primary-grey);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.75);
  padding: 4rem 1rem 10rem 1rem;

  .MuiGrid-item#about-text {
    padding: 6rem 4rem;
    display: flex;
    margin: 0 auto;
    border-radius: 1rem;
    flex-direction: column;
    justify-content: space-evenly;
    color: var(--primary-navy);
    background: var(--primary-light);
 

    .MuiTypography-h3 {
      text-align: center;
      width: max-content;
      margin: 0 auto;
      background-color: var(--primary-light);
      color: var(--primary-light);
      background: var(--primary-navy);
      padding: 1rem 2rem;
      border-radius: 0.75rem;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 2px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.85);
      text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.35);
      margin-bottom: 1rem;
      @media screen and (max-width: 800px) {
        font-size: 2rem;
      }
    }
    .MuiTypography-body1 {
      font-size: 2rem;
      margin: 1rem 0;
    }
  }
  @media screen and (max-width: 900px) {
    height: 100%;
    .MuiTypography-h3 {
      font-size: 2rem;
    }
  }
`;

const About = () => {
  return (
    <AboutGrid container spacing="12" id="about">
      <Grid item xs={12} md={5} id="about-text">
        <Typography variant="h3">About Us</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          illum culpa nulla temporibus .
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          illum culpa nulla temporibus quod quibusdam magnam reiciendis aliquid,
          enim voluptas iste reprehenderit sint, quis veniam sunt qui similique
          architecto nesciunt.
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          illum culpa nulla temporibus quod quibusdam magnam reiciendis aliquid,
          enim voluptas iste reprehenderit sint, quis veniam sunt qui similique
          architecto nesciunt.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <AboutComposition />
      </Grid>
    </AboutGrid>
  );
};

export default About;
