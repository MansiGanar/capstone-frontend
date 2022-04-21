import React from "react";
import { Typography, Divider, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Filters from "./Filters";
import ProductsList from "./ProductsList";

const Products = () => {
  const params = useParams();

  return (
    <>
      <Typography fontWeight={700} fontSize={28}>
        {params.sectionName?.replaceAll("-", " ").toUpperCase()}
      </Typography>
      <Divider sx={{ margin: "2rem 0" }} />
      <Filters />
      <Box sx={{ margin: "3.5rem 0" }}>
        <ProductsList />
      </Box>
    </>
  );
};

export default Products;
