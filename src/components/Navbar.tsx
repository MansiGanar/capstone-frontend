import React, { useState } from "react";
import { Button, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LoginIcon from "@mui/icons-material/Login";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import ShoppingCart from "./ShoppingCart";
import { Link } from "react-router-dom";
import { theme } from "../utils/theme";

const Navbar = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const handleClickOpenLoginModal = () => {
    setOpenLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  const [openSignupModal, setOpenSignupModal] = useState(false);

  const handleClickOpenSignupModal = () => {
    setOpenSignupModal(true);
  };

  const handleCloseSignupModal = () => {
    setOpenSignupModal(false);
  };

  const [openShoppingCart, setOpenShoppingCart] = useState(false);

  const handleClickOpenShoppingCart = () => {
    setOpenShoppingCart(true);
  };

  const handleCloseShoppingCart = () => {
    setOpenShoppingCart(false);
  };

  return (
    <Grid
      container
      alignItems="center"
      gap={3}
      wrap="nowrap"
      sx={{ marginBottom: "2rem" }}
    >
      <Grid item sm="auto">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography
            fontWeight={700}
            fontSize={36}
            sx={{ color: theme.palette.primary.dark }}
          >
            comfy decor
          </Typography>
        </Link>
      </Grid>
      <Grid item sm>
        <Typography
          fontWeight={500}
          fontSize={24}
          sx={{ color: theme.palette.primary.dark }}
        >
          the furniture store
        </Typography>
      </Grid>
      <Grid item sm="auto" textAlign="center">
        <Tooltip title={"Cart"}>
          <IconButton onClick={handleClickOpenShoppingCart}>
            <LocalMallIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item sm="auto" textAlign="end">
        <Button
          startIcon={<LoginIcon />}
          sx={{ marginRight: ".5rem" }}
          variant="contained"
          onClick={handleClickOpenLoginModal}
        >
          Login
        </Button>
        <Button
          startIcon={<GroupAddIcon />}
          variant="contained"
          onClick={handleClickOpenSignupModal}
        >
          Sign up
        </Button>
        <ShoppingCart
          open={openShoppingCart}
          handleClose={handleCloseShoppingCart}
        />
        <LoginModal open={openLoginModal} handleClose={handleCloseLoginModal} />
        <SignupModal
          open={openSignupModal}
          handleClose={handleCloseSignupModal}
        />
      </Grid>
    </Grid>
  );
};

export default Navbar;
