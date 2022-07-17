import React from "react";
import { Grid, Typography, IconButton, Badge, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import cancelIcon from "../../assets/images/cancel-icon.svg";
import shoppingCartImg from "../../assets/images/shoppingCartImg.svg";

const CartItemsTableRow = () => {
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
                    style={{ height: "1.25rem", width: "1.25rem" }}
                  />
                }
                sx={{
                  "& .MuiBadge-anchorOriginTopRightRectangular": {
                    padding: "0 !important",
                  },
                }}
              >
                <img
                  src={shoppingCartImg}
                  alt="cart-item"
                  style={{
                    width: "5.188rem",
                    height: "5.438rem",
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
                Ut diam consequat
              </Typography>
              <Typography
                fontSize={12}
                lineHeight={1.5}
                sx={{ color: "#A1A8C1" }}
              >
                Color: Brown
              </Typography>
              <Typography
                fontSize={12}
                lineHeight={1.5}
                sx={{ color: "#A1A8C1" }}
              >
                Size: XL
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={2}>
          <Typography fontSize={14} lineHeight={1.5} sx={{ color: "#15245E" }}>
            $32.00
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <Grid container alignItems={"center"} justifyContent="center">
            <Grid item>
              <IconButton>
                <RemoveIcon fontSize="small" sx={{ color: "#BEBFC2" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography
                fontSize={12}
                lineHeight={1.5}
                sx={{ color: "#BEBFC2" }}
              >
                1
              </Typography>
            </Grid>
            <Grid item>
              <IconButton>
                <AddIcon fontSize="small" sx={{ color: "#BEBFC2" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={2} textAlign="end">
          <Typography fontSize={14} lineHeight={1.5} sx={{ color: "#15245E" }}>
            £219.00
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 2, mb: 2 }} />
    </>
  );
};

export default CartItemsTableRow;
