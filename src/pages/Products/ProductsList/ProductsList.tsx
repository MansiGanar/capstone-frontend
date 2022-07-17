import { Box } from "@mui/material";
import React from "react";
import ProductsListItem from "./ProductsListItem";

const ProductsList = () => {
  return (
    <Box>
      <ProductsListItem />
      <ProductsListItem />
      <ProductsListItem />
      <ProductsListItem />
      <ProductsListItem />
    </Box>
  );
};

export default ProductsList;
