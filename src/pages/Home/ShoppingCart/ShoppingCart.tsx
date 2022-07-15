import React from "react";
import { Grid } from "@mui/material";
import PageHeader from "../../../components/PageHeader";
import CartItemsTable from "./CartItemsTable";
import CartPaymentSummary from "./CartPaymentSummary";

const ShoppingCart = () => {
  return (
    <>
      <PageHeader title={"Shopping Cart"} />;
      <Grid container justifyContent={"center"} sx={{ padding: "5rem 15rem" }}>
        <Grid item sm={8} pr={20}>
          <CartItemsTable />
        </Grid>
        <Grid item sm={4}>
          <CartPaymentSummary />
        </Grid>
      </Grid>
    </>
  );
};

export default ShoppingCart;
