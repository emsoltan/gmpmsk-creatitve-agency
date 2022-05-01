import React from "react";
import styled from "styled-components";
import vid1 from "../../assets/vid/vid1.mp4";
import vid2 from "../../assets/vid/vid2.mp4";
import vid3 from "../../assets/vid/vid4.mp4";

const VidComposition = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  transform: skewY(7deg);
  justify-content: space-evenly;
  align-items: center;
  padding: 4rem 0;
  margin: 5rem auto;
  background: var(--main-gradient);
  border-radius: 1rem;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.85);

  video {
    max-width: 70%;
    border-radius: 1rem;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.85);
    margin: 2rem auto;
  }
  @media screen and (max-width: 800px){
      width: 100%;
      padding: 1rem 0;
      video {
          max-width: 90%;
      }
  }
`;
const VidCollection = () => {
  return (
    <VidComposition>
      <video autoPlay loop muted playsInline>
        <source src={vid3} type="video/mp4" />
      </video>
      <video autoPlay loop muted playsInline>
        <source src={vid2} type="video/mp4" />
      </video>
      <video autoPlay loop muted playsInline>
        <source src={vid1} type="video/mp4" />
      </video>
    </VidComposition>
  );
};

export default VidCollection;
