import React, { useEffect, useState } from "react";
import { Grid, Typography, IconButton, Badge, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import cancelIcon from "../../assets/images/cancel-icon.svg";
import { ICartItemsTableRowProps } from "./types";
import { formatPrice } from "../../utils/utils";
import { useAppDispatch } from "../../redux/hooks";
import {
  removeItemFromCart,
  updateItemInCart,
} from "../../redux/slices/shoppingCartSlice";

const CartItemsTableRow = ({ product }: ICartItemsTableRowProps) => {
  const [quantity, setQuantity] = useState(1);

  const [subtotal, setSubTotal] = useState(0);

  useEffect(() => {
    setSubTotal(quantity * parseFloat(product.price));
  }, [quantity, product]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      updateItemInCart({
        itemInCart: product,
        quantity,
        subtotal,
      })
    );
  }, [dispatch, product, quantity, subtotal]);

  return (
    <>
      <Grid container alignItems="center">
        <Grid item sm={6}>
          <Grid container alignItems="center" gap={3}>
            <Grid item>
              <Badge
                color="secondary"
                badgeContent={
                  <img
                    src={cancelIcon}
                    alt="remove-item"
                    style={{
                      height: "1.25rem",
                      width: "1.25rem",
                      cursor: "pointer",
                    }}
                    onClick={() => dispatch(removeItemFromCart(product._id))}
                  />
                }
                sx={{
                  "& .MuiBadge-anchorOriginTopRightRectangular": {
                    padding: "0 !important",
                  },
                }}
              >
                <img
                  src={product.image}
                  alt="cart-item"
                  style={{
                    width: "5.188rem",
                    borderRadius: ".15rem",
                  }}
                />
              </Badge>
            </Grid>
            <Grid item>
              <Typography
                fontSize={14}
                lineHeight={1.5}
                sx={{ color: "#000000" }}
              >
                {product.name}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={2}>
          <Typography fontSize={14} lineHeight={1.5} sx={{ color: "#15245E" }}>
            {formatPrice(product.price)}
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <Grid container alignItems={"center"} justifyContent="center">
            <Grid item>
              <IconButton
                onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}
              >
                <RemoveIcon fontSize="small" sx={{ color: "#BEBFC2" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography
                fontSize={12}
                lineHeight={1.5}
                sx={{ color: "#BEBFC2" }}
              >
                {quantity}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={() => setQuantity(quantity + 1)}>
                <AddIcon fontSize="small" sx={{ color: "#BEBFC2" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={2} textAlign="end">
          <Typography fontSize={14} lineHeight={1.5} sx={{ color: "#15245E" }}>
            {formatPrice(subtotal.toString())}
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 2, mb: 2 }} />
    </>
  );
};

export default CartItemsTableRow;
