import { Grid, Typography, Rating, IconButton } from "@mui/material";
import React from "react";
import bedroomImg from "../../../../assets/images/bedroom.jpg";
import zoomIcon from "../../../../assets/images/zoom-icon.svg";
import shoppingCartColorIcon from "../../../../assets/images/shopping-cart-color-icon.svg";

const ProductsListItem = () => {
  return (
    <Grid container padding="1rem" mb={3}>
      <Grid item sm={3}>
        <img
          src={bedroomImg}
          alt="products list item"
          style={{ height: "12.313rem", width: "17.75rem" }}
        />
      </Grid>
      <Grid item padding="1rem" sm={9}>
        <Typography
          fontSize={18}
          fontWeight={500}
          sx={{ color: "#111C85" }}
          mb={1}
        >
          Dictum morbi
        </Typography>
        <Grid container alignItems="center" gap={2}>
          <Grid item>$26.00</Grid>
          <Grid item>
            <Rating name="read-only" value={2.5} readOnly precision={0.5} />
          </Grid>
        </Grid>
        <Typography fontSize={16} sx={{ color: "#9295AA" }} mt={1} mb={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Magna in est adipiscing in phasellus non
          in justo.
        </Typography>
        <Grid container alignItems="center" gap={2}>
          <Grid item>
            <IconButton>
              <img src={shoppingCartColorIcon} alt="shopping-cart" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <img src={zoomIcon} alt="zoom" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductsListItem;
