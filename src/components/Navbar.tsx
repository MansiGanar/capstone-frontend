import React, { useState } from "react";
import { Button, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LoginIcon from "@mui/icons-material/Login";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

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

  return (
    <Grid
      container
      alignItems="center"
      gap={3}
      wrap="nowrap"
      sx={{ marginBottom: "2rem" }}
    >
      <Grid item sm="auto">
        <Typography fontWeight={700} fontSize={36}>
          comfy decor
        </Typography>
      </Grid>
      <Grid item sm>
        <Typography fontWeight={500} fontSize={24}>
          the furniture store
        </Typography>
      </Grid>
      <Grid item sm="auto" textAlign="center">
        <Tooltip title={"Cart"}>
          <IconButton>
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
