import React from "react";
import CartItemsTableHeader from "./CartItemsTableHeader";
import CartItemsTableRow from "./CartItemsTableRow";
import { Box, Typography } from "@mui/material";
import CartItemsTableFooter from "./CartItemsTableFooter";
import { useAppSelector } from "../../redux/hooks";

const CartItemsTable = () => {
  const { itemsInCart } = useAppSelector((state) => state.shoppingCart);

  return (
    <Box>
      {itemsInCart.length > 0 ? (
        <>
          <CartItemsTableHeader />
          {itemsInCart.map((item) => (
            <CartItemsTableRow product={item} key={item._id} />
          ))}
          <CartItemsTableFooter />
        </>
      ) : (
        <Typography>Your shopping cart is empty!</Typography>
      )}
    </Box>
  );
};

export default CartItemsTable;
