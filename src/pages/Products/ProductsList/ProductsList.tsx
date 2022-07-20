import { Box } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { getAllProducts } from "../../../react-query/queries/products/products";
import { GET_ALL_PRODUCTS_QUERY_KEY } from "../../../utils/keys/keys";
import ProductsListItem from "./ProductsListItem";

const ProductsList = () => {
  const { data } = useQuery(GET_ALL_PRODUCTS_QUERY_KEY, getAllProducts);

  return (
    <Box>
      {data?.products.map((product) => (
        <ProductsListItem product={product} key={product._id} />
      ))}
    </Box>
  );
};

export default ProductsList;
