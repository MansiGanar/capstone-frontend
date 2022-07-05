import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import truckIcon from "../../../assets/images/truck-icon.svg";
import cashbackIcon from "../../../assets/images/cashback-icon.svg";
import qualityIcon from "../../../assets/images/quality-icon.svg";
import supportIcon from "../../../assets/images/support-icon.svg";
import Offer from "./Offer";

const WhatComfyDecorOffers = () => {
  return (
    <Box textAlign="center">
      <Typography sx={{ color: "#1A0B5B" }} fontSize={42} fontWeight={700}>
        What comfy decor offers!
      </Typography>
      <Grid
        container
        sx={{ padding: "3rem 0" }}
        gap={5}
        justifyContent="center"
      >
        <Grid item>
          <Offer
            icon={truckIcon}
            title="24/7 Support"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
        </Grid>
        <Grid item>
          <Offer
            icon={cashbackIcon}
            title="24/7 Support"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
        </Grid>
        <Grid item>
          <Offer
            icon={qualityIcon}
            title="24/7 Support"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
        </Grid>
        <Grid item>
          <Offer
            icon={supportIcon}
            title="24/7 Support"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhatComfyDecorOffers;
