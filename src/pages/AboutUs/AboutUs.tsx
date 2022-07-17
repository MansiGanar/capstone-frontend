import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import furnitureImg from "../../assets/images/history.jpg";
import truckIcon from "../../assets/images/truck-icon.svg";
import cashbackIcon from "../../assets/images/cashback-icon.svg";
import qualityIcon from "../../assets/images/quality-icon.svg";
import supportIcon from "../../assets/images/support-icon.svg";
import Offer from "../Home/WhatComfyDecorOffers/Offer";
import clientImg1 from "../../assets/images/clientImg1.svg";
import clientImg3 from "../../assets/images/clientImg3.svg";
import PageHeader from "../../components/PageHeader";

const AboutUs = () => {
  return (
    <>
      <PageHeader title={"About us"} />;
      <Grid container padding={"5rem 15rem"}>
        <Grid item sm={6}>
          <img
            src={furnitureImg}
            alt="furnitureImg"
            style={{ width: "30rem" }}
          />
        </Grid>
        <Grid item sm={6}>
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
        mb={6}
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
      <Box textAlign={"center"} sx={{ backgroundColor: "#FBFBFF" }}>
        <Typography sx={{ fontSize: "2.625rem", fontWeight: "500" }} mb={4}>
          Our Client Story!
        </Typography>
        <Grid container justifyContent={"center"}>
          <Grid item padding={"0.3rem"}>
            <img
              src={clientImg1}
              alt="clientImg1"
              width={"60rem"}
              height={"60rem"}
              style={{ borderRadius: ".3rem" }}
            />
          </Grid>
          <Grid item padding={"0 0.7rem 2rem"}>
            <img
              src={clientImg3}
              alt="clientImg2"
              width={"60rem"}
              height={"60rem"}
              style={{ borderRadius: ".3rem" }}
            />
          </Grid>
          <Grid item padding={"0.3rem"}>
            <img
              src={clientImg3}
              alt="clientImg3"
              width={"60rem"}
              height={"60rem"}
              style={{ borderRadius: ".3rem" }}
            />
          </Grid>
        </Grid>
        <Typography sx={{ fontSize: "1.375rem" }}>Selina Gomez</Typography>
        <Typography sx={{ color: "#8A8FB9", fontSize: "0.625rem" }}>
          Ceo At Webecy Digital
        </Typography>
        <Typography
          sx={{
            justifyContent: "center",
            color: "#8A8FB9",
            fontSize: "1rem",
            maxWidth: "40%",
            margin: "2rem auto",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
          ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
          nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam
          lacus volutpat praesent.
        </Typography>
        <Grid container justifyContent="center" gap={1} mb={4}>
          <Grid item>
            <Box
              sx={{
                borderRadius: ".15rem",
                height: ".25rem",
                width: "1.25rem",
                background: "#FF75B0",
              }}
            />
          </Grid>
          <Grid item>
            <Box
              sx={{
                borderRadius: ".15rem",
                height: ".25rem",
                width: "2.5rem",
                background: "#FB2E86",
              }}
            />
          </Grid>
          <Grid item>
            <Box
              sx={{
                borderRadius: ".15rem",
                height: ".25rem",
                width: "1.25rem",
                background: "#FF75B0",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AboutUs;
