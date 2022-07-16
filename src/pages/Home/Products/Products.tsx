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
import PageHeader from "../../../components/PageHeader";
import Filters from "./Filters/Filters";
import ProductsList from "./ProductsList/ProductsList";

const Products = () => {
  const [sort, setSort] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  return (
    <>
      <PageHeader title={"Shop For products"} />;
      <Box padding={"5rem 15rem 2rem 15rem"}>
        <Grid container sx={{ marginBottom: "4rem" }}>
          <Grid item sm>
            <Typography sx={{ color: "#151875", fontSize: "1.375rem" }}>
              Eccommerce Accessories & Fashion item
            </Typography>
            <Typography sx={{ color: "#8A8FB9", fontSize: "0.75rem" }}>
              About 9,620 results
            </Typography>
          </Grid>
          <Grid item>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-error-label">
                Sort By:
              </InputLabel>
              <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                value={sort}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"recommendations"}>Recommendations</MenuItem>
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
      </Box>
    </>
  );
};

export default Products;
