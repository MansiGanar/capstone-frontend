import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box, Typography, Button } from "@mui/material";
import banner1 from "../../assets/images/hero-banner-1.jpg";
import banner2 from "../../assets/images/hero-banner-2.jpg";
import banner3 from "../../assets/images/hero-banner-3.jpg";
import { heroImageStyles } from "./styled";

const CarouselHero = () => {
  return (
    <Carousel showStatus={false} showArrows={false}>
      <Box
        mb={5}
        sx={{
          ...heroImageStyles,
          backgroundImage: `url(${banner1})`,
        }}
      >
        <Box sx={{ padding: "12rem 50rem 0 10rem", textAlign: "start" }}>
          <Typography
            fontWeight={700}
            fontSize={16}
            sx={{ color: "#fb2e86" }}
            mb={2}
          >
            Best Furniture For Your Castle....
          </Typography>
          <Typography fontWeight={700} fontSize={53} sx={{ color: "black" }}>
            New Furniture Collection
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={53}
            sx={{ color: "black" }}
            mb={2}
          >
            Trends in 2022
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={16}
            sx={{ margin: "0 0 2rem", color: "#8A8FB9" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "0",
              textTransform: "none",
              background: "#fb2e86",
              ":hover": { background: "#fb2e86", boxShadow: "none" },
              boxShadow: "none",
              padding: ".5rem 2rem",
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Box>
      <Box
        mb={5}
        sx={{
          ...heroImageStyles,
          backgroundImage: `url(${banner2})`,
        }}
      >
        <Box sx={{ padding: "8rem 0 0 55rem" }}>
          <Typography
            fontWeight={700}
            fontSize={16}
            sx={{ color: "#fb2e86" }}
            mb={2}
          >
            Best Furniture For Your Castle....
          </Typography>
          <Typography fontWeight={700} fontSize={53} sx={{ color: "black" }}>
            New Furniture Collection
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={53}
            sx={{ color: "black" }}
            mb={2}
          >
            Trends in 2022
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={16}
            sx={{ margin: "0 0 2rem", color: "black" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "0",
              textTransform: "none",
              background: "#fb2e86",
              ":hover": { background: "#fb2e86", boxShadow: "none" },
              boxShadow: "none",
              padding: ".5rem 2rem",
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Box>
      <Box
        mb={5}
        sx={{
          ...heroImageStyles,
          backgroundImage: `url(${banner3})`,
        }}
      >
        <Box sx={{ padding: "8rem 0 0 0" }}>
          <Typography
            fontWeight={700}
            fontSize={16}
            sx={{ color: "#fb2e86" }}
            mb={2}
          >
            Best Furniture For Your Castle....
          </Typography>
          <Typography fontWeight={700} fontSize={53} sx={{ color: "black" }}>
            New Furniture Collection
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={53}
            sx={{ color: "black" }}
            mb={2}
          >
            Trends in 2022
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={16}
            sx={{ margin: "0 0 2rem", color: "black" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus.
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "0",
              textTransform: "none",
              background: "#fb2e86",
              ":hover": { background: "#fb2e86", boxShadow: "none" },
              boxShadow: "none",
              padding: ".5rem 2rem",
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Box>
    </Carousel>
  );
};

export default CarouselHero;
