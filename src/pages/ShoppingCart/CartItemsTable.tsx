import React from "react";
import CartItemsTableHeader from "./CartItemsTableHeader";
import CartItemsTableRow from "./CartItemsTableRow";
import { Box } from "@mui/material";
import CartItemsTableFooter from "./CartItemsTableFooter";

const CartItemsTable = () => {
  return (
    <Box>
      <CartItemsTableHeader />
      <CartItemsTableRow />
      <CartItemsTableRow />
      <CartItemsTableRow />
      <CartItemsTableFooter />
    </Box>
  );
};

export default CartItemsTable;
