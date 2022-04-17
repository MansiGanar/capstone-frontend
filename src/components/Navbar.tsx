import React from "react";
import { Button, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LoginIcon from "@mui/icons-material/Login";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

const Navbar = () => {
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
        >
          Login
        </Button>
        <Button startIcon={<GroupAddIcon />} variant="contained">
          Sign up
        </Button>
      </Grid>
    </Grid>
  );
};

export default Navbar;
