import React from "react";
import { Grid, Button } from "@mui/material";

const CartItemsTableFooter = () => {
  return (
    <Grid container mt={5}>
      <Grid item sm>
        <Button
          variant="contained"
          sx={{
            borderRadius: "0",
            textTransform: "none",
            background: "#FF1788",
            ":hover": { background: "#FF1788" },
            padding: "0.3rem 1.5rem",
            marginBottom: "1rem",
          }}
        >
          Update Cart
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          sx={{
            borderRadius: "0",
            textTransform: "none",
            background: "#FF1788",
            ":hover": { background: "#FF1788" },
            padding: "0.3rem 1.5rem",
            marginBottom: "1rem",
          }}
        >
          Clear Cart
        </Button>
      </Grid>
    </Grid>
  );
};

export default CartItemsTableFooter;
