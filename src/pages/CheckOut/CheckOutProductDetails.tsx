import React from "react";
import { Grid, Typography } from "@mui/material";
import bagImg from "../../assets/images/bagImg.jpg";

const CheckOutProductDetails = () => {
  return (
    <Grid container padding={"1rem"}>
      <Grid item sm={4}>
        <img
          src={bagImg}
          alt="bagImg"
          style={{ width: "6.3rem", height: "5.188rem" }}
        />
      </Grid>
      <Grid item sm={6}>
        <Typography sx={{ color: "#000000", fontSize: "0.875rem" }}>
          Ut diam consequat
        </Typography>
        <Typography sx={{ color: "#A1A8C1", fontSize: "0.75rem" }}>
          Color: Brown
        </Typography>
        <Typography sx={{ color: "#A1A8C1", fontSize: "0.75rem" }}>
          Category: Bedroom
        </Typography>
      </Grid>
      <Grid item sm={2}>
        <Typography sx={{ fontSize: "0.875rem" }} textAlign={"end"}>
          €1234
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CheckOutProductDetails;
