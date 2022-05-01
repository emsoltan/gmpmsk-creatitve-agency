import React from "react";
import { ImageList, ImageListItem, Box } from "@mui/material";
import jemma1 from "../../assets/img/jemma1.png";
import jemma2 from "../../assets/img/jemma2.png";
import tea1 from "../../assets/img/tea1.png";
import tea2 from "../../assets/img/tea2.png";
import gmp1 from "../../assets/img/gmp1.png";
import gmp2 from "../../assets/img/gmp2.png";
import gmp3 from "../../assets/img/gmp3.png";
import gmp4 from "../../assets/img/gmp4.png";


const ImageSamples = () => {
  return (
    <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

const itemData = [
  {
    img: `${jemma1}`,
    title: "Jemma Tours",
  },
  {
    img: `${jemma2}`,
    title: "Jemma Tours",
  },
  {
    img: `${tea1}`,
    title: "British Tea Company",
  },
  {
    img: `${tea2}`,
    title: "Books",
  },
  {
    img: `${gmp1}`,
    title: "GMPMSK 1",
  },
  {
    img: `${gmp2}`,
    title: "GMPMSK 2",
  },
  {
    img: `${gmp3}`,
    title: "GMPMSK 3",
  },
  {
    img: `${gmp4}`,
    title: "GMPMSK 4",
  },

];

export default ImageSamples;
