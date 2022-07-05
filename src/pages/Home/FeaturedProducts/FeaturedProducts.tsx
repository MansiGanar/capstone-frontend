import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  return (
    <Box sx={{ margin: "3rem 3rem 5rem", textAlign: "center" }}>
      <Typography sx={{ color: "#1A0B5B" }} fontSize={42} fontWeight={700}>
        Featured Products
      </Typography>
      <Grid
        container
        sx={{ padding: "2rem 0" }}
        gap={5}
        justifyContent="center"
      >
        <Grid item>
          <ProductCard />
        </Grid>
        <Grid item>
          <ProductCard />
        </Grid>
        <Grid item>
          <ProductCard />
        </Grid>
        <Grid item>
          <ProductCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturedProducts;
