import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import gutalia from "../../assets/vid/vid-gutalia.mp4";
import gutalia1 from "../../assets/img/gutalia1.png";
import gutalia2 from "../../assets/img/gutalia2.png";
import gutalia3 from "../../assets/img/gutalia3.png";

const SectionGrid = styled.section`
  width: 60%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: skewY(7deg);
  height: 50%;
  background: var(--main-gradient);
  padding: 4rem 0 8rem 0;
  background-size: cover;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.85);
  border-radius: 1rem;

  .MuiTypography-h4 {
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
    @media screen and (max-width: 800px) {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0;
  }
`;

const BrandGrid = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
padding: 3rem 0;
  .gutalia-video {
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }

    video {
      grid-area: video;
      width: 50%;
      object-fit: cover;
      z-index: -1;
      margin: 0 auto;
      display: flex;
      border-radius: 1rem;
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.85);
      @media screen and (max-width: 800px) {
        width: 100%;
      }
    }
    .gutalia-images {
      grid-area: images;
      display: flex;
      flex-direction: column;
      width: 50%;

      img {
        margin: 2rem;
        border-radius: 1rem;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.85);
        @media screen and (max-width: 800px) {
          width: 100%;
          margin: 1rem auto;
        }
      }
    }
  }
`;

const VidSamples = () => {
  return (
    <SectionGrid>
      <Typography variant="h4">  Samples</Typography>

      <BrandGrid>
        <div className="gutalia-video">
          <video autoPlay loop muted playsInline>
            <source src={gutalia} type="video/mp4" />
          </video>
          <div className="gutalia-images">
            <img src={gutalia1} alt="gutali1" />
            <img src={gutalia2} alt="gutlaia2" />
            <img src={gutalia3} alt="gutlaia3" />
          </div>
        </div>
      </BrandGrid>
    </SectionGrid>
  );
};

export default VidSamples;
