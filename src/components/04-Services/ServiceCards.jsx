import React from "react";
import styled from "styled-components";
import socialAds from "../../assets/img/social-media.jpg";
import branding from "../../assets/img/branding.jpg";
import seo from "../../assets/img/seo-boost.jpg";
import design from "../../assets/img/designs.jpg";
import { Typography } from "@mui/material";

const Cards = styled.div`
  width: 60%;
  margin: 3rem auto;
  display: grid;
  grid-template-areas:
    "serice1 service2"
    "service3 service4";
  justify-items: center;
  align-items: center;
  grid-gap: 2rem;
  transform: skewY(7deg);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.85);
  background:var(--main-gradient);
  padding: 4rem 0;
  border-radius: 1rem;

  @media (max-width: 900px) {
    grid-template-areas:
      "service1"
      "service2"
      "service3"
      "service4";
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  .service {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--primary-light);
    border-radius: 1rem;
    width: 80%;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.85);
    animation: moveInBottom 1s ease-in-out;

    .service1 {
      grid-area: service1;
    }
    .service2 {
      grid-area: service2;
    }
    .service3 {
      grid-area: service3;
    }
    .service4 {
      grid-area: service4;
    }
    img {
      width: 80%;
      border-radius: 1rem 1rem 0 0;
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.85);
    }
    .MuiTypography-h5 {
      background: var(--main-gradient);
      color: var(--primary-light);
      padding: 1.5rem 0;
      margin-bottom: 1rem;
      border-radius: 0 0 0.75rem 0.75rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 1.8rem;
      font-weight: 700;
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.85);
      text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.35);
      width: 80%;
      text-align: center;
    }
    .MuiTypography-body1 {
      font-size: 1.8rem;
      padding: 2rem 3rem;
      text-align: center;
    }
  }
`;

const ServiceCards = () => {
  return (
    <Cards>
      <div className="service service1">
        <img src={socialAds} alt="social media ads" />
        <Typography variant="h5">Social Media Ads</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quasi
          doloremque fugiat perferendis vel voluptates eos quas nobis sit,
          excepturi rerum ipsum error earum laborum quo sed necessitatibus
          assumenda. Quaerat.
        </Typography>
      </div>

      <div className="service service2">
        <img src={branding} alt="branding" />
        <Typography variant="h5">Branding &amp; Identity</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quasi
          doloremque fugiat perferendis vel voluptates eos quas nobis sit,
          excepturi rerum ipsum error earum laborum quo sed necessitatibus
          assumenda. Quaerat.
        </Typography>
      </div>

      <div className="service service3">
        <img src={seo} alt="seo" />
        <Typography variant="h5">SEO Boost</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quasi
          doloremque fugiat perferendis vel voluptates eos quas nobis sit,
          excepturi rerum ipsum error earum laborum quo sed necessitatibus
          assumenda. Quaerat.
        </Typography>
      </div>

      <div className="service service4">
        <img src={design} alt="design" />
        <Typography variant="h5">Custom Design</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quasi
          doloremque fugiat perferendis vel voluptates eos quas nobis sit,
          excepturi rerum ipsum error earum laborum quo sed necessitatibus
          assumenda. Quaerat.
        </Typography>
      </div>
    </Cards>
  );
};

export default ServiceCards;
