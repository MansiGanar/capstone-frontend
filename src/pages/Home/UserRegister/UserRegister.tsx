import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Brands from "../Brands/Brands";
import PageHeader from "../../../components/PageHeader";

const UserRegister = () => {
  return (
    <>
      <PageHeader title="Create an account" />
      <Box
        sx={{
          width: "28%",
          margin: " 5rem auto",
          padding: "2rem",
          boxShadow: "0 0 1.563rem 0.625rem #F8F8FB",
        }}
      >
        <Typography
          fontSize={"2rem"}
          fontWeight={"700"}
          sx={{ marginTop: "1rem", textAlign: "center" }}
        >
          Register
        </Typography>
        <Typography
          sx={{ color: "#9096B2", marginBottom: "1rem", textAlign: "center" }}
        >
          Please register by filling the details given below
        </Typography>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
        />
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
          Register
        </Button>
        <Link to="/login">
          <Typography
            sx={{ color: "#9096B2", marginBottom: "1rem", textAlign: "center" }}
          >
            Already have an account? Login
          </Typography>
        </Link>
      </Box>
      <Brands />
    </>
  );
};

export default UserRegister;
