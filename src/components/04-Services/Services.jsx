import React from "react";
import { Grid, Typography } from "@mui/material";
import styled from "styled-components";
import ServiceCards from "./ServiceCards";
import ImageSamples from "../05-Samples/ImageSamples";
import VidSamples from "../05-Samples/VidSamples";
import VidCollection from "../05-Samples/VidCollection";

const ServicesGrid = styled(Grid)`
  min-height: 100vh;
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='80' height='85.5' patternTransform='scale(2) rotate(20)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(45, 100%, 99%, 1)'/><path d='M-20.133 4.568C-13.178 4.932-6.452 7.376 0 10c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432'  stroke-width='1' stroke='hsla(299, 70%, 40%, 1)' fill='none'/><path d='M-20.133 24.568C-13.178 24.932-6.452 27.376 0 30c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432'  stroke-width='1' stroke='hsla(229, 74%, 42%, 1)' fill='none'/><path d='M-20.133 44.568C-13.178 44.932-6.452 47.376 0 50c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432'  stroke-width='1' stroke='hsla(297, 60%, 34%, 1)' fill='none'/><path d='M-20.133 64.568C-13.178 64.932-6.452 67.376 0 70c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432'  stroke-width='1' stroke='hsla(34, 95%, 49%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  margin-bottom: 10rem;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem 15rem 2rem;
  transform: skewY(-7deg);

  .MuiTypography-h3 {
    width: max-content;
    margin: 2rem auto;
    color: var(--primary-light);
    background: var(--primary-navy);
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.85);
    text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.35);
    margin-bottom: 1rem;
    transform: skewY(7deg);
    @media screen and (max-width: 800px) {
      font-size: 1.8rem;
    }
  }

  .MuiBox-root {
    margin: 0 auto;
    width: 80%;
    height: 40vh;
    border-radius: 1rem;
    background: var(--primary-light);
    padding: 2rem;
    transform: skewY(7deg);
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.85);
    @media (max-width: 600px) {
      height: 25vh;
    }
    ::-webkit-scrollbar {
      width: 1rem;
    }
    ::-webkit-scrollbar-track {
      background: var(--primary-light);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--mag-dark);
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--tang);
    }
    img {
      border-radius: 0.5rem;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.85);
    }
  }
`;
const Services = () => {
  return (
    <ServicesGrid container spacing={2} id="services">
      <Grid item xs={12}>
        <Typography variant="h3">Our Services</Typography>
      </Grid>
      <ServiceCards />
      <VidSamples />
      <VidCollection />
      <ImageSamples />
    </ServicesGrid>
  );
};

export default Services;
