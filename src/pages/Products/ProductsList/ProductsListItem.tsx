import React from "react";
import { Grid, Typography, Rating, IconButton } from "@mui/material";
import zoomIcon from "../../../assets/images/zoom-icon.svg";
import shoppingCartColorIcon from "../../../assets/images/shopping-cart-color-icon.svg";
import { IProductsListItemProps } from "./types";
import { formatPrice } from "../../../utils/utils";

const ProductsListItem = ({ product }: IProductsListItemProps) => {
  return (
    <Grid container padding="1rem" mb={3}>
      <Grid item sm={3}>
        <img
          src={product.image}
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
          {product.name}
        </Typography>
        <Grid container alignItems="center" gap={2}>
          <Grid item>{formatPrice(product.price)}</Grid>
          <Grid item>
            <Rating
              name="read-only"
              value={parseFloat(product.rating)}
              readOnly
              precision={0.5}
            />
          </Grid>
        </Grid>
        <Typography fontSize={16} sx={{ color: "#9295AA" }} mt={2} mb={2}>
          {product.description}
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
