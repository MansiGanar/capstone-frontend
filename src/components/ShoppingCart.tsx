import React from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ShoppingCartProps {
  open: boolean;
  handleClose: () => void;
}

const ShoppingCart = ({ open, handleClose }: ShoppingCartProps) => {
  return (
    <Dialog open={open} onClose={handleClose} sx={{ padding: "2rem" }}>
      <DialogTitle sx={{ padding: "2rem", textAlign: "center" }}>
        Your shopping cart
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{ padding: "2rem", textAlign: "center", width: "25rem" }}
      >
        <DialogContentText sx={{ marginBottom: "1rem" }}>
          There are no items in your shopping cart.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default ShoppingCart;
