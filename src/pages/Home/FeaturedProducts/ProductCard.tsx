import React from "react";
import { Typography, Box } from "@mui/material";
import { IProductCardItemProps } from "./types";
import { formatPrice } from "../../../utils/utils";

const ProductCard = ({ product }: IProductCardItemProps) => {
  return (
    <Box
      sx={{
        boxShadow: "0rem 0rem 1.563rem rgba(0, 0, 0, 0.2)",
        padding: "2rem",
        borderRadius: ".5rem",
      }}
    >
      <Box sx={{ background: "#F6F7FB" }}>
        <img
          src={product.image}
          alt="dummy product"
          style={{ width: "16.875rem", height: "14.75rem" }}
        />
      </Box>
      <Typography
        fontSize={18}
        fontWeight={700}
        sx={{ color: "#FB2E86", margin: "1rem 0" }}
      >
        {product.name}
      </Typography>
      <Typography
        fontSize={14}
        sx={{ color: "#151875" }}
        mb={1}
        fontWeight={500}
      >
        {product.category.toUpperCase().replaceAll("-", " ")}
      </Typography>
      <Typography fontSize={14} sx={{ color: "#151875" }}>
        {formatPrice(product.price)}
      </Typography>
    </Box>
  );
};

export default ProductCard;
