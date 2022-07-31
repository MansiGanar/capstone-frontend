import React from "react";
import { Grid, Typography, Rating, IconButton, Tooltip } from "@mui/material";
import zoomIcon from "../../../assets/images/zoom-icon.svg";
import shoppingCartColorIcon from "../../../assets/images/shopping-cart-color-icon.svg";
import { IProductsListItemProps } from "./types";
import { formatPrice } from "../../../utils/utils";
import ProductListItemDetails from "./ProductListItemDetails";

const ProductsListItem = ({ product }: IProductsListItemProps) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid
        container
        padding="1rem"
        mb={3}
        sx={{
          cursor: "pointer",
          ":hover": {
            background: "#F6F5FF",
          },
        }}
        onClick={handleClickOpen}
      >
        <Grid item sm={4} pr={1}>
          <img
            src={product.image}
            alt="products list item"
            style={{ height: "10.313rem", width: "15.75rem" }}
          />
        </Grid>
        <Grid item padding="1rem" sm={8}>
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
              <Tooltip title="Add to cart">
                <IconButton>
                  <img src={shoppingCartColorIcon} alt="shopping-cart" />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="View">
                <IconButton onClick={handleClickOpen}>
                  <img src={zoomIcon} alt="zoom" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ProductListItemDetails
        open={open}
        handleClose={handleClose}
        productId={product._id}
      />
    </>
  );
};

export default ProductsListItem;
