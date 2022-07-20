import React from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  Box,
} from "@mui/material";
import { useQuery } from "react-query";
import PageHeader from "../../components/PageHeader/PageHeader";
import Filters from "./Filters/Filters";
import ProductsList from "./ProductsList/ProductsList";
import { getAllProducts } from "../../react-query/queries/products/products";
import { GET_ALL_PRODUCTS_QUERY_KEY } from "../../utils/keys/keys";
import Loader from "../../components/Loader/Loader";

const Products = () => {
  const [sort, setSort] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  const { data, isLoading, error } = useQuery(
    GET_ALL_PRODUCTS_QUERY_KEY,
    getAllProducts
  );

  return (
    <>
      <PageHeader title={"Shop For products"} />;
      <Box padding={"5rem 15rem 2rem 15rem"}>
        {isLoading ? (
          <Loader />
        ) : (
          !error && (
            <>
              <Grid container sx={{ marginBottom: "4rem" }}>
                <Grid item sm>
                  <Typography sx={{ color: "#151875", fontSize: "1.375rem" }}>
                    All Products
                  </Typography>
                  <Typography sx={{ color: "#8A8FB9", fontSize: "0.75rem" }}>
                    {data?.products.length} results
                  </Typography>
                </Grid>
                <Grid item>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Sort By:</InputLabel>
                    <Select value={sort} label="Age" onChange={handleChange}>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"recommendations"}>
                        Recommendations
                      </MenuItem>
                      <MenuItem value={"highestFisrt"}>HighestFisrt</MenuItem>
                      <MenuItem value={"lowestFirst"}>Lowest First</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item sm={2}>
                  <Filters />
                </Grid>
                <Grid item sm={10}>
                  <ProductsList />
                </Grid>
              </Grid>
            </>
          )
        )}
      </Box>
    </>
  );
};

export default Products;
