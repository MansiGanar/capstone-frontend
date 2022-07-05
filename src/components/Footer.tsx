import React from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import facebookIcon from "../assets/images/facebook-icon.svg";
import instagramIcon from "../assets/images/instagram-icon.svg";
import twitterIcon from "../assets/images/twitter-icon.svg";

const Footer = () => {
  return (
    <>
      <Grid
        container
        sx={{ padding: "5rem 15rem", background: "#EEEFFB" }}
        gap={12}
      >
        <Grid item>
          <Typography fontSize={38} fontWeight={700}>
            comfy decor
          </Typography>
          <TextField
            label="Email address"
            variant="outlined"
            sx={{ margin: "2rem 0" }}
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: "0",
              textTransform: "none",
              background: "#fb2e86",
              ":hover": { background: "#fb2e86", boxShadow: "none" },
              boxShadow: "none",
              padding: ".5rem 2rem",
              marginTop: "2rem",
              height: "3.5rem",
            }}
          >
            Sign up
          </Button>
          <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
            Contact Info
          </Typography>
          <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
            17 Princess Road, London, Greater London NW1 8JR, UK
          </Typography>
        </Grid>
        <Grid item>
          <Typography mb={3}>Categories</Typography>
          <Link to="/kitchen">
            <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
              Kitchen
            </Typography>
          </Link>
          <Link to="/bedroom">
            <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
              Bedroom
            </Typography>
          </Link>
          <Link to="/living-room">
            <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
              Living Room
            </Typography>
          </Link>
          <Link to="/office">
            <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
              Office
            </Typography>
          </Link>
          <Link to="/bathroom">
            <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
              Bathroom
            </Typography>
          </Link>
          <Link to="/outdoor">
            <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
              Outdoor
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Typography mb={3}>Customer Care</Typography>
          <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
            My Account
          </Typography>
          <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
            Discount
          </Typography>
          <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
            Returns
          </Typography>
          <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
            Order Tracking
          </Typography>
          <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
            Orders History
          </Typography>
        </Grid>
        <Grid item>
          <Typography mb={3}>Pages</Typography>
          <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
            Browse the Shop
          </Typography>
          <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
            Category
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ background: "#E7E4F8", padding: ".5rem 15rem" }}
        alignItems="center"
      >
        <Grid item sm>
          <Typography
            sx={{ color: "#8A8FB9", lineHeight: "2rem" }}
            fontSize={14}
          >
            ©comfy decor - All Rights Reserved
          </Typography>
        </Grid>
        <Grid item>
          <Grid container gap={1} alignItems="center">
            <Grid item>
              <Link to="#">
                <img src={facebookIcon} alt="facebook" />
              </Link>
            </Grid>
            <Grid item>
              <Link to="#">
                <img src={instagramIcon} alt="instagram" />
              </Link>
            </Grid>
            <Grid item>
              <Link to="#">
                <img src={twitterIcon} alt="twitter" />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
