import React from "react";
import { Typography, Box } from "@mui/material";
import dummyProductImage from "../../../assets/images/fake-product-image.svg";

const ProductCard = () => {
  return (
    <Box
      sx={{
        boxShadow: "0rem 0rem 1.563rem rgba(0, 0, 0, 0.2)",
        padding: "2rem",
      }}
    >
      <Box sx={{ background: "#F6F7FB" }}>
        <img src={dummyProductImage} alt="dummy product" />
      </Box>
      <Typography
        fontSize={18}
        fontWeight={700}
        sx={{ color: "#FB2E86", margin: "1rem 0" }}
      >
        Cantilever chair
      </Typography>
      <Typography fontSize={14} sx={{ color: "#151875" }} mb={1}>
        Code - Y523201
      </Typography>
      <Typography fontSize={14} sx={{ color: "#151875" }}>
        €42.00
      </Typography>
    </Box>
  );
};

export default ProductCard;
