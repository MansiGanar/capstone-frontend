import React from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Grid
      container
      sx={{ padding: "5rem 15rem", background: "#EEEFFB" }}
      gap={6}
    >
      <Grid item>
        <Typography fontSize={38} fontWeight={700}>
          comfy decor
        </Typography>
        <TextField label="Email address" variant="outlined" />
        <Button
          variant="contained"
          sx={{
            borderRadius: "0",
            textTransform: "none",
            background: "#fb2e86",
            ":hover": { background: "#fb2e86", boxShadow: "none" },
            boxShadow: "none",
            padding: ".5rem 2rem",
            marginTop: "1.5rem",
            height: "3rem",
          }}
        >
          Sign up
        </Button>
        <Typography sx={{ color: "#8A8FB9" }}>Contact Info</Typography>
        <Typography sx={{ color: "#8A8FB9" }}>
          17 Princess Road, London, Greater London NW1 8JR, UK
        </Typography>
      </Grid>
      <Grid item>
        <Typography mb={3}>Categories</Typography>
        <Link to="/kitchen">
          <Typography sx={{ color: "#8A8FB9" }}>Kitchen</Typography>
        </Link>
        <Link to="/bedroom">
          <Typography sx={{ color: "#8A8FB9" }}>Bedroom</Typography>
        </Link>
        <Link to="/living-room">
          <Typography sx={{ color: "#8A8FB9" }}>Living Room</Typography>
        </Link>
        <Link to="/office">
          <Typography sx={{ color: "#8A8FB9" }}>Office</Typography>
        </Link>
        <Link to="/bathroom">
          <Typography sx={{ color: "#8A8FB9" }}>Bathroom</Typography>
        </Link>
        <Link to="/outdoor">
          <Typography sx={{ color: "#8A8FB9" }}>Outdoor</Typography>
        </Link>
      </Grid>
      <Grid item>
        <Typography mb={3}>Customer Care</Typography>
        <Typography sx={{ color: "#8A8FB9" }}>My Account</Typography>
        <Typography sx={{ color: "#8A8FB9" }}>Discount</Typography>
        <Typography sx={{ color: "#8A8FB9" }}>Returns</Typography>
        <Typography sx={{ color: "#8A8FB9" }}>Order Tracking</Typography>
        <Typography sx={{ color: "#8A8FB9" }}>Orders History</Typography>
      </Grid>
      <Grid item>
        <Typography mb={3}>Pages</Typography>
        <Typography sx={{ color: "#8A8FB9" }}>Browse the Shop</Typography>
        <Typography sx={{ color: "#8A8FB9" }}>Category</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
