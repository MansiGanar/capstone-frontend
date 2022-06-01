import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box, Typography, Button } from "@mui/material";
import banner1 from "../../assets/images/hero-banner-1.jpg";
import banner2 from "../../assets/images/hero-banner-2.jpg";
import banner3 from "../../assets/images/hero-banner-3.jpg";
import { heroImageStyles } from "./styled";
import { primaryText } from "../../utils/colors";

const CarouselHero = () => {
  return (
    <Carousel showStatus={false} showArrows={false} autoPlay infiniteLoop>
      <Box
        textAlign="center"
        mb={5}
        sx={{
          ...heroImageStyles,
          backgroundImage: `url(${banner1})`,
        }}
      >
        <Box sx={{ padding: "12rem 50rem 0 5rem" }}>
          <Typography
            fontWeight={500}
            fontSize={32}
            sx={{ margin: "0 0 2rem", color: primaryText }}
          >
            Living room
          </Typography>
          <Button variant="outlined">Shop now</Button>
        </Box>
      </Box>
      <Box
        textAlign="center"
        mb={5}
        sx={{
          ...heroImageStyles,
          backgroundImage: `url(${banner2})`,
        }}
      >
        <Box sx={{ padding: "8rem 0 0 40rem" }}>
          <Typography
            fontWeight={500}
            fontSize={32}
            sx={{ margin: "0 0 2rem", color: primaryText }}
          >
            Bedroom and comfort zone
          </Typography>
          <Button variant="outlined">Shop now</Button>
        </Box>
      </Box>
      <Box
        textAlign="center"
        mb={5}
        sx={{
          ...heroImageStyles,
          backgroundImage: `url(${banner3})`,
        }}
      >
        <Box sx={{ padding: "12rem 0 0 0" }}>
          <Typography
            fontWeight={500}
            fontSize={32}
            sx={{ margin: "0 0 2rem", color: primaryText }}
          >
            Office and work places
          </Typography>
          <Button variant="outlined">Shop now</Button>
        </Box>
      </Box>
    </Carousel>
  );
};

export default CarouselHero;
