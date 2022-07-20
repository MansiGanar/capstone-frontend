import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../../../react-query/queries/products/products";
import { GET_ALL_PRODUCTS_QUERY_KEY } from "../../../utils/keys/keys";
import { useQuery } from "react-query";

const FeaturedProducts = () => {
  const { data } = useQuery(GET_ALL_PRODUCTS_QUERY_KEY, getAllProducts);

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
        {data?.products.slice(0, 4).map((product) => (
          <Grid item>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedProducts;
