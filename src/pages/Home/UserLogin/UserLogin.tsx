import React from "react";
import { Box, Typography, Grid, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Brands from "../Brands/Brands";

const UserLogin = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#F6F5FF" }} lineHeight="1rem">
        <Typography
          sx={{
            padding: "5rem 15rem 1rem 15rem",
            fontSize: "2.25rem",
            fontWeight: "700",
            color: "#101750 !important",
          }}
        >
          My Account
        </Typography>
        <Grid container sx={{ padding: "0 15rem 5rem 15rem" }}>
          <Grid item>
            <Typography sx={{ marginRight: "0.5rem" }}>Home</Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ marginRight: "0.5rem" }}>Pages</Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ color: "#FB2E86" }}>My Account</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: "28%", margin: " 5rem auto" }}>
        <Typography
          fontSize={"2rem"}
          fontWeight={"700"}
          sx={{ marginTop: "1rem", textAlign: "center" }}
        >
          Login
        </Typography>
        <Typography
          sx={{ color: "#9096B2", marginBottom: "1rem", textAlign: "center" }}
        >
          Please login using accont detail below
        </Typography>
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
        />
        <Link to="#">
          <Typography sx={{ color: "#9096B2", marginBottom: "1rem" }}>
            Forgot your Password?
          </Typography>
        </Link>
        <Button
          variant="contained"
          fullWidth
          sx={{
            borderRadius: "0",
            textTransform: "none",
            background: "#FF1788",
            ":hover": { background: "#FF1788" },
            padding: "0.7rem",
            marginBottom: "1rem",
          }}
        >
          Login
        </Button>
        <Link to="#">
          <Typography
            sx={{ color: "#9096B2", marginBottom: "1rem", textAlign: "center" }}
          >
            Don't have an Account? Create Account
          </Typography>
        </Link>
      </Box>
      <Brands />
    </>
  );
};

export default UserLogin;
