import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import furnitureImg from "../../../assets/images/history.jpg";
import truckIcon from "../../../assets/images/truck-icon.svg";
import cashbackIcon from "../../../assets/images/cashback-icon.svg";
import qualityIcon from "../../../assets/images/quality-icon.svg";
import supportIcon from "../../../assets/images/support-icon.svg";
import Offer from "../WhatComfyDecorOffers/Offer";

const AboutUs = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#F6F5FF" }} lineHeight="1rem">
        <Typography
          sx={{
            padding: "5rem 15rem 1rem 15rem",
            fontSize: "2.25rem",
            fontWeight: "700",
            color: "#101750 ",
          }}
        >
          About Us
        </Typography>
        <Grid container sx={{ padding: "0 15rem 5rem 15rem" }}>
          <Grid item>
            <Typography sx={{ marginRight: "0.5rem" }}>Home</Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ marginRight: "0.5rem" }}>Pages</Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ color: "#FB2E86" }}>About Us</Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid container justifyContent={"center"} margin="5rem 0">
        <Grid item xs={4}>
          <img
            src={furnitureImg}
            alt="furnitureImg"
            style={{ width: "30rem" }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography
            sx={{ color: "#151875", fontSize: "2.25rem", fontWeight: "700" }}
          >
            Know About Our Ecommerce
          </Typography>
          <Typography
            sx={{ color: "#151875", fontSize: "2.25rem", fontWeight: "700" }}
          >
            Business, History
          </Typography>
          <Typography sx={{ color: "#8A8FB9" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
            cursus metus aliquam eleifend. Platea dictumst quisque sagittis
            purus sit amet volutpat consequat. Nulla pellentesque dignissim enim
            sit.
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "0",
              textTransform: "none",
              background: "#fb2e86",
              ":hover": { background: "#fb2e86", boxShadow: "none" },
              boxShadow: "none",
              padding: ".5rem 1rem",
              margin: "1rem 0",
            }}
          >
            Contact Us
          </Button>
        </Grid>
      </Grid>
      <Box textAlign="center">
        <Typography sx={{ fontSize: "2.6rem", fontWeight: "700" }}>
          Our Features
        </Typography>
      </Box>
      <Grid
        container
        sx={{ padding: "3rem 0" }}
        gap={5}
        justifyContent="center"
        textAlign="center"
      >
        <Grid item>
          <Offer
            icon={truckIcon}
            title="24/7 Support"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
        </Grid>
        <Grid item>
          <Offer
            icon={cashbackIcon}
            title="24/7 Support"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
        </Grid>
        <Grid item>
          <Offer
            icon={qualityIcon}
            title="24/7 Support"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
        </Grid>
        <Grid item>
          <Offer
            icon={supportIcon}
            title="24/7 Support"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
