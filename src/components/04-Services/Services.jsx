import React from "react";
import { Grid, Typography } from "@mui/material";
import styled from "styled-components";
import ServiceCards from "./ServiceCards";
import ImageSamples from "../05-Samples/ImageSamples";
import VidSamples from "../05-Samples/VidSamples";
import VidCollection from "../05-Samples/VidCollection";

const ServicesGrid = styled(Grid)`
  min-height: 100vh;
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='120' height='60' patternTransform='scale(5) rotate(20)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(34, 95%, 49%, 1)'/><path d='M-50.129 12.685C-33.346 12.358-16.786 4.918 0 5c16.787.082 43.213 10 60 10s43.213-9.918 60-10c16.786-.082 33.346 7.358 50.129 7.685'  stroke-width='1' stroke='hsla(45, 100%, 99%, 1)' fill='none'/><path d='M-50.129 32.685C-33.346 32.358-16.786 24.918 0 25c16.787.082 43.213 10 60 10s43.213-9.918 60-10c16.786-.082 33.346 7.358 50.129 7.685'  stroke-width='1' stroke='hsla(297, 60%, 34%, 1)' fill='none'/><path d='M-50.129 52.685C-33.346 52.358-16.786 44.918 0 45c16.787.082 43.213 10 60 10s43.213-9.918 60-10c16.786-.082 33.346 7.358 50.129 7.685'  stroke-width='1' stroke='hsla(229, 74%, 42%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  margin-bottom: 10rem;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem 15rem 2rem;
  transform: skewY(-7deg);

  .MuiTypography-h3 {
    width: max-content;
    margin: 2rem auto;
    background-color: var(--primary-light);
    color: var(--primary-navy);
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.85);
    text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.35);
    margin-bottom: 1rem;
    transform: skewY(7deg);
    @media screen and (max-width:800px){
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
