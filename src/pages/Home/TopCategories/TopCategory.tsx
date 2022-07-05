import React from "react";
import { Button, Box } from "@mui/material";
import dummyProductImage from "../../../assets/images/fake-product-image.svg";
import { Link } from "react-router-dom";

const TopCategory = () => {
  return (
    <Link to="/">
      <Box
        sx={{
          boxShadow: "0rem 0rem 1.563rem rgba(0, 0, 0, 0.2)",
          padding: "2rem",
        }}
      >
        <Box sx={{ background: "#F6F7FB" }}>
          <img src={dummyProductImage} alt="dummy product" />
        </Box>
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
          }}
        >
          Kitchen
        </Button>
      </Box>
    </Link>
  );
};

export default TopCategory;
